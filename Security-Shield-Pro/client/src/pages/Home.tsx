import { Navigation } from "@/components/Navigation";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Globe, Users, Clock, DollarSign, Shield, FileText, CheckCircle2, TrendingUp, AlertTriangle, ShieldCheck, Search, Zap, Lock, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-100/30 to-transparent skew-x-12 transform origin-top-right pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-r from-emerald-100/30 to-transparent -skew-x-12 transform origin-bottom-left pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm mb-6 border border-emerald-200"
              data-testid="badge-hero-tag"
            >
              実在の従業員を使わない新しいセキュリティ診断
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-gray-800"
              data-testid="text-hero-title"
            >
              <span className="text-emerald-600 relative inline-block">
                仮想従業員
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-cyan-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
              で診断する<br className="md:hidden" />
              セキュリティ耐性
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
              data-testid="text-hero-description"
            >
              Web公開情報から仮想的な従業員ペルソナを生成し、<br className="hidden md:block" />
              ソーシャルエンジニアリング耐性を評価。<br />
              <strong className="text-gray-800">実在の従業員・業務に一切影響を与えません。</strong>
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg px-8 py-6 h-auto shadow-lg shadow-emerald-200 transition-transform hover:-translate-y-1"
                data-testid="button-hero-free-trial"
              >
                無料診断を試す（仮想従業員1名分）
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white border-cyan-300 text-cyan-700 hover:bg-cyan-50 font-medium text-lg px-8 py-6 h-auto"
                onClick={() => document.getElementById("service")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="button-hero-learn-more"
              >
                サービス詳細を見る
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION - Traditional Training Issues */}
      <section id="problem" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="従来型セキュリティ訓練の課題" 
            subtitle="従業員向けフィッシング訓練やソーシャルエンジニアリングテストには、多くの問題点があります"
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-4 text-red-600">
                  <Heart size={32} />
                </div>
                <CardTitle className="text-xl" data-testid="card-problem-stress-title">心理的負担</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground" data-testid="card-problem-stress-content">
                事前通告なしの模擬攻撃は、従業員に不信感やストレスを与え、職場の信頼関係を損なう可能性があります。
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 text-orange-600">
                  <Clock size={32} />
                </div>
                <CardTitle className="text-xl" data-testid="card-problem-disruption-title">業務中断リスク</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground" data-testid="card-problem-disruption-content">
                実際の従業員を対象とした訓練は、通常業務を中断させ、生産性に影響を与えます。
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 text-blue-600">
                  <DollarSign size={32} />
                </div>
                <CardTitle className="text-xl" data-testid="card-problem-cost-title">高コスト</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground" data-testid="card-problem-cost-content">
                大規模な訓練の実施には、準備・実行・評価に膨大なコストと工数がかかります。
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SERVICE FEATURES */}
      <section id="service" className="section-padding bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionHeader title="サービスの特長" subtitle="安全・合理的な非侵襲型セキュリティ診断" />

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xl">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary" data-testid="feature-virtual-title">仮想従業員（ペルソナ）とは</h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid="feature-virtual-desc">
                    貴社Webサイトの公開情報（役員紹介、採用情報、組織図など）をもとに、
                    実在しない架空の従業員像を生成します。この仮想従業員に対して
                    セキュリティシナリオを適用し、組織の耐性を評価します。
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xl">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary" data-testid="feature-web-title">なぜWeb情報だけで診断できるのか</h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid="feature-web-desc">
                    攻撃者は公開情報からターゲットを分析します。同じ視点で貴社の情報露出度を評価し、
                    どのような攻撃シナリオが成立しうるかをシミュレーションすることで、
                    リアルな脆弱性を把握できます。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xl">
                  <Lock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary" data-testid="feature-legal-title">法的・倫理的に安全な理由</h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid="feature-legal-desc">
                    本診断は公開情報のみを使用し、実在の従業員やシステムには一切アクセスしません。
                    従業員への通知・同意取得も不要で、プライバシーリスクやハラスメントの懸念がありません。
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-600 to-cyan-600 p-8 flex items-center justify-center shadow-2xl">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-white/10 backdrop-blur p-4 rounded-xl text-white">
                    <Zap className="h-8 w-8 mb-2" />
                    <div className="text-2xl font-bold">負担ゼロ</div>
                    <div className="text-xs opacity-70">Zero Employee Burden</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur p-4 rounded-xl text-white">
                    <Shield className="h-8 w-8 mb-2" />
                    <div className="text-2xl font-bold">安全診断</div>
                    <div className="text-xs opacity-70">Non-invasive</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur p-4 rounded-xl text-white col-span-2">
                    <TrendingUp className="h-8 w-8 mb-2" />
                    <div className="text-2xl font-bold">低コストで即開始</div>
                    <div className="text-xs opacity-70">Quick & Affordable Start</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIAGNOSIS PROCESS - 5 Steps */}
      <section id="process" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader title="診断プロセス" subtitle="5つのステップで貴社のセキュリティ耐性を可視化" />
          
          <div className="relative max-w-6xl mx-auto">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
              {[
                { step: "01", title: "Web情報収集", desc: "貴社Webサイトの公開情報を収集・分析します。" },
                { step: "02", title: "仮想従業員生成", desc: "収集情報をもとに仮想的な従業員ペルソナを作成します。" },
                { step: "03", title: "シナリオ設計", desc: "想定される攻撃シナリオを複数パターン設計します。" },
                { step: "04", title: "仮想評価", desc: "仮想従業員に対してシナリオを適用し、耐性を評価します。" },
                { step: "05", title: "診断書作成", desc: "結果を分析し、改善提案を含む診断書を作成します。" },
              ].map((item, index) => (
                <div key={index} className="bg-white p-5 rounded-xl border border-border shadow-sm hover:shadow-md transition-all text-center group" data-testid={`process-step-${index + 1}`}>
                  <div className="w-10 h-10 bg-slate-100 text-primary rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-base mb-2">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUTPUT EXAMPLE */}
      <section className="section-padding bg-gradient-to-br from-emerald-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <SectionHeader title="診断アウトプット例" light subtitle="仮想従業員を通じて見えてくるリスクと改善点" />

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur border border-white/20 p-8 rounded-2xl" data-testid="output-risk">
              <div className="text-cyan-300 mb-4">
                <AlertTriangle size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">想定リスク</h3>
              <p className="text-white/80">
                仮想従業員のペルソナに対し、どのような攻撃シナリオが成立しうるかを具体的に提示。
                攻撃者視点でのリスク評価を行います。
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur border border-white/20 p-8 rounded-2xl" data-testid="output-weakness">
              <div className="text-cyan-300 mb-4">
                <Search size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">弱点傾向</h3>
              <ul className="space-y-2 text-white/80 mt-4">
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-cyan-300 rounded-full" /> 情報公開レベルの評価</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-cyan-300 rounded-full" /> 狙われやすいポジションの特定</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-cyan-300 rounded-full" /> シナリオ別の成功確率推定</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur border border-white/20 p-8 rounded-2xl" data-testid="output-improvement">
              <div className="text-cyan-300 mb-4">
                <FileText size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">改善示唆</h3>
              <p className="text-white/80 mb-4">
                診断結果に基づく具体的な改善提案。情報公開ポリシーの見直しや、
                注意喚起すべきポイントを明確にします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionHeader title="料金プラン" subtitle="スモールスタートから本格導入まで" />
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow" data-testid="plan-free">
              <h3 className="text-xl font-bold text-center mb-4 text-primary">無料プラン</h3>
              <div className="text-3xl font-bold text-center mb-2 text-emerald-600">無料</div>
              <div className="text-center text-sm text-muted-foreground mb-6">お試し診断</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="text-emerald-600 w-5 h-5 flex-shrink-0" />
                  仮想従業員：1名分
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="text-emerald-600 w-5 h-5 flex-shrink-0" />
                  攻撃シナリオ概要
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="text-emerald-600 w-5 h-5 flex-shrink-0" />
                  テスト結果の概要開示
                </li>
              </ul>
              <Button onClick={scrollToContact} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" data-testid="button-plan-free">無料で試す</Button>
            </div>

            {/* Paid Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-emerald-500 relative transform md:-translate-y-4" data-testid="plan-paid">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                おすすめ
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-primary">有料プラン</h3>
              <div className="text-3xl font-bold text-center mb-2 text-emerald-600">お問い合わせ</div>
              <div className="text-center text-sm text-muted-foreground mb-6">本格診断</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="text-emerald-600 w-5 h-5 flex-shrink-0" />
                  仮想従業員：最大5名分
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="text-emerald-600 w-5 h-5 flex-shrink-0" />
                  各シナリオ詳細開示
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="text-emerald-600 w-5 h-5 flex-shrink-0" />
                  テスト結果の詳細分析
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="text-emerald-600 w-5 h-5 flex-shrink-0" />
                  正式な診断書（PDF）
                </li>
              </ul>
              <Button onClick={scrollToContact} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" data-testid="button-plan-paid">問い合わせる</Button>
            </div>

            {/* Custom Plan */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow" data-testid="plan-custom">
              <h3 className="text-xl font-bold text-center mb-4 text-primary">カスタマイズ</h3>
              <div className="text-3xl font-bold text-center mb-2 text-emerald-600">別途見積</div>
              <div className="text-center text-sm text-muted-foreground mb-6">オーダーメイド対応</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="text-emerald-600 w-5 h-5 flex-shrink-0" />
                  ペルソナの精緻化
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="text-emerald-600 w-5 h-5 flex-shrink-0" />
                  既存研修内容の反映
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="text-emerald-600 w-5 h-5 flex-shrink-0" />
                  業界・職種特化シナリオ
                </li>
              </ul>
              <Button onClick={scrollToContact} className="w-full" variant="outline" data-testid="button-plan-custom">問い合わせる</Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-padding bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeader title="よくある質問" />
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium" data-testid="faq-impact-trigger">本当に従業員に影響はありませんか？</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed" data-testid="faq-impact-content">
                はい、一切ありません。本サービスは貴社Webサイトの公開情報のみを使用し、
                「仮想従業員」という架空のペルソナを生成して診断を行います。
                実在の従業員への連絡、テスト、モニタリングは一切行いません。
                業務への影響も心理的負担もゼロです。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium" data-testid="faq-legal-trigger">法的な問題はありませんか？</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed" data-testid="faq-legal-content">
                ありません。本診断は公開されている情報のみを使用するため、
                プライバシー侵害や不正アクセスに該当しません。
                従業員への同意取得や労使協議も不要です。
                安心してご利用いただけます。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium" data-testid="faq-target-trigger">どのような企業に向いていますか？</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed" data-testid="faq-target-content">
                以下のような企業に特におすすめです：<br />
                ・従業員への心理的負担なくセキュリティ診断をしたい企業<br />
                ・低コストでセキュリティ対策を始めたいスタートアップ・中小企業<br />
                ・既存の研修効果を客観的に評価したい企業<br />
                ・取引先からセキュリティ対策の証明を求められている企業
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium" data-testid="faq-accuracy-trigger">仮想診断で本当に有効な結果が得られますか？</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed" data-testid="faq-accuracy-content">
                はい。実際の攻撃者も公開情報からターゲットを分析します。
                同じ視点で貴社の情報露出度を評価することで、
                「どのような攻撃シナリオが成立しうるか」を具体的に把握できます。
                これは従来の訓練では得られない、攻撃者視点の客観的な評価です。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA / CONTACT FORM */}
      <section id="contact" className="section-padding bg-gradient-to-br from-emerald-700 to-cyan-700">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div className="text-white space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight" data-testid="text-cta-title">
                まずは無料診断で<br />
                貴社のリスクを可視化しませんか？
              </h2>
              <p className="text-white/80 text-lg leading-relaxed" data-testid="text-cta-description">
                仮想従業員1名分の診断を無料でお試しいただけます。<br />
                実在の従業員に一切影響を与えず、<br />
                貴社のセキュリティ耐性を客観的に評価します。
              </p>
              
              <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                <h4 className="font-bold text-xl mb-4 text-cyan-300" data-testid="text-cta-benefits-title">無料診断で分かること</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-300" /> 公開情報からの攻撃シナリオ例</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-300" /> 仮想従業員の反応予測</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-300" /> 改善に向けた初期示唆</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Shield className="w-5 h-5" />
                  <span>従業員負担ゼロ</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Lock className="w-5 h-5" />
                  <span>法的リスクなし</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Zap className="w-5 h-5" />
                  <span>最短3営業日</span>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-emerald-900 text-white/60 py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-2 font-bold text-xl text-white">
              <ShieldCheck className="h-6 w-6 text-cyan-400" />
              <span>SecurityCheck</span>
            </div>
            <div className="text-sm">
              &copy; 2024 Virtual Security Diagnosis Service. All rights reserved.
            </div>
          </div>
          <div className="text-xs text-center text-white/40">
            本サービスは公開情報のみを使用した非侵襲型診断サービスです。実在の従業員・システムへのアクセスは一切行いません。
          </div>
        </div>
      </footer>
    </div>
  );
}
