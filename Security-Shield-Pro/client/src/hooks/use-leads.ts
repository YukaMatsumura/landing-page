import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type CreateLeadInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateLead() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: CreateLeadInput) => {
      const res = await fetch(api.leads.create.path, {
        method: api.leads.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Failed to submit form');
      }

      return api.leads.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "送信完了",
        description: "お問い合わせありがとうございます。担当者よりご連絡いたします。",
      });
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "送信エラー",
        description: error.message || "送信中にエラーが発生しました。もう一度お試しください。",
      });
    },
  });
}
