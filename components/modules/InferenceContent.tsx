import type { TocItem } from '@/components/layout/TableOfContents'

export const inferenceTocItems: TocItem[] = [
  { id: 'bai-toan',             label: '1. "87% này có đáng tin không?"' },
  { id: 'sampling-variability', label: '2. Tại sao sample luôn dao động?' },
  { id: 'confidence-interval',  label: '3. Confidence Interval' },
  { id: 'margin-of-error',      label: '4. Margin of Error' },
  { id: 'confidence-level',     label: '5. 95% có nghĩa là gì?' },
  { id: 'them-sample',          label: '6. Khi nào lấy thêm sample?' },
  { id: 'common-mistakes',      label: '7. Common Mistakes' },
  { id: 'case-study',           label: '8. Case Study' },
]

/* ── Slack Thread ─────────────────────────────────────────────────────────── */

type SlackMsg = { from: string; text: React.ReactNode; time?: string }

function SlackThread({ channel, messages }: { channel: string; messages: SlackMsg[] }) {
  const initials = (name: string) => name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
  return (
    <div className="border border-outline-variant/30 rounded-xl overflow-hidden my-6">
      <div className="bg-surface-container px-4 py-2 border-b border-outline-variant/20">
        <span className="font-code text-[0.6875rem] text-on-surface-variant/60"># {channel}</span>
      </div>
      <div className="p-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className="flex gap-3 items-start">
            <div className="w-8 h-8 rounded-lg bg-secondary/15 flex items-center justify-center shrink-0">
              <span className="font-ui-label text-[0.625rem] text-secondary font-bold">{initials(msg.from)}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2 mb-0.5">
                <span className="font-ui-label text-[0.6875rem] text-on-surface font-semibold">{msg.from}</span>
                {msg.time && <span className="font-code text-[0.625rem] text-on-surface-variant/40">{msg.time}</span>}
              </div>
              <div className="font-body-md text-body-md text-on-surface-variant">{msg.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── DA Decision ──────────────────────────────────────────────────────────── */

function DADecision({ use, noUse, risk, decision }: {
  use: string; noUse: string; risk: string; decision: string
}) {
  return (
    <div className="border border-secondary/25 bg-secondary/5 rounded-xl p-5 my-6">
      <p className="font-ui-label text-[0.625rem] text-secondary uppercase tracking-widest mb-4">
        🎯 Nếu bạn là DA tại ShopNow
      </p>
      <div className="space-y-3">
        <div className="flex gap-3">
          <span className="text-secondary shrink-0 text-sm mt-0.5">✓</span>
          <p className="font-body-md text-[0.8rem] text-on-surface-variant">
            <span className="font-medium text-on-surface">Khi nào dùng: </span>{use}
          </p>
        </div>
        <div className="flex gap-3">
          <span className="text-error/70 shrink-0 text-sm mt-0.5">✕</span>
          <p className="font-body-md text-[0.8rem] text-on-surface-variant">
            <span className="font-medium text-on-surface">Khi nào không: </span>{noUse}
          </p>
        </div>
        <div className="flex gap-3">
          <span className="text-on-surface-variant/40 shrink-0 text-sm mt-0.5">⚠</span>
          <p className="font-body-md text-[0.8rem] text-on-surface-variant">
            <span className="font-medium text-on-surface">Rủi ro: </span>{risk}
          </p>
        </div>
        <div className="border-t border-secondary/20 pt-3 mt-1">
          <p className="font-ui-label text-[0.6875rem] text-secondary mb-1">Quyết định thực tế</p>
          <p className="font-body-md text-[0.8rem] text-on-surface">{decision}</p>
        </div>
      </div>
    </div>
  )
}

/* ── Standard Helpers ─────────────────────────────────────────────────────── */

function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="font-headline-lg text-headline-lg text-on-surface mb-6 scroll-mt-24">
      {children}
    </h2>
  )
}

function Code({ children }: { children: string }) {
  return (
    <pre className="bg-surface-container rounded-xl p-5 overflow-x-auto my-4 text-sm leading-relaxed">
      <code className="font-code text-on-surface whitespace-pre">{children}</code>
    </pre>
  )
}

function Output({ children }: { children: string }) {
  return (
    <div className="bg-inverse-surface rounded-xl p-5 overflow-x-auto mb-8">
      <p className="font-ui-label text-[0.625rem] text-secondary/80 uppercase tracking-widest mb-2">Output</p>
      <code className="font-code text-[0.8rem] text-inverse-on-surface/90 whitespace-pre leading-relaxed">{children}</code>
    </div>
  )
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-secondary pl-5 py-1 my-6 bg-secondary/5 rounded-r-lg">
      <p className="font-body-md text-body-md text-on-surface">{children}</p>
    </div>
  )
}

function WarningBlock({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="border border-error-container bg-error-container/30 rounded-xl p-5 my-6">
      <p className="font-ui-label text-[0.625rem] text-on-error-container uppercase tracking-widest mb-3">
        {title ?? '⚠ Cảnh báo quan trọng'}
      </p>
      <div className="font-body-md text-body-md text-on-surface space-y-3">{children}</div>
    </div>
  )
}

function FlowRow({ nodes, caption }: {
  nodes: Array<{ label: string; sub?: string; variant?: 'default' | 'primary' | 'warn' | 'ok' }>
  caption?: string
}) {
  const cls: Record<string, string> = {
    default: 'bg-surface-container border-outline-variant/40 text-on-surface',
    primary: 'bg-secondary/10 border-secondary/40 text-secondary',
    warn:    'bg-error-container/30 border-error-container text-on-error-container',
    ok:      'bg-secondary/10 border-secondary/50 text-on-surface',
  }
  return (
    <div className="my-6 overflow-x-auto">
      <div className="flex items-center gap-2 min-w-fit pb-1">
        {nodes.map((node, i) => (
          <div key={i} className="flex items-center gap-2 shrink-0">
            <div className={`border rounded-xl px-4 py-3 text-center min-w-[108px] ${cls[node.variant ?? 'default']}`}>
              <div className="font-ui-label text-ui-label font-medium leading-tight">{node.label}</div>
              {node.sub && <div className="text-[0.625rem] opacity-60 mt-0.5 leading-snug">{node.sub}</div>}
            </div>
            {i < nodes.length - 1 && (
              <span className="text-on-surface-variant/40 text-base select-none">→</span>
            )}
          </div>
        ))}
      </div>
      {caption && <p className="text-[0.6875rem] text-on-surface-variant/50 mt-2 font-ui-label">{caption}</p>}
    </div>
  )
}

function QuickSummary({ items }: { items: string[] }) {
  return (
    <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5 my-6">
      <p className="font-ui-label text-[0.625rem] text-secondary uppercase tracking-widest mb-3">
        Quick Summary
      </p>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="font-body-md text-body-md text-on-surface-variant flex gap-2">
            <span className="text-secondary shrink-0 mt-0.5">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function TradeoffBlock({ options, caption }: {
  options: Array<{ label: string; tag?: string; tagVariant?: 'ok' | 'warn' | 'neutral'; pros: string[]; cons: string[] }>
  caption?: string
}) {
  const gridCls = options.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-3'
  const tagCls: Record<string, string> = {
    ok: 'text-secondary', warn: 'text-on-error-container', neutral: 'text-on-surface-variant/50',
  }
  return (
    <div className="my-6">
      <div className={`grid gap-3 ${gridCls}`}>
        {options.map((opt, i) => (
          <div key={i} className="border border-outline-variant/30 rounded-xl p-4">
            <div className="flex items-baseline gap-2 mb-3">
              <p className="font-ui-label text-ui-label text-on-surface">{opt.label}</p>
              {opt.tag && (
                <span className={`font-ui-label text-[0.625rem] uppercase tracking-wider ${tagCls[opt.tagVariant ?? 'neutral']}`}>
                  {opt.tag}
                </span>
              )}
            </div>
            <div className="space-y-1.5">
              {opt.pros.map((p, j) => (
                <div key={`p${j}`} className="flex gap-2">
                  <span className="text-secondary shrink-0 text-sm font-semibold leading-5">+</span>
                  <span className="font-body-md text-[0.8rem] text-on-surface-variant">{p}</span>
                </div>
              ))}
              {opt.cons.map((c, j) => (
                <div key={`c${j}`} className="flex gap-2">
                  <span className="text-error/70 shrink-0 text-sm font-semibold leading-5">−</span>
                  <span className="font-body-md text-[0.8rem] text-on-surface-variant">{c}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {caption && <p className="text-[0.6875rem] text-on-surface-variant/50 mt-2 font-ui-label">{caption}</p>}
    </div>
  )
}

/* ── CI Range Visual ──────────────────────────────────────────────────────── */

function CIBar({
  low, center, high, scaleMin, scaleMax, breakeven, unit = '%',
}: {
  low: number; center: number; high: number
  scaleMin: number; scaleMax: number
  breakeven?: number
  unit?: string
}) {
  const range = scaleMax - scaleMin
  const pct = (v: number) => `${((v - scaleMin) / range) * 100}%`
  const barLeft = ((low - scaleMin) / range) * 100
  const barWidth = ((high - low) / range) * 100

  return (
    <div className="my-6">
      <div className="relative h-10 bg-surface-container rounded-xl overflow-hidden border border-outline-variant/30">
        {/* CI range fill */}
        <div
          className="absolute top-0 h-full bg-secondary/20"
          style={{ left: `${barLeft}%`, width: `${barWidth}%` }}
        />
        {/* breakeven line */}
        {breakeven !== undefined && (
          <div
            className="absolute top-0 h-full w-px bg-error/60"
            style={{ left: pct(breakeven) }}
          />
        )}
        {/* center dot */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-secondary"
          style={{ left: pct(center) }}
        />
        {/* low/high labels inside bar */}
        <div className="absolute inset-0 flex items-center justify-between px-3">
          <span
            className="font-code text-[0.625rem] text-secondary"
            style={{ marginLeft: `${Math.max(0, barLeft - 2)}%` }}
          >
            {low}{unit}
          </span>
        </div>
      </div>

      <div className="flex justify-between mt-1.5 px-0.5">
        <span className="font-code text-[0.625rem] text-on-surface-variant/40">{scaleMin}{unit}</span>
        <div className="text-center">
          <span className="font-ui-label text-[0.6875rem] text-secondary">
            [{low}{unit}, {high}{unit}] — điểm giữa {center}{unit}
          </span>
          {breakeven !== undefined && (
            <span className="ml-3 font-ui-label text-[0.6875rem] text-error/70">
              break-even {breakeven}{unit}
            </span>
          )}
        </div>
        <span className="font-code text-[0.625rem] text-on-surface-variant/40">{scaleMax}{unit}</span>
      </div>
    </div>
  )
}

/* ── Inference Checklist ──────────────────────────────────────────────────── */

function InferenceChecklist() {
  const items = [
    {
      label: 'Đã tính SE chưa?',
      context: 'SE = √(p̂(1−p̂)/n) cho tỷ lệ. Đây là nền tảng của mọi CI — không có SE thì không có CI.',
    },
    {
      label: 'Đã báo cáo CI thay vì chỉ point estimate chưa?',
      context: '"87%" chưa đủ. "87% (95% CI: [85.5%, 88.5%], n=2,000)" mới là con số stakeholder có thể ra quyết định.',
    },
    {
      label: 'CI có đủ hẹp để ra quyết định không?',
      context: 'Nếu CI span qua cả hai phía của ngưỡng quyết định (ví dụ break-even 80%), cần thêm data trước khi kết luận.',
    },
    {
      label: 'Đã giải thích CI đúng chưa?',
      context: '"Phương pháp này đúng trong 95% trường hợp nếu lặp lại" — không phải "95% chắc chắn con số thật nằm đây".',
    },
    {
      label: 'Đã ghi sample size và điều kiện survey chưa?',
      context: 'n=2,000 từ sampling frame 1.2M active customers tháng 6 — context này bắt buộc có trong mọi báo cáo.',
    },
    {
      label: 'Stakeholder có hiểu ý nghĩa của "uncertainty" không?',
      context: 'CEO và CFO không cần biết công thức. Nhưng họ cần biết con số này có thể lệch bao nhiêu — đó là quyết định của họ để calibrate.',
    },
  ]
  return (
    <div className="border border-secondary/30 rounded-xl p-6 my-8">
      <p className="font-ui-label text-[0.625rem] text-secondary uppercase tracking-widest mb-1">
        Statistical Inference Checklist
      </p>
      <p className="font-body-md text-[0.8rem] text-on-surface-variant mb-6">
        Trước khi trình bày kết quả survey cho stakeholder — đi qua 6 mục này.
      </p>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex gap-4">
            <div className="w-5 h-5 rounded border-2 border-secondary/40 shrink-0 mt-0.5" />
            <div>
              <p className="font-ui-label text-ui-label text-on-surface">{item.label}</p>
              <p className="font-body-md text-[0.75rem] text-on-surface-variant mt-0.5 leading-snug">{item.context}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ── Main component ───────────────────────────────────────────────────────── */

export function InferenceContent() {
  return (
    <article className="max-w-[720px] py-8 lg:py-10 lg:pr-8">

      {/* ── Header ── */}
      <p className="font-ui-label text-ui-label text-secondary uppercase tracking-widest mb-4">
        Module 3
      </p>
      <h1 className="font-display text-display text-on-surface mb-6 leading-[1.05]">
        Statistical Inference
      </h1>

      {/* ── Bridge card ── */}
      <div className="border border-outline-variant/30 bg-surface-container rounded-xl p-5 mb-8">
        <p className="font-ui-label text-[0.625rem] text-secondary uppercase tracking-widest mb-3">
          <a href="/modules/sampling" className="text-secondary hover:underline">Tiếp nối từ Module 2 — Data Sampling</a>
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Module Sampling kết thúc với Board Meeting thứ Sáu: delivery satisfaction 3.71/5,
          CI [3.67, 3.76], n=2,000. Tuần tiếp theo, Marketing chạy thêm một survey ngắn hơn —
          câu hỏi yes/no: <em>"Bạn có hài lòng với tốc độ giao hàng của ShopNow không?"</em>
        </p>
        <p className="font-body-lg text-body-lg text-on-surface mt-3 italic">
          "87% khách hàng nói Có. Đây là tín hiệu rất tốt cho Q3 logistics plan."
        </p>
        <p className="font-body-md text-[0.8rem] text-on-surface-variant/60 mt-2">— Linh (Marketing), team meeting, thứ Hai tuần sau</p>
      </div>

      <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
        Và Analytics Lead Tuấn hỏi một câu ngắn mà bạn sẽ còn gặp lại nhiều lần trong sự nghiệp.
        Module này trả lời câu hỏi đó.
      </p>

      {/* ── Learning Objectives ── */}
      <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-6 mb-16">
        <p className="font-ui-label text-[0.625rem] text-secondary uppercase tracking-widest mb-4">
          Sau module này, bạn sẽ có thể
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            'Giải thích tại sao mọi sample đều dao động — và tại sao đó là chuyện bình thường',
            'Tính và diễn giải Confidence Interval cho kết quả survey',
            'Nói đúng 95% confidence có nghĩa là gì — và quan trọng hơn, không có nghĩa là gì',
            'Biết khi nào CI quá rộng và cần lấy thêm sample',
            'Trình bày kết quả cho CEO với đầy đủ uncertainty — không under-claim, không over-claim',
            'Trả lời tự tin khi leader hỏi: "Em có chắc con số này đáng tin không?"',
          ].map((obj, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="text-secondary shrink-0 mt-0.5 font-ui-label">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-body-md text-body-md text-on-surface-variant">{obj}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 1 — Business Problem
      ══════════════════════════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionTitle id="bai-toan">1. "87% này có đáng tin không?"</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Linh vừa trình bày xong. Slide 3 ghi: <strong className="text-on-surface">"87% satisfied."</strong>{' '}
          Tuấn ngồi im một chút, rồi hỏi:
        </p>

        <SlackThread
          channel="data-team"
          messages={[
            { from: 'Analytics Lead Tuấn', text: '"87% này đến từ 2,000 người. Nếu Marketing khảo sát 2,000 người khác vào tuần tới, vẫn ra 87% không?"', time: '10:14' },
            { from: 'Marketing Linh', text: 'Chắc là... gần 87%?', time: '10:15' },
            { from: 'Analytics Lead Tuấn', text: '"Gần" là bao nhiêu? ±1%? ±5%? ±10%? CEO sắp dùng con số này để quyết định ngân sách logistics Q3. Mình cần biết con số này có thể sai bao nhiêu."', time: '10:16' },
          ]}
        />

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Đây là câu hỏi mà mọi báo cáo survey phải trả lời được — không phải sau khi CEO hỏi,
          mà <em>trước khi trình bày</em>.
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          87% là <strong className="text-on-surface">point estimate</strong> — kết quả từ một lần đo
          với một sample cụ thể. Nhưng nếu lấy sample khác, con số đó sẽ thay đổi. Statistical
          Inference là tập hợp các công cụ giúp bạn trả lời: <em>"Thay đổi bao nhiêu? Và điều đó
          ảnh hưởng gì đến quyết định?"</em>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
          <div className="border border-error-container bg-error-container/20 rounded-xl p-4">
            <p className="font-ui-label text-[0.625rem] text-on-error-container uppercase tracking-wider mb-2">
              Báo cáo chưa đầy đủ
            </p>
            <p className="font-body-md text-[0.8rem] text-on-surface">
              "87% khách hàng hài lòng với tốc độ giao hàng."
            </p>
            <p className="font-body-md text-[0.75rem] text-on-surface-variant/70 mt-2 italic">
              → Nghe tự tin. Nhưng không biết con số này có thể lệch bao nhiêu.
            </p>
          </div>
          <div className="border border-secondary/30 bg-secondary/5 rounded-xl p-4">
            <p className="font-ui-label text-[0.625rem] text-secondary uppercase tracking-wider mb-2">
              Báo cáo đầy đủ
            </p>
            <p className="font-body-md text-[0.8rem] text-on-surface">
              "87% khách hàng hài lòng (95% CI: [85.5%, 88.5%], n=2,000)."
            </p>
            <p className="font-body-md text-[0.75rem] text-on-surface-variant/70 mt-2 italic">
              → CEO biết kết quả có thể dao động trong khoảng nào — và ra quyết định có căn cứ.
            </p>
          </div>
        </div>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Phần còn lại của module giải thích con số <em>[85.5%, 88.5%]</em> đến từ đâu,
          nó có nghĩa gì, và khi nào nó đủ rộng để bạn cần làm lại survey.
        </p>

        <QuickSummary items={[
          'Point estimate (87%) không đủ để ra quyết định quan trọng — cần biết uncertainty của nó.',
          'Statistical Inference trả lời: "Kết quả này có thể sai bao nhiêu? Và mình có đủ tin để kết luận không?"',
          'Báo cáo chuẩn: [con số] + [CI] + [n] — thiếu một trong ba là thiếu thông tin.',
        ]} />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 — Sampling Variability
      ══════════════════════════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionTitle id="sampling-variability">2. Tại sao sample luôn dao động?</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Trước khi tính CI, cần hiểu tại sao nó cần thiết. Câu trả lời bắt đầu từ một
          thí nghiệm tư duy đơn giản.
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Bạn có 2,000 phản hồi. 87% — tức 1,740 người — nói hài lòng. Giờ thử tưởng tượng:
          nếu Marketing gửi survey đến 2,000 <em>người khác</em> từ cùng 1.2M Sampling Frame
          đó, kết quả có còn là 87% không?
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Không nhất thiết. Lần này có thể ra 86%, lần sau 88.5%, lần tiếp nữa 85.7%.
          Không có lần nào sai — tất cả chỉ là các sample khác nhau từ cùng một population.
          Đây là <strong className="text-on-surface">Sampling Variability</strong>: mọi sample đều dao động,
          và đó là chuyện tự nhiên, không phải lỗi thiết kế.
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Bootstrap từ Module 2 có thể giúp mình thấy điều này trực tiếp:
        </p>

        <Code>{`import numpy as np
np.random.seed(42)

# Data từ survey: 1=hài lòng, 0=không hài lòng
survey = np.array([1] * 1740 + [0] * 260)  # 87% satisfied

# Giả lập 1,000 lần lấy mẫu lại → mỗi lần 2,000 người
boot_props = [
    np.random.choice(survey, size=2000, replace=True).mean()
    for _ in range(1000)
]

print(f"Mean:  {np.mean(boot_props):.4f}")
print(f"Std:   {np.std(boot_props):.4f}   ← dao động trung bình giữa các lần")
print(f"Min:   {np.min(boot_props):.4f}")
print(f"Max:   {np.max(boot_props):.4f}")
print(f"95% range: [{np.percentile(boot_props, 2.5):.4f}, {np.percentile(boot_props, 97.5):.4f}]")`}
        </Code>
        <Output>{`Mean:  0.8700
Std:   0.0075   ← dao động trung bình giữa các lần
Min:   0.8435
Max:   0.8960
95% range: [0.8551, 0.8848]`}
        </Output>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          1,000 lần lấy mẫu lại → kết quả dao động từ 84.4% đến 89.6%, phần lớn
          nằm trong khoảng [85.5%, 88.5%]. Standard Deviation là 0.75% —
          đây là <strong className="text-on-surface">Standard Error (SE)</strong>:
          mức dao động trung bình của sample proportion nếu lặp lại nhiều lần.
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Bootstrap thấy điều này bằng simulation. Nhưng có một công thức tính SE trực tiếp
          mà không cần chạy 1,000 lần:
        </p>

        <div className="border border-outline-variant/30 bg-surface-container rounded-xl p-5 my-6">
          <p className="font-ui-label text-[0.625rem] text-secondary uppercase tracking-widest mb-3">
            Standard Error — công thức tắt
          </p>
          <div className="font-code text-[0.9rem] text-on-surface text-center py-2">
            SE = √( p̂ × (1 − p̂) / n )
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
            {[
              { sym: 'p̂', def: 'tỷ lệ trong sample', val: '0.87' },
              { sym: '1 − p̂', def: 'tỷ lệ không hài lòng', val: '0.13' },
              { sym: 'n', def: 'cỡ mẫu', val: '2,000' },
            ].map(s => (
              <div key={s.sym} className="bg-surface-container-low border border-outline-variant/20 rounded-lg p-3">
                <p className="font-code text-[0.875rem] text-secondary">{s.sym}</p>
                <p className="font-body-md text-[0.75rem] text-on-surface-variant">{s.def}</p>
                <p className="font-ui-label text-[0.75rem] text-on-surface mt-1">{s.val}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t border-outline-variant/20 pt-3 text-center">
            <p className="font-code text-[0.8rem] text-on-surface-variant">
              SE = √(0.87 × 0.13 / 2000) = √(0.0000566) ≈ <strong className="text-on-surface">0.0075</strong>
            </p>
            <p className="font-body-md text-[0.75rem] text-on-surface-variant/70 mt-1">
              Khớp với Std từ Bootstrap: 0.0075 ✓
            </p>
          </div>
        </div>

        <Note>
          SE nhỏ hơn khi n lớn hơn — vì √n ở mẫu số tăng. Survey 8,000 người thay vì 2,000:
          SE giảm còn một nửa (~0.0038). Đây là lý do tại sao thêm sample giúp thu hẹp uncertainty.
        </Note>

        <DADecision
          use="Tính SE bất cứ khi nào bạn có kết quả từ một sample và cần đánh giá độ dao động của nó. SE là con số đầu tiên cần tính trước khi làm bất cứ điều gì khác."
          noUse="SE không có ý nghĩa khi sample bị bias — SE đo sampling variability, không đo bias. Sample bị bias thì SE nhỏ vẫn không giúp được gì."
          risk="Nhầm SE với độ lệch chuẩn của dữ liệu (SD). SD đo spread của raw data; SE đo spread của sample statistic nếu lấy mẫu lại. Hai thứ khác nhau hoàn toàn."
          decision="ShopNow survey: p̂=0.87, n=2,000 → SE=0.0075. Con số này nói: 'trung bình, các lần lấy mẫu lại sẽ cho kết quả cách 87% khoảng 0.75%.' Đủ để tính CI."
        />

        <QuickSummary items={[
          'Sampling Variability là chuyện bình thường — mọi sample khác nhau sẽ cho kết quả hơi khác nhau.',
          'Standard Error (SE) = mức dao động trung bình của sample proportion. Công thức: √(p̂(1−p̂)/n).',
          'SE nhỏ khi n lớn. Tăng n gấp 4 → SE giảm còn một nửa (do căn bậc hai).',
        ]} />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3 — Confidence Interval
      ══════════════════════════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionTitle id="confidence-interval">3. Confidence Interval</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Bạn biết sample dao động. Biết SE là 0.75%. Câu hỏi tiếp theo Tuấn sẽ hỏi:
          <em> "Vậy mình nên báo cáo khoảng nào?"</em>
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Nếu chỉ báo "87%", CEO không biết con số này có thể lệch bao nhiêu.
          Nếu báo "87% ± một khoảng hợp lý" — CEO có đủ thông tin để đánh giá rủi ro và ra quyết định.
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Khoảng đó chính là <strong className="text-on-surface">Confidence Interval (CI)</strong>.
          Intuition: nếu SE là mức dao động điển hình giữa các lần lấy mẫu, thì CI là khoảng
          bao quanh kết quả của bạn mà sẽ bắt được phần lớn các lần lấy mẫu khác.
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Cụ thể hơn: để bắt được 95% kết quả nếu lấy mẫu lại, cần đi ra hai phía khoảng
          1.96 lần SE. Con số 1.96 này đến từ phân phối chuẩn — đó là chi tiết toán học
          bạn không cần nhớ, chỉ cần biết Python sẽ tính tự động:
        </p>

        <Code>{`import numpy as np
from scipy import stats

p_hat = 0.87   # tỷ lệ hài lòng trong sample
n     = 2000   # cỡ mẫu

# Bước 1: Standard Error
se = np.sqrt(p_hat * (1 - p_hat) / n)

# Bước 2: z-score cho 95% CI (1.96)
z = stats.norm.ppf(0.975)   # = 1.96

# Bước 3: Margin of Error và CI
moe      = z * se
ci_low   = p_hat - moe
ci_high  = p_hat + moe

print(f"Standard Error (SE): {se:.4f}")
print(f"Margin of Error:     ±{moe:.4f}  (±{moe*100:.2f}%)")
print(f"95% CI:              [{ci_low:.4f}, {ci_high:.4f}]")
print(f"                     [{ci_low*100:.1f}%, {ci_high*100:.1f}%]")`}
        </Code>
        <Output>{`Standard Error (SE): 0.0075
Margin of Error:     ±0.0147  (±1.47%)
95% CI:              [0.8553, 0.8847]
                     [85.5%, 88.5%]`}
        </Output>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Kết quả: <strong className="text-on-surface">87% (95% CI: [85.5%, 88.5%])</strong>.
          Khoảng này trả lời câu hỏi của Tuấn: nếu lấy 2,000 người khác vào tuần tới,
          kết quả gần như chắc chắn sẽ nằm trong [85.5%, 88.5%] — không phải 70%, không phải 95%.
        </p>

        <CIBar low={85.5} center={87} high={88.5} scaleMin={80} scaleMax={95} />

        <FlowRow
          nodes={[
            { label: 'p̂ = 87%', sub: 'point estimate', variant: 'primary' },
            { label: 'SE = 0.75%', sub: '√(p̂(1−p̂)/n)', variant: 'default' },
            { label: 'z = 1.96', sub: '95% confidence', variant: 'default' },
            { label: 'MoE = ±1.47%', sub: 'z × SE', variant: 'default' },
            { label: 'CI = [85.5%, 88.5%]', sub: 'p̂ ± MoE', variant: 'ok' },
          ]}
          caption="Ba bước tính CI cho tỷ lệ — bước 3 là thứ thay đổi theo confidence level bạn chọn"
        />

        <Note>
          Nếu distribution của dữ liệu không phải tỷ lệ (ví dụ mean của điểm satisfaction 1–5),
          công thức SE sẽ khác: SE = s/√n, trong đó s là standard deviation của sample.
          Python và scipy xử lý cả hai — điều quan trọng là hiểu bước tính, không phải nhớ công thức.
        </Note>

        <DADecision
          use="Mọi lúc báo cáo kết quả từ sample cho stakeholder ra quyết định. Không có ngoại lệ — nếu kết quả đến từ sample thì phải có CI đi kèm."
          noUse="CI tính từ sample bị bias vẫn là CI sai — hẹp và tự tin nhưng center point lệch. Phải fix bias trước, tính CI sau."
          risk="Báo '87%' mà không có CI khiến stakeholder hiểu đó là con số chắc chắn. Khi kết quả thực tế ra 85% hoặc 89%, họ sẽ mất tin tưởng vào DA team."
          decision="ShopNow: báo cáo '87% (95% CI: [85.5%, 88.5%], n=2,000)'. CEO nhìn con số này và biết: ngay cả kịch bản xấu nhất cũng là 85.5% — vẫn là tín hiệu rất tốt."
        />

        <QuickSummary items={[
          'CI = p̂ ± (z × SE). Với 95% confidence: z = 1.96.',
          'CI cho CEO biết kết quả dao động trong khoảng nào — không phải chỉ "87%".',
          'CI hẹp không có nghĩa là kết quả đúng. Nó chỉ có nghĩa là kết quả ổn định.',
        ]} />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4 — Margin of Error
      ══════════════════════════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionTitle id="margin-of-error">4. Margin of Error</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Khi trình bày với CEO, bạn không cần nói "CI từ 85.5% đến 88.5%."
          Có cách nói ngắn hơn, tự nhiên hơn trong ngôn ngữ business:
          <strong className="text-on-surface"> "87% ± 1.5%"</strong>.
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Con số ±1.5% đó là <strong className="text-on-surface">Margin of Error (MoE)</strong> — bằng
          đúng z × SE, chính là nửa độ rộng của CI. Hai cách nói là tương đương:
        </p>

        <div className="border border-outline-variant/30 bg-surface-container rounded-xl p-5 my-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="font-ui-label text-[0.625rem] text-on-surface-variant/50 uppercase tracking-wider mb-2">Cách 1 — CI đầy đủ</p>
              <p className="font-body-lg text-body-lg text-on-surface">"87% (95% CI: [85.5%, 88.5%])"</p>
            </div>
            <div className="border-t sm:border-t-0 sm:border-l border-outline-variant/20 pt-4 sm:pt-0 sm:pl-4">
              <p className="font-ui-label text-[0.625rem] text-on-surface-variant/50 uppercase tracking-wider mb-2">Cách 2 — MoE ngắn gọn</p>
              <p className="font-body-lg text-body-lg text-on-surface">"87% ± 1.5%"</p>
            </div>
          </div>
          <p className="font-body-md text-[0.75rem] text-on-surface-variant/60 mt-4 pt-3 border-t border-outline-variant/20">
            Cả hai đều nói cùng một điều. Cách 2 ngắn hơn cho slide. Cách 1 rõ hơn cho appendix.
          </p>
        </div>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Điều CEO thực sự cần biết từ "87% ± 1.5%":
        </p>

        <div className="space-y-3 my-6">
          {[
            {
              label: 'Kịch bản tốt nhất',
              value: '88.5%',
              implication: 'Gần 9/10 khách hàng hài lòng. Logistics đang vận hành rất tốt.',
            },
            {
              label: 'Kết quả trung tâm',
              value: '87%',
              implication: 'Kết quả từ sample này. Điểm ước lượng tốt nhất hiện có.',
            },
            {
              label: 'Kịch bản xấu nhất',
              value: '85.5%',
              implication: 'Vẫn cao. Nếu quyết định cần trên 80% satisfied → bài toán đã có câu trả lời.',
            },
          ].map((s, i) => (
            <div key={i} className="flex gap-4 border border-outline-variant/30 rounded-xl p-4">
              <div className="text-center shrink-0 min-w-[72px]">
                <p className="font-code text-[1rem] text-secondary font-semibold">{s.value}</p>
                <p className="font-ui-label text-[0.625rem] text-on-surface-variant/50">{s.label}</p>
              </div>
              <p className="font-body-md text-[0.8rem] text-on-surface-variant">{s.implication}</p>
            </div>
          ))}
        </div>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Lỗi mình hay thấy Junior mắc: trình bày MoE như một disclaimer kỹ thuật thay vì
          dùng nó để tăng độ tin cậy của kết luận. Khi CEO hỏi "có chắc không?", câu trả lời
          đúng là: <em>"Ngay cả kịch bản xấu nhất cũng là 85.5%. Quyết định của mình dựa trên
          kịch bản xấu nhất đó."</em>
        </p>

        <WarningBlock title="⚠ MoE phụ thuộc vào n — không phải tỷ lệ % của population">
          <p>
            Survey 2,000 người từ population 1.2M và survey 2,000 người từ population 10M
            cho cùng MoE. MoE được quyết định bởi <strong>cỡ mẫu tuyệt đối</strong>, không phải
            tỷ lệ % bạn đã survey.
          </p>
          <p>
            Hệ quả: "survey 10% population" không có nghĩa gì về độ chính xác. 10% của 10 người
            là 1 người — chẳng đủ. 2,000 người từ 1.2M population (~0.17%) vẫn cho MoE ±1.5%.
          </p>
        </WarningBlock>

        <QuickSummary items={[
          'Margin of Error = z × SE. Với 95% CI: MoE ≈ 2 × SE. Nửa độ rộng của CI.',
          '"87% ± 1.5%" và "CI [85.5%, 88.5%]" nói cùng một điều. Dùng cái ngắn gọn hơn cho phù hợp với audience.',
          'Dùng kịch bản xấu nhất (p̂ − MoE) để anchor quyết định — nếu kịch bản đó vẫn đạt threshold, kết luận vững chắc.',
        ]} />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5 — Confidence Level
      ══════════════════════════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionTitle id="confidence-level">5. 95% có nghĩa là gì?</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Đây là phần dễ bị hiểu sai nhất trong toàn bộ module — và sai ở đây thì
          trình bày nhầm cho CEO cũng là chuyện hoàn toàn có thể xảy ra.
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Câu hỏi: "95% CI [85.5%, 88.5%]" — 95% có nghĩa là gì?
        </p>

        <WarningBlock title="⚠ Cái này SAI — nhưng cực kỳ phổ biến">
          <p>
            <strong>"Có 95% xác suất rằng tỷ lệ thực sự của population nằm trong [85.5%, 88.5%]."</strong>
          </p>
          <p>
            Cách diễn giải này sai vì nó gán xác suất cho một con số đã cố định.
            Tỷ lệ thực của population là một giá trị xác định (giả sử là 87.2%) — nó
            không "có 95% khả năng nằm đâu đó." Nó hoặc nằm trong interval, hoặc không.
          </p>
        </WarningBlock>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          <strong className="text-on-surface">Cái này ĐÚNG:</strong>{' '}
          95% đề cập đến <em>phương pháp xây dựng interval</em>, không phải interval cụ thể này.
        </p>

        <div className="border border-secondary/25 bg-secondary/5 rounded-xl p-5 my-6">
          <p className="font-ui-label text-[0.625rem] text-secondary uppercase tracking-widest mb-3">
            Cách diễn giải đúng
          </p>
          <p className="font-body-lg text-body-lg text-on-surface mb-3">
            "Nếu Marketing chạy 100 survey kiểu này — mỗi lần 2,000 người, cùng phương pháp —
            và tính CI cho mỗi survey, thì khoảng <strong>95 trong 100 interval đó</strong> sẽ chứa
            tỷ lệ thực của population."
          </p>
          <p className="font-body-md text-[0.8rem] text-on-surface-variant">
            Interval lần này — [85.5%, 88.5%] — có thể là một trong 95 interval đúng,
            hoặc một trong 5 interval không chứa giá trị thực. Chúng ta không biết cái nào.
            Nhưng phương pháp này đúng 95% thời gian.
          </p>
        </div>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Với non-technical audience (CEO, CFO, PM), cách nói thực tế nhất:
        </p>

        <div className="border border-outline-variant/30 rounded-xl p-5 my-6 space-y-3">
          <p className="font-ui-label text-[0.625rem] text-on-surface-variant/50 uppercase tracking-wider mb-2">
            Cách nói với CEO
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            <em>"Con số 87% này có thể dao động. Dựa trên phương pháp thống kê chuẩn, chúng ta
            có thể nói rằng kết quả thực nhiều khả năng nằm trong [85.5%, 88.5%].
            Phương pháp tính này đáng tin trong 95% trường hợp nếu lặp lại."</em>
          </p>
          <p className="font-body-md text-[0.75rem] text-on-surface-variant/60 pt-2 border-t border-outline-variant/20">
            → Tránh dùng "95% chắc chắn" hay "95% xác suất" — đó là cách diễn giải sai và
            có thể khiến CEO overconfident vào một interval cụ thể.
          </p>
        </div>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Con số 95% là lựa chọn của bạn — có thể dùng 90% hoặc 99%:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
          {[
            { level: '90%', z: '1.645', moe: '±1.24%', ci: '[85.8%, 88.2%]', note: 'Hẹp hơn — kém tin cậy hơn. Dùng khi có thể chấp nhận rủi ro cao hơn.' },
            { level: '95%', z: '1.960', moe: '±1.47%', ci: '[85.5%, 88.5%]', note: 'Chuẩn mực cho hầu hết báo cáo business. Cân bằng giữa precision và confidence.' },
            { level: '99%', z: '2.576', moe: '±1.93%', ci: '[85.1%, 88.9%]', note: 'Rộng hơn — tin cậy hơn. Dùng khi quyết định có rủi ro rất cao.' },
          ].map((r) => (
            <div key={r.level} className={`border rounded-xl p-4 ${r.level === '95%' ? 'border-secondary/40 bg-secondary/5' : 'border-outline-variant/30'}`}>
              <p className={`font-ui-label text-ui-label mb-1 ${r.level === '95%' ? 'text-secondary' : 'text-on-surface'}`}>
                {r.level} Confidence {r.level === '95%' ? '— chuẩn' : ''}
              </p>
              <p className="font-code text-[0.75rem] text-on-surface-variant">z = {r.z}</p>
              <p className="font-code text-[0.75rem] text-on-surface-variant">MoE {r.moe}</p>
              <p className="font-code text-[0.75rem] text-on-surface">{r.ci}</p>
              <p className="font-body-md text-[0.75rem] text-on-surface-variant mt-2 leading-snug">{r.note}</p>
            </div>
          ))}
        </div>

        <Note>
          Confidence level cao hơn → interval rộng hơn, không hẹp hơn. Nhiều người nhầm tưởng
          "99% confidence" nghĩa là "chính xác hơn" — thực ra ngược lại: bạn đổi precision
          lấy confidence. Cả hai không thể cùng tăng nếu không tăng n.
        </Note>

        <QuickSummary items={[
          '"95% confidence" không phải "95% xác suất interval này chứa giá trị thực". Nó nói về phương pháp: 95% các interval được tính theo cách này sẽ chứa giá trị thực.',
          'Với non-technical audience: "phương pháp tính này đáng tin trong 95% trường hợp nếu lặp lại".',
          'Confidence level cao hơn → interval rộng hơn. Không thể vừa confidence cao vừa interval hẹp nếu không tăng n.',
        ]} />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 6 — Khi nào lấy thêm sample?
      ══════════════════════════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionTitle id="them-sample">6. Khi nào lấy thêm sample?</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Thứ Hai tuần tiếp theo. CEO đọc qua kết quả và hỏi thẳng:
        </p>

        <SlackThread
          channel="direct-message"
          messages={[
            { from: 'CEO Nam', text: '"87% ± 1.5% — interval này có đủ hẹp để ra quyết định logistics không? Hay cần thêm data?"', time: '09:22' },
          ]}
        />

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Câu hỏi đúng. Câu trả lời phụ thuộc vào <em>ngưỡng quyết định</em> — không phải vào
          quy tắc thống kê nào cứng nhắc.
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Nếu CEO cần biết tỷ lệ hài lòng có trên 80% không → CI [85.5%, 88.5%] nằm hoàn toàn
          trên 80%. Kể cả kịch bản xấu nhất (85.5%) vẫn cách ngưỡng quyết định một khoảng xa.
          Interval này đủ hẹp — không cần thêm data.
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Nhưng nếu CEO cần biết tỷ lệ có trên <em>86%</em> không (ngưỡng để tung campaign
          "Leader in delivery") → CI [85.5%, 88.5%] <em>span qua ngưỡng đó</em>.
          Kịch bản xấu nhất (85.5%) thấp hơn 86%. Interval này chưa đủ để kết luận.
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Bảng dưới cho thấy MoE thay đổi như thế nào khi tăng n:
        </p>

        <Code>{`import numpy as np

p_hat = 0.87
z     = 1.96  # 95% confidence

for n in [500, 1000, 2000, 5000, 10000]:
    se  = np.sqrt(p_hat * (1 - p_hat) / n)
    moe = z * se
    print(f"n={n:6,}  →  MoE ±{moe*100:.1f}%  →  CI [{(p_hat-moe)*100:.1f}%, {(p_hat+moe)*100:.1f}%]")`}
        </Code>
        <Output>{`n=   500  →  MoE ±3.0%  →  CI [84.0%, 90.0%]
n= 1,000  →  MoE ±2.1%  →  CI [84.9%, 89.1%]
n= 2,000  →  MoE ±1.5%  →  CI [85.5%, 88.5%]
n= 5,000  →  MoE ±0.9%  →  CI [86.1%, 87.9%]
n=10,000  →  MoE ±0.7%  →  CI [86.3%, 87.7%]`}
        </Output>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Quan sát quan trọng: từ n=2,000 lên n=5,000 (gấp 2.5×), MoE chỉ giảm từ 1.5%
          xuống 0.9%. Thêm gấp đôi người không cho gấp đôi precision — vì SE giảm theo căn bậc hai.
        </p>

        <TradeoffBlock
          options={[
            {
              label: 'Giữ nguyên n=2,000',
              tag: 'CI ±1.5%',
              tagVariant: 'ok',
              pros: ['Chi phí thấp', 'Đủ nếu ngưỡng quyết định xa center (>80%)', 'Kết quả có trong 2 ngày'],
              cons: ['Chưa đủ nếu cần phân biệt 86% vs 87%', 'Phân tích theo thành phố có thể quá thô'],
            },
            {
              label: 'Tăng lên n=5,000',
              tag: 'CI ±0.9%',
              tagVariant: 'neutral',
              pros: ['Phân biệt được khoảng cách nhỏ hơn', 'Phân tích theo tỉnh/thành đáng tin hơn'],
              cons: ['Chi phí SMS tăng 2.5×', 'Cần 5-6 ngày thu thập', 'Diminishing returns rõ rệt'],
            },
          ]}
          caption="Quyết định lấy thêm sample là quyết định kinh doanh — không phải quyết định thống kê"
        />

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Framework để quyết định: trước khi chạy survey, hỏi stakeholder{' '}
          <em>"Nếu kết quả là X%, bạn sẽ làm gì? Nếu là Y%, bạn sẽ làm gì khác không?"</em>
          Nếu X% và Y% dẫn đến cùng quyết định → không cần precision cao hơn. Nếu không → cần.
        </p>

        <DADecision
          use="Tính required n ngược từ MoE mong muốn: n = (z/MoE)² × p̂(1−p̂). Nếu bạn cần MoE ±1%: n = (1.96/0.01)² × 0.87×0.13 ≈ 4,300 người."
          noUse="Đừng tự động tăng n vì 'nhiều hơn thì chắc hơn'. Mỗi lần tăng gấp đôi n chỉ giảm MoE còn √2 ≈ 1.41 lần — và chi phí tăng gấp đôi."
          risk="Quyết định n mà không biết ngưỡng quyết định của CEO → có thể survey 5,000 người nhưng vẫn không trả lời được câu hỏi thực sự."
          decision="ShopNow: với ngưỡng quyết định là 80% (không phải 86%), n=2,000 và CI [85.5%, 88.5%] là đủ. Ghi rõ assumption này trong báo cáo để stakeholder confirm."
        />

        <QuickSummary items={[
          'CI đủ hẹp khi toàn bộ interval nằm về một phía ngưỡng quyết định. Nếu interval span qua ngưỡng → cần thêm data.',
          'Tăng n gấp đôi chỉ giảm MoE còn √2 lần (~1.41×) — diminishing returns rõ rệt.',
          'Hỏi stakeholder ngưỡng quyết định TRƯỚC khi thiết kế survey — không phải sau khi có kết quả.',
        ]} />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 7 — Common Mistakes
      ══════════════════════════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionTitle id="common-mistakes">7. Common Mistakes</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Những lỗi này không phải lỗi tính toán — chúng là lỗi tư duy, xảy ra trong báo cáo
          thực tế và thường không bị phát hiện cho đến khi quyết định đã được đưa ra.
        </p>

        <div className="space-y-5 my-6">
          {[
            {
              num: '01',
              title: 'Chỉ báo point estimate — không có CI',
              story: 'Slide ghi "87% khách hàng hài lòng." CEO phê duyệt ngân sách logistics Q3 dựa trên con số đó. Tuần sau Marketing chạy lại survey — kết quả 84%. CEO hỏi tại sao số thay đổi. DA team không có câu trả lời vì không ai biết MoE của survey đầu tiên là bao nhiêu.',
              lesson: 'Point estimate không có CI là thông tin chưa hoàn chỉnh. Mọi kết quả survey cần đi kèm [n] và [CI]. Không có ngoại lệ.',
            },
            {
              num: '02',
              title: '"CI hẹp = kết quả đúng"',
              story: 'Survey gửi qua App notification — chỉ App users nhận được (65% khách hàng). Response rate 40% — tưởng tốt. CI tính ra ±0.8% — tưởng rất chính xác. Nhưng 35% khách Web và Offline bị bỏ sót hoàn toàn, và họ có trải nghiệm tệ hơn đáng kể. CI hẹp nhưng center point lệch về phía overestimate.',
              lesson: 'CI đo sampling variability — không đo bias. Hãy fix bias trước khi tin vào CI. Kiểm tra: "Ai không được survey? Họ có khác người được survey không?"',
            },
            {
              num: '03',
              title: 'Giải thích 95% CI sai với CEO',
              story: '"Thưa CEO, có 95% xác suất rằng tỷ lệ hài lòng thực sự của khách hàng nằm trong [85.5%, 88.5%]." CEO gật đầu. Sau đó CFO hỏi thêm — và DA không giải thích được tại sao cách diễn giải đó không chính xác hoàn toàn.',
              lesson: 'Nói với CEO: "Phương pháp này sẽ cho interval đúng trong 95% trường hợp nếu lặp lại." Tránh nói "95% xác suất" về interval cụ thể — nó nghe tự nhiên nhưng không chính xác về mặt kỹ thuật.',
            },
            {
              num: '04',
              title: '"n lớn hơn luôn tốt hơn" — bỏ qua bias',
              story: 'Marketing quyết định tăng sample từ 2,000 lên 10,000 để "đảm bảo kết quả chính xác." Nhưng vẫn chỉ gửi qua App notification. MoE giảm xuống ±0.7% — trông rất precision. Kết quả 88.5% — nhưng thực tế overall satisfaction thấp hơn vì Web/Offline users bị bỏ qua.',
              lesson: '10,000 người từ biased sample tệ hơn 2,000 người từ unbiased sample. Số lượng không chữa được bias. Ưu tiên: fix sampling design trước, rồi mới nghĩ đến n.',
            },
            {
              num: '05',
              title: 'Không xác định ngưỡng quyết định trước khi survey',
              story: 'Survey xong, kết quả 87% ± 1.5%. CEO hỏi: "Có đủ để launch loyalty program không?" DA team không biết vì không ai xác định ngưỡng trước. CEO hỏi: "Nếu chỉ 85% thì có launch không?" DA team phải chạy lại analysis. Nếu ngưỡng là 85% thì kể cả kịch bản xấu nhất (85.5%) cũng pass — lẽ ra có thể trả lời ngay từ đầu.',
              lesson: 'Trước khi survey: hỏi stakeholder "Ngưỡng nào thì bạn sẽ quyết định A? Ngưỡng nào thì B?" Ghi vào brief. Survey design từ ngưỡng đó.',
            },
          ].map((m) => (
            <div key={m.num} className="border border-outline-variant/30 rounded-xl overflow-hidden">
              <div className="bg-surface-container px-5 py-3 border-b border-outline-variant/20 flex gap-3">
                <span className="font-ui-label text-[0.6875rem] text-secondary/60 shrink-0 mt-0.5">{m.num}/05</span>
                <p className="font-ui-label text-ui-label text-on-surface">{m.title}</p>
              </div>
              <div className="px-5 py-4 space-y-3">
                <p className="font-body-md text-[0.8rem] text-on-surface-variant leading-relaxed">{m.story}</p>
                <div className="flex gap-2 pt-1 border-t border-outline-variant/20">
                  <span className="text-secondary shrink-0 text-sm font-semibold mt-0.5">→</span>
                  <p className="font-body-md text-[0.8rem] text-on-surface">{m.lesson}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 8 — Case Study
      ══════════════════════════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionTitle id="case-study">8. Case Study: Membership Program — 20 tỷ hay không?</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Hai tuần sau Board Meeting. CEO đang cân nhắc launch{' '}
          <strong className="text-on-surface">ShopNow Premium</strong> — gói Membership 99,000đ/tháng
          với free shipping, ưu tiên giao hàng, và early access flash sale. Đầu tư ban đầu:
          20 tỷ đồng cho hạ tầng và marketing launch.
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Marketing chạy một survey nhanh với 1,000 khách VIP và Normal:
          <em> "Nếu ShopNow có gói Premium 99,000đ/tháng với các quyền lợi trên,
          bạn có đăng ký không?"</em>
        </p>

        <SlackThread
          channel="strategy"
          messages={[
            { from: 'Marketing Linh', text: '87% nói sẽ đăng ký. Con số này khá thuyết phục cho CEO rồi nhỉ?', time: '14:30' },
            { from: 'Analytics Lead Tuấn', text: 'n=1,000 thì CI bao nhiêu? Ngưỡng break-even để ROI dương là gì?', time: '14:32' },
            { from: 'Marketing Linh', text: 'Chưa tính CI. Break-even... chưa biết.', time: '14:33' },
            { from: 'Analytics Lead Tuấn', text: 'Đó là hai thứ cần có trước khi mang slide vào phòng CEO.', time: '14:34' },
          ]}
        />

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Bạn ngồi tính. Survey này n=1,000 — nhỏ hơn n=2,000 ở delivery survey.
        </p>

        <Code>{`import numpy as np
from scipy import stats

p_hat = 0.87
n     = 1000   # nhỏ hơn delivery survey

se  = np.sqrt(p_hat * (1 - p_hat) / n)
z   = stats.norm.ppf(0.975)
moe = z * se

print(f"SE:      {se:.4f}")
print(f"MoE:     ±{moe:.4f}  (±{moe*100:.1f}%)")
print(f"95% CI:  [{(p_hat-moe)*100:.1f}%, {(p_hat+moe)*100:.1f}%]")`}
        </Code>
        <Output>{`SE:      0.0106
MoE:     ±0.0208  (±2.1%)
95% CI:  [84.9%, 89.1%]`}
        </Output>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          CI rộng hơn delivery survey — ±2.1% thay vì ±1.5%. Kịch bản xấu nhất: <strong>84.9%</strong>.
          Câu hỏi tiếp theo: 84.9% subscription rate có đủ để ROI dương không?
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Bạn ước tính nhanh break-even: với 1.2M active customers, nếu chỉ 1% đăng ký
          (12,000 người × 99,000đ/tháng = 1.19 tỷ/tháng), cần 17 tháng để thu hồi 20 tỷ vốn đầu tư.
          Tại 5% subscription rate (60,000 người): thu hồi vốn trong 3.4 tháng — viable.
          Break-even thực sự ở khoảng 2-3% conversion của 1.2M, không phải 87% của 1,000 người được hỏi.
        </p>

        <Note>
          Đây là lỗi interpretation phổ biến: "87% willing" không có nghĩa là 87% của 1.2M
          sẽ thực sự đăng ký. Stated intention vs actual behavior thường lệch nhau đáng kể —
          ngành research gọi là "intention-action gap". Trong thực tế, conversion từ
          "willing to subscribe" xuống "actually subscribed" thường 20–50% của stated rate.
        </Note>

        <CIBar
          low={84.9} center={87} high={89.1}
          scaleMin={75} scaleMax={95}
          breakeven={70}
        />

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Kết luận bạn mang vào phòng CEO:
        </p>

        <div className="border border-outline-variant/30 bg-surface-container rounded-xl p-5 my-6 space-y-4">
          <p className="font-ui-label text-[0.625rem] text-on-surface-variant/50 uppercase tracking-widest">
            Template — Membership Feasibility Slide
          </p>
          <div>
            <p className="font-ui-label text-ui-label text-on-surface mb-1">Survey Intent</p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              87% willing to subscribe (95% CI: [84.9%, 89.1%], n=1,000).
              Kể cả kịch bản xấu nhất: ~85% stated interest.
            </p>
          </div>
          <div>
            <p className="font-ui-label text-ui-label text-on-surface mb-1">Conversion Caveat</p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Stated intent thường overstates actual conversion. Thực tế conversion có thể
              20–50% của stated rate → ước tính 17–44% actual subscription.
            </p>
          </div>
          <div>
            <p className="font-ui-label text-ui-label text-on-surface mb-1">Recommendation</p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Launch beta với 10,000 khách được mời, đo actual subscription rate sau 30 ngày.
              Nếu actual rate ≥ 20% (break-even tại 5% × 1.2M) → go full launch.
            </p>
          </div>
          <div className="border-t border-secondary/20 pt-3">
            <p className="font-ui-label text-ui-label text-on-surface mb-1">Limitation — bắt buộc ghi</p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Survey 1,000 người (CI ±2.1%). Stated intent ≠ actual conversion.
              Kết quả này đủ để justify beta launch, chưa đủ để commit 20 tỷ full rollout.
            </p>
          </div>
        </div>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          CEO gật đầu với beta plan. Đây là kết quả đúng — không phải vì "con số đẹp,"
          mà vì bạn trình bày đủ uncertainty để CEO ra quyết định có căn cứ, không phải
          quyết định dựa trên một điểm ước lượng 87% chưa được kiểm chứng.
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Đây là chuỗi quyết định từ đầu đến cuối module:
        </p>

        <div className="space-y-3 my-6">
          {[
            { time: 'Thứ Hai', decision: 'Nhận câu hỏi', detail: 'Leader hỏi "87% có đáng tin không?" → xác định: cần CI trước khi báo cáo.' },
            { time: 'Thứ Hai (tiếp)', decision: 'Tính SE và CI', detail: 'SE = 0.0075, CI [85.5%, 88.5%] cho delivery survey. So với ngưỡng quyết định 80% → đủ tin để kết luận.' },
            { time: 'Thứ Tư', decision: 'Membership survey', detail: 'n=1,000 → CI rộng hơn: [84.9%, 89.1%]. Nhận ra stated intent ≠ actual conversion.' },
            { time: 'Thứ Tư (tiếp)', decision: 'Định nghĩa break-even', detail: 'Break-even ~2–3% actual conversion của 1.2M khách — không phải 87% stated interest.' },
            { time: 'Thứ Năm', decision: 'Trình bày CEO', detail: 'Beta launch 10,000 người: đủ để validate actual conversion trước khi commit 20 tỷ. CEO approve.' },
          ].map((step, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-2 h-2 rounded-full bg-secondary mt-1.5" />
                {i < 4 && <div className="w-px flex-1 bg-outline-variant/30 mt-1" />}
              </div>
              <div className="pb-3">
                <p className="font-ui-label text-[0.6875rem] text-secondary mb-0.5">{step.time}</p>
                <p className="font-ui-label text-ui-label text-on-surface">{step.decision}</p>
                <p className="font-body-md text-[0.8rem] text-on-surface-variant mt-0.5 leading-snug">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Inference Checklist ── */}
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
        Mỗi lần có kết quả từ survey — đi qua 6 mục này trước khi mở PowerPoint.
      </p>
      <InferenceChecklist />

      {/* ── Sign-off ── */}
      <div className="border-t border-outline-variant/20 pt-10">
        <p className="font-body-md text-body-md text-on-surface-variant">
          Tiếp theo:{' '}
          <a href="/modules/hypothesis-testing" className="text-secondary hover:underline">
            Module 4 — Hypothesis Testing: Kết quả A/B test của bạn có thực sự có ý nghĩa —
            hay chỉ là ngẫu nhiên? →
          </a>
        </p>
      </div>

    </article>
  )
}
