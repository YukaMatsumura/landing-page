import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema } from "@shared/schema";
import { useCreateLead } from "@/hooks/use-leads";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { z } from "zod";

const formSchema = insertLeadSchema.extend({
  email: z.string().email("有効なメールアドレスを入力してください"),
  contactName: z.string().min(1, "担当者名は必須です"),
  type: z.enum(["check", "contact", "document"], {
    required_error: "問い合わせ種別を選択してください",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const { mutate, isPending } = useCreateLead();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "check",
      companyName: "",
      contactName: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-border/50">
      <h3 className="text-2xl font-bold text-primary mb-2" data-testid="form-title">無料診断・お問い合わせ</h3>
      <p className="text-sm text-muted-foreground mb-6" data-testid="form-subtitle">仮想従業員1名分の診断を無料でお試しいただけます</p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ご用件 <span className="text-emerald-600">*</span></FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger data-testid="select-type">
                      <SelectValue placeholder="選択してください" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="check">無料診断を申し込む（仮想従業員1名分）</SelectItem>
                    <SelectItem value="document">資料請求</SelectItem>
                    <SelectItem value="contact">その他お問い合わせ</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>貴社名</FormLabel>
                  <FormControl>
                    <Input placeholder="株式会社○○" {...field} value={field.value ?? ""} data-testid="input-company" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="contactName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ご担当者名 <span className="text-emerald-600">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="山田 太郎" {...field} data-testid="input-name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>メールアドレス <span className="text-emerald-600">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="taro.yamada@example.co.jp" {...field} data-testid="input-email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>備考</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="診断対象のWebサイトURLや、ご質問があればご記入ください" 
                    className="min-h-[120px]"
                    {...field}
                    value={field.value ?? ""}
                    data-testid="textarea-message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            disabled={isPending}
            data-testid="button-submit"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                送信中...
              </>
            ) : (
              "送信する"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
