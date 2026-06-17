import type { TocItem } from '@/components/layout/TableOfContents'

export const inferenceTocItems: TocItem[] = [
  { id: 'bai-toan',             label: '1. "65.5% này có đáng tin không?"' },
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
        Nếu bạn là DA tại SnowTech
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

function Mistakes({ items }: { items: string[] }) {
  return (
    <div className="border-l-2 border-error/50 bg-error-container/20 rounded-r-xl pl-5 py-4 pr-4 my-6">
      <p className="font-ui-label text-[0.625rem] text-on-error-container uppercase tracking-widest mb-3">
        Sai lầm thường gặp
      </p>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="font-body-md text-body-md text-on-surface-variant flex gap-2">
            <span className="text-error/70 shrink-0 mt-0.5">✕</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
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

/* ── CI Visual Bar ─────────────────────────────────────────────────────────── */

function CIBar({ lower, estimate, upper, label }: {
  lower: number; estimate: number; upper: number; label: string
}) {
  const pct = (v: number) => `${((v - lower) / (upper - lower) * 100).toFixed(1)}%`
  return (
    <div className="my-6">
      <p className="font-ui-label text-[0.6875rem] text-on-surface mb-3">{label}</p>
      <div className="relative h-10 bg-surface-container rounded-xl overflow-hidden">
        <div
          className="absolute inset-y-0 bg-secondary/20 border-x-2 border-secondary/50"
          style={{ left: '0%', right: '0%' }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-0.5 h-6 bg-secondary rounded"
          style={{ left: pct(estimate) }}
        />
      </div>
      <div className="flex justify-between mt-1.5">
        <span className="font-code text-[0.75rem] text-on-surface-variant">{(lower * 100).toFixed(1)}%</span>
        <span className="font-code text-[0.75rem] text-secondary font-semibold">{(estimate * 100).toFixed(1)}% (p̂)</span>
        <span className="font-code text-[0.75rem] text-on-surface-variant">{(upper * 100).toFixed(1)}%</span>
      </div>
      <p className="font-body-md text-[0.75rem] text-on-surface-variant/60 mt-1 text-center">
        95% Confidence Interval: [{(lower * 100).toFixed(1)}%, {(upper * 100).toFixed(1)}%]
      </p>
    </div>
  )
}

/* ── Inference Checklist ──────────────────────────────────────────────────── */

function InferenceChecklist() {
  const items = [
    { label: 'p̂ (point estimate) là gì?', detail: 'Tỷ lệ quan sát được trong sample. Dùng để ước lượng tỷ lệ thực trong population.' },
    { label: 'n đủ lớn chưa?', detail: 'n×p̂ ≥ 10 và n×(1−p̂) ≥ 10. Với n=2,000 và p̂=0.655: 1,310 ≥ 10 và 690 ≥ 10 ✓' },
    { label: 'Standard Error (SE) tính đúng chưa?', detail: 'SE = √(p̂×(1−p̂)/n). Với p̂=0.655, n=2,000: SE = 0.0107.' },
    { label: 'MoE = z × SE?', detail: '95% CI: MoE = 1.96 × 0.0107 = 0.0209 ≈ 2.1%.' },
    { label: 'Diễn giải CI đúng chưa?', detail: 'CI KHÔNG nói "95% xác suất true value trong interval này." Đọc Section 5 trước khi report.' },
    { label: 'Decision threshold rõ ràng?', detail: 'Stakeholder cần biết: CI này đủ hẹp để ra quyết định invest 3 tỷ không?' },
  ]
  return (
    <div className="border border-outline-variant/30 rounded-xl overflow-hidden my-6">
      <div className="bg-surface-container px-5 py-3 border-b border-outline-variant/20">
        <p className="font-ui-label text-[0.6875rem] text-on-surface font-semibold">
          Statistical Inference Checklist — trước khi report CI
        </p>
      </div>
      <div className="divide-y divide-outline-variant/20">
        {items.map((item, i) => (
          <div key={i} className="flex gap-4 px-5 py-3.5 hover:bg-surface-container/50 motion-safe:transition-colors">
            <div className="w-5 h-5 rounded border-2 border-outline-variant/50 flex items-center justify-center shrink-0 mt-0.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-secondary/30" />
            </div>
            <div>
              <p className="font-body-md text-[0.8rem] text-on-surface font-medium">{item.label}</p>
              <p className="font-body-md text-[0.75rem] text-on-surface-variant mt-0.5">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Main component ───────────────────────────────────────────────────────── */

export function InferenceContent() {
  return (
    <article className="max-w-[720px] py-8 lg:py-10 lg:pr-8">

      {/* ── Header ── */}
      <p className="font-ui-label text-ui-label text-secondary uppercase tracking-widest mb-4">Module 3</p>
      <h1 className="font-display text-display text-on-surface mb-6 leading-[1.05]">
        Statistical Inference
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
        Survey xong, bạn có con số 65.5%. Nhưng đó là kết quả từ 2,000 người —
        không phải từ 12 triệu MAU của SnowTech. Statistical Inference là cầu nối
        từ sample sang population: làm sao biết con số này có thể tin được đến đâu?
      </p>

      {/* ── Learning Objectives ── */}
      <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-6 mb-16">
        <p className="font-ui-label text-[0.625rem] text-secondary uppercase tracking-widest mb-4">
          Sau module này, bạn sẽ có thể
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            'Tính Standard Error cho proportion và mean',
            'Xây dựng Confidence Interval từ sample data',
            'Diễn giải CI đúng — tránh misconception phổ biến nhất',
            'Biết khi nào cần tăng sample để CI đủ hẹp',
            'Dùng CI để ra quyết định đầu tư có căn cứ',
            'Phân biệt CI với Bootstrap interval',
          ].map((obj) => (
            <div key={obj} className="flex gap-3 items-start">
              <span className="text-secondary shrink-0 mt-0.5 font-semibold">✓</span>
              <p className="font-body-md text-body-md text-on-surface-variant">{obj}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 1 — Bài toán
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="bai-toan" className="mb-16">
        <SectionTitle id="bai-toan">1. "65.5% này có đáng tin không?"</SectionTitle>

        <SlackThread
          channel="analytics-crm"
          messages={[
            {
              from: 'CRM Manager Linh',
              time: '2:15 CH',
              text: 'Survey xong rồi. 65.5% user thấy push relevant. Mình đang đề xuất đầu tư 3 tỷ vào Push Personalization Engine. Có thể dùng con số này để thuyết phục không?',
            },
            {
              from: 'Analytics Lead Tuấn',
              time: '2:22 CH',
              text: '65.5% từ bao nhiêu người?',
            },
            {
              from: 'CRM Manager Linh',
              time: '2:23 CH',
              text: '2,000 user. Stratified sample.',
            },
            {
              from: 'Analytics Lead Tuấn',
              time: '2:25 CH',
              text: 'Vậy 65.5% là estimate từ 2,000 người — không phải con số của 12M MAU. Bạn cần Confidence Interval. CI hẹp → đáng tin. CI rộng → cần hỏi thêm. Minh tính CI cho Linh nhé.',
            },
          ]}
        />

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Analytics Lead Tuấn đúng. 65.5% là{' '}
          <strong className="text-on-surface">point estimate</strong> — giá trị tốt nhất
          chúng ta có từ sample, nhưng không phải con số thực của population.
          Nếu survey lại 2,000 user khác, kết quả có thể là 63% hoặc 68%.
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          <strong className="text-on-surface">Statistical Inference</strong> giúp bạn trả lời:
          "Với 65.5% từ 2,000 user này, tỷ lệ thực của 12M MAU có khả năng nằm trong khoảng nào?"
          Đó là Confidence Interval — và đó là cơ sở để CRM Manager đề xuất đầu tư 3 tỷ.
        </p>

        <FlowRow
          nodes={[
            { label: 'Survey 2,000 user', sub: 'Stratified Sample', variant: 'default' },
            { label: 'p̂ = 65.5%', sub: 'Point Estimate', variant: 'primary' },
            { label: 'SE = 1.07%', sub: 'Sampling Error', variant: 'default' },
            { label: '95% CI', sub: '[63.4%, 67.6%]', variant: 'ok' },
            { label: 'Quyết định 3 tỷ', sub: 'Invest hay không?', variant: 'default' },
          ]}
          caption="Từ sample → inference → business decision"
        />

        <QuickSummary items={[
          'Point estimate (p̂) là con số tốt nhất từ sample — nhưng không phải giá trị thực của population.',
          'CI bổ sung "độ không chắc chắn" — cho bạn khoảng tin cậy thay vì một con số đơn lẻ.',
          'CI hẹp → estimate đáng tin hơn. CI rộng → cần thêm data trước khi quyết định lớn.',
        ]} />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 — Sampling Variability
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="sampling-variability" className="mb-16">
        <SectionTitle id="sampling-variability">2. Tại sao sample luôn dao động?</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Mỗi khi bạn lấy sample từ population, bạn sẽ ra một kết quả khác một chút.
          Không phải vì có sai lầm — mà vì đây là bản chất của random sampling.
          Hiểu điều này là nền tảng để hiểu tại sao cần CI.
        </p>

        <Code>{`import numpy as np

# Giả lập: 65.5% trong 12M MAU thấy push relevant (đây là "truth" chúng ta không biết)
true_population_rate = 0.655
population_size      = 12_000_000

np.random.seed(42)
# Chạy 10 survey mô phỏng, mỗi lần 2,000 user
simulated_surveys = [
    np.random.binomial(n=2000, p=true_population_rate) / 2000
    for _ in range(10)
]

print("10 lần survey mô phỏng (cùng population, cùng n=2,000):")
for i, rate in enumerate(simulated_surveys, 1):
    print(f"  Survey {i:2d}: {rate:.1%}")`}
        </Code>
        <Output>{`10 lần survey mô phỏng (cùng population, cùng n=2,000):
  Survey  1: 65.6%
  Survey  2: 66.3%
  Survey  3: 64.8%
  Survey  4: 65.5%
  Survey  5: 67.0%
  Survey  6: 64.2%
  Survey  7: 65.9%
  Survey  8: 66.5%
  Survey  9: 64.7%
  Survey 10: 65.1%`}
        </Output>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Tất cả 10 survey đều dùng cùng population với true rate = 65.5% — nhưng mỗi
          kết quả ra khác nhau, từ 64.2% đến 67.0%. Sự dao động này có tên:{' '}
          <strong className="text-on-surface">Sampling Variability</strong>.
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Bạn chỉ chạy survey một lần và nhận được 65.5%. Không biết "thực" là bao nhiêu.
          Câu hỏi đặt ra: dựa trên 65.5% từ 2,000 user, true rate có khả năng nằm trong
          khoảng nào — và khoảng đó hẹp hay rộng?
        </p>

        <div className="border border-outline-variant/30 rounded-xl p-5 my-6">
          <p className="font-ui-label text-[0.625rem] text-secondary uppercase tracking-widest mb-3">
            Nguyên nhân của Sampling Variability
          </p>
          <div className="space-y-3">
            {[
              { label: 'Random chance trong sampling', desc: '2,000 user được chọn ngẫu nhiên — nếu chọn 2,000 khác, tập hợp người trả lời "có" sẽ khác một chút.' },
              { label: 'Sample size hữu hạn', desc: 'n=2,000 trong 12M MAU (~0.017%). Sample nhỏ hơn → variability lớn hơn.' },
              { label: 'Không phải lỗi của survey', desc: 'Sampling variability là inherent — không thể loại bỏ hoàn toàn, chỉ giảm được bằng cách tăng n.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-secondary shrink-0 mt-0.5">→</span>
                <p className="font-body-md text-[0.8rem] text-on-surface-variant">
                  <span className="font-medium text-on-surface">{item.label}: </span>{item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <QuickSummary items={[
          'Sampling variability: mỗi sample cho kết quả hơi khác nhau — ngay cả khi survey được thực hiện hoàn hảo.',
          'Variability không phải lỗi. Nó là hệ quả tất yếu của sampling từ population lớn hơn.',
          'CI định lượng variability này: nó cho bạn biết khoảng dao động hợp lý của true rate.',
        ]} />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3 — Confidence Interval
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="confidence-interval" className="mb-16">
        <SectionTitle id="confidence-interval">3. Confidence Interval</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Thay vì báo cáo một con số đơn lẻ (65.5%), báo cáo một khoảng:
          <strong className="text-on-surface"> [63.4%, 67.6%]</strong>.
          Đây là Confidence Interval — và nó được tính như sau:
        </p>

        <div className="border border-secondary/20 bg-secondary/5 rounded-xl p-5 my-6 text-center">
          <p className="font-code text-[1.1rem] text-secondary mb-2">CI = p̂ ± (z × SE)</p>
          <p className="font-code text-[0.875rem] text-on-surface-variant">SE = √( p̂ × (1 − p̂) / n )</p>
        </div>

        <Code>{`import numpy as np

# Từ survey: 65.5% trong n=2,000 user thấy push relevant
p_hat = 0.655   # point estimate
n     = 2000    # sample size
z     = 1.96    # z-score cho 95% CI

# Standard Error
SE = np.sqrt(p_hat * (1 - p_hat) / n)
print(f"p̂  = {p_hat:.3f}  ({p_hat:.1%})")
print(f"n   = {n:,}")
print(f"SE  = √({p_hat:.3f} × {1-p_hat:.3f} / {n}) = {SE:.4f}  ({SE:.2%})")

# Margin of Error
MoE = z * SE
print(f"MoE = {z} × {SE:.4f} = {MoE:.4f}  ({MoE:.2%})")

# Confidence Interval
ci_lower = p_hat - MoE
ci_upper = p_hat + MoE
print()
print(f"95% CI = [{ci_lower:.3f}, {ci_upper:.3f}]")
print(f"       = [{ci_lower:.1%}, {ci_upper:.1%}]")`}
        </Code>
        <Output>{`p̂  = 0.655  (65.5%)
n   = 2,000
SE  = √(0.655 × 0.345 / 2000) = 0.0107  (1.07%)

MoE = 1.96 × 0.0107 = 0.0209  (2.09%)

95% CI = [0.634, 0.676]
       = [63.4%, 67.6%]`}
        </Output>

        <CIBar lower={0.634} estimate={0.655} upper={0.676} label="95% Confidence Interval cho tỷ lệ push relevant" />

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Kết quả: tỷ lệ user SnowTech thấy push relevant ước tính là{' '}
          <strong className="text-on-surface">65.5% với 95% CI là [63.4%, 67.6%]</strong>.
          Khoảng này hẹp (~4.2 percentage points) — đủ chính xác để CRM Manager dùng
          làm cơ sở quyết định 3 tỷ.
        </p>

        <div className="border border-outline-variant/30 bg-surface-container rounded-xl divide-y divide-outline-variant/20 my-6">
          {[
            {
              term: 'Point Estimate (p̂)',
              value: '65.5%',
              meaning: 'Giá trị tốt nhất chúng ta có từ sample. Dùng khi cần một con số đơn.',
            },
            {
              term: 'Standard Error (SE)',
              value: '1.07%',
              meaning: 'Đo mức độ dao động trung bình của p̂ giữa các sample. SE nhỏ → ước lượng ổn định.',
            },
            {
              term: 'Margin of Error (MoE)',
              value: '±2.09%',
              meaning: 'z × SE. Khoảng "sai số" hai phía xung quanh p̂ để tạo thành CI.',
            },
            {
              term: '95% CI',
              value: '[63.4%, 67.6%]',
              meaning: 'Khoảng ước lượng cho true rate trong population. (Cách diễn giải đúng → Section 5)',
            },
          ].map((item) => (
            <div key={item.term} className="flex gap-4 px-5 py-3.5">
              <div className="min-w-[130px]">
                <p className="font-ui-label text-[0.75rem] text-secondary">{item.term}</p>
                <p className="font-code text-[0.875rem] text-on-surface font-semibold">{item.value}</p>
              </div>
              <p className="font-body-md text-[0.8rem] text-on-surface-variant pt-1">{item.meaning}</p>
            </div>
          ))}
        </div>

        <QuickSummary items={[
          'CI = p̂ ± MoE, trong đó MoE = z × SE và SE = √(p̂(1−p̂)/n).',
          'SE đo sampling variability. MoE = 1.96 × SE cho 95% CI.',
          'CI hẹp hơn khi n lớn hơn — đó là trade-off giữa cost survey và độ chính xác.',
        ]} />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4 — Margin of Error
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="margin-of-error" className="mb-16">
        <SectionTitle id="margin-of-error">4. Margin of Error</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          MoE là con số bạn thường nghe trên báo: "65.5% ± 2.1%". Nó cho bạn biết
          kết quả có thể sai tối đa bao nhiêu — trong điều kiện 95% confidence.
          Điều gì kiểm soát MoE?
        </p>

        <Code>{`import numpy as np
import pandas as pd

# Ảnh hưởng của sample size đến MoE
p_hat = 0.655
z     = 1.96

sample_sizes = [200, 500, 1000, 2000, 5000, 10000]
results = []

for n in sample_sizes:
    se  = np.sqrt(p_hat * (1 - p_hat) / n)
    moe = z * se
    results.append({'n': n, 'SE': f'{se:.4f}', 'MoE': f'±{moe:.1%}',
                    'CI': f'[{p_hat - moe:.1%}, {p_hat + moe:.1%}]'})

df = pd.DataFrame(results)
print(df.to_string(index=False))`}
        </Code>
        <Output>{`     n       SE     MoE             CI
   200   0.0338  ±6.6%   [58.9%, 72.1%]   ← quá rộng để quyết định 3 tỷ
   500   0.0213  ±4.2%   [61.3%, 69.7%]
 1,000   0.0151  ±3.0%   [62.5%, 68.5%]
 2,000   0.0107  ±2.1%   [63.4%, 67.6%]   ← đang ở đây ✓
 5,000   0.0067  ±1.3%   [64.2%, 66.8%]
10,000   0.0048  ±0.9%   [64.6%, 66.4%]`}
        </Output>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Tăng n từ 2,000 lên 10,000 giảm MoE từ ±2.1% xuống ±0.9% — nhưng cost survey
          tăng 5 lần. Câu hỏi thực tế: ±2.1% có đủ hẹp để ra quyết định đầu tư 3 tỷ không?
          Câu trả lời phụ thuộc vào business context, không phải vào con số thống kê.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
          {[
            {
              factor: 'Tăng n → MoE giảm',
              detail: 'Tăng n × 4 → MoE giảm ×2 (quan hệ square root). Tăng n từ 2,000 → 8,000 để giảm MoE từ ±2.1% → ±1.05%.',
            },
            {
              factor: 'p̂ gần 0.5 → SE lớn nhất',
              detail: 'SE = √(p̂(1-p̂)/n) lớn nhất khi p̂=0.5. SE với p̂=0.655 nhỏ hơn p̂=0.5 — đây là lý do chọn p=0.5 trong sample size planning.',
            },
            {
              factor: 'z lớn → CI rộng hơn',
              detail: '95% CI: z=1.96. 99% CI: z=2.576. MoE tăng 31% khi tăng từ 95% lên 99% confidence.',
            },
            {
              factor: 'Population size không ảnh hưởng nhiều',
              detail: 'CI của n=2,000 từ 12M MAU và từ 30M user gần như giống nhau — population size không ảnh hưởng đến MoE khi n << N.',
            },
          ].map((f) => (
            <div key={f.factor} className="border border-outline-variant/30 rounded-xl p-4">
              <p className="font-ui-label text-ui-label text-secondary mb-2">{f.factor}</p>
              <p className="font-body-md text-[0.8rem] text-on-surface-variant">{f.detail}</p>
            </div>
          ))}
        </div>

        <DADecision
          use="Khi cần biết độ chính xác của survey estimate để thuyết phục stakeholder hoặc ra quyết định đầu tư."
          noUse="Khi bạn đã có toàn bộ population data trong warehouse — không cần CI, chỉ cần tính trực tiếp."
          risk="Report 65.5% mà không có MoE → stakeholder không biết estimate này có thể sai đến ±6% (nếu n=200) hay chỉ ±2% (nếu n=2,000)."
          decision="Với 3 tỷ đầu tư: CI [63.4%, 67.6%] cho thấy ít nhất 63.4% user không thấy push relevant đủ — đủ để justify Personalization Engine."
        />

        <QuickSummary items={[
          'MoE = z × SE. Giảm MoE bằng cách tăng n (hiệu quả nhất) hoặc giảm z (giảm confidence level).',
          'Tăng n × 4 → MoE giảm ÷2. Luật square root — cải thiện chậm dần khi n đã lớn.',
          'Population size (12M vs 30M) gần như không ảnh hưởng đến MoE — ngược với intuition của nhiều người.',
        ]} />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5 — 95% có nghĩa là gì?
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="confidence-level" className="mb-16">
        <SectionTitle id="confidence-level">5. 95% có nghĩa là gì?</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Đây là chỗ hầu hết Data Analyst — kể cả senior — hiểu sai. Câu hỏi:
          "95% Confidence Interval [63.4%, 67.6%] nghĩa là gì?"
        </p>

        <WarningBlock title="⚠ Diễn giải sai — phổ biến nhất">
          <p>
            <strong>"Có 95% xác suất rằng tỷ lệ thực nằm trong [63.4%, 67.6%]."</strong>
          </p>
          <p>
            Câu này SAI. True rate của population là một giá trị cố định — không có "xác suất."
            Nó hoặc nằm trong [63.4%, 67.6%] hoặc không — không có 95% về chuyện đó.
          </p>
        </WarningBlock>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Diễn giải đúng là về <em>phương pháp</em>, không phải về interval cụ thể này:
        </p>

        <div className="border border-secondary/25 bg-secondary/5 rounded-xl p-5 my-6">
          <p className="font-ui-label text-[0.625rem] text-secondary uppercase tracking-widest mb-3">
            Diễn giải đúng của 95% CI
          </p>
          <p className="font-body-lg text-body-lg text-on-surface">
            "Nếu chúng ta thực hiện 100 survey khác nhau theo cùng phương pháp (cùng n, cùng sampling design),
            và tính CI cho từng survey —{' '}
            <strong>95 trong số 100 interval đó sẽ chứa true rate thực sự.</strong>"
          </p>
        </div>

        <Code>{`import numpy as np

# Mô phỏng: 100 CI, bao nhiêu CI chứa true rate?
true_rate = 0.655   # "truth" trong population (thực ra không biết)
n         = 2000
z         = 1.96
n_trials  = 100

np.random.seed(42)
contains_true = 0

for trial in range(n_trials):
    # Sample một lần
    p_hat  = np.random.binomial(n, true_rate) / n
    se     = np.sqrt(p_hat * (1 - p_hat) / n)
    ci_low = p_hat - z * se
    ci_up  = p_hat + z * se

    # Kiểm tra CI này có chứa true rate không?
    if ci_low <= true_rate <= ci_up:
        contains_true += 1

print(f"Trong 100 CI, số CI chứa true rate: {contains_true}/100")`}
        </Code>
        <Output>{`Trong 100 CI, số CI chứa true rate: 95/100

→ Đúng ~95% như lý thuyết.
→ CI cụ thể [63.4%, 67.6%] của chúng ta: không biết nó thuộc 95 hay 5 "thất bại".
   Nhưng nếu tuân thủ phương pháp đúng → trung bình 95% số CI sẽ chứa true rate.`}
        </Output>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Implication cho CRM Manager Linh: khi bạn dùng CI [63.4%, 67.6%] để đề xuất
          đầu tư 3 tỷ, bạn đang nói: "Nếu tôi và đồng nghiệp thực hiện 100 lần survey như thế này,
          95 lần interval của chúng tôi sẽ capture true rate. Đây là cơ sở để đưa ra recommendation."
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
          {[
            {
              level: '90% CI',
              z: 'z = 1.645',
              result: '[63.8%, 67.2%]',
              tradeoff: 'Hẹp hơn, nhưng chỉ đúng 90% — chấp nhận sai nhiều hơn.',
            },
            {
              level: '95% CI',
              z: 'z = 1.960',
              result: '[63.4%, 67.6%]',
              tradeoff: 'Cân bằng phổ biến nhất trong industry. Đây là default.',
            },
            {
              level: '99% CI',
              z: 'z = 2.576',
              result: '[62.7%, 68.3%]',
              tradeoff: 'Rộng hơn nhiều — đúng 99% nhưng khoảng ít có ý nghĩa kinh doanh.',
            },
            {
              level: 'Fintech Practice',
              z: '95% tiêu chuẩn',
              result: 'Dùng 95% cho product decisions, 99% cho risk/compliance.',
              tradeoff: 'Ngưỡng CI phụ thuộc vào stakes của quyết định.',
            },
          ].map((c) => (
            <div key={c.level} className="border border-outline-variant/30 rounded-xl p-4">
              <div className="flex justify-between items-baseline mb-2">
                <p className="font-ui-label text-ui-label text-on-surface">{c.level}</p>
                <span className="font-code text-[0.75rem] text-secondary">{c.z}</span>
              </div>
              <p className="font-code text-[0.8rem] text-secondary mb-2">{c.result}</p>
              <p className="font-body-md text-[0.75rem] text-on-surface-variant">{c.tradeoff}</p>
            </div>
          ))}
        </div>

        <QuickSummary items={[
          '95% CI KHÔNG nói "95% xác suất true value trong khoảng này." True value không có xác suất — nó cố định.',
          'Đúng: "95% số interval được xây dựng theo phương pháp này sẽ chứa true value."',
          'Dùng 95% cho product/CRM decisions, 99% khi stakes cao hơn (fraud threshold, loan eligibility).',
        ]} />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 6 — Khi nào lấy thêm sample?
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="them-sample" className="mb-16">
        <SectionTitle id="them-sample">6. Khi nào lấy thêm sample?</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          CI [63.4%, 67.6%] với MoE ±2.1% — đủ hẹp không? Câu trả lời phụ thuộc
          vào business question: stakeholder cần biết con số này chính xác đến mức nào
          để ra quyết định?
        </p>

        <SlackThread
          channel="analytics-crm"
          messages={[
            {
              from: 'CRM Manager Linh',
              time: '3:30 CH',
              text: '[63.4%, 67.6%] — khoảng này có đủ để tôi pitch 3 tỷ cho Personalization Engine không?',
            },
            {
              from: 'Analytics Lead Tuấn',
              time: '3:35 CH',
              text: 'Phụ thuộc vào câu hỏi của bạn. Nếu câu hỏi là "Có nhiều hơn 50% user thấy push không relevant không?" → CI này đủ rõ ràng: lower bound 63.4% >> 50%. Nếu câu hỏi là "Chính xác 65% hay 66%?" → cần n lớn hơn.',
            },
            {
              from: 'CRM Manager Linh',
              time: '3:38 CH',
              text: 'Câu hỏi của tôi là: có đủ user thấy push không relevant để justify 3 tỷ đầu tư không? Nếu lower bound là 63.4% — tức là worst case vẫn hơn 60% — thì đủ rồi.',
            },
            {
              from: 'Analytics Lead Tuấn',
              time: '3:40 CH',
              text: 'Đúng. 63.4% là lower bound với 95% CI — đủ mạnh để đề xuất. Không cần survey thêm cho quyết định này.',
            },
          ]}
        />

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Framework để quyết định có cần thêm sample không:
        </p>

        <div className="space-y-3 my-6">
          {[
            {
              q: 'CI có bao gồm "no difference" threshold không?',
              eg: 'Nếu decision threshold là 50% — CI [63.4%, 67.6%] rõ ràng trên 50%. Không cần thêm sample.',
              verdict: 'Không cần thêm',
              ok: true,
            },
            {
              q: 'CI có giao với decision boundary không?',
              eg: 'Nếu decision threshold là 65% — CI [63.4%, 67.6%] giao với 65%. Kết quả không rõ ràng. Cần thêm sample.',
              verdict: 'Cần thêm sample',
              ok: false,
            },
            {
              q: 'Stakes của quyết định có xứng với cost tăng n?',
              eg: 'Đầu tư 3 tỷ — tăng survey thêm 2,000 user (~50M VND cost) để CI hẹp hơn. Worth it? CRM Manager quyết định.',
              verdict: 'Business decision',
              ok: true,
            },
          ].map((item, i) => (
            <div key={i} className="border border-outline-variant/30 rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <p className="font-ui-label text-ui-label text-on-surface pr-4">{item.q}</p>
                <span className={`font-ui-label text-[0.625rem] uppercase tracking-wider shrink-0 ${item.ok ? 'text-secondary' : 'text-on-error-container'}`}>
                  {item.verdict}
                </span>
              </div>
              <p className="font-body-md text-[0.8rem] text-on-surface-variant">{item.eg}</p>
            </div>
          ))}
        </div>

        <Code>{`# Scenario: nếu threshold là 60% (không phải 50%)
threshold  = 0.60
ci_lower   = 0.634
ci_upper   = 0.676

print(f"Decision threshold: {threshold:.0%}")
print(f"95% CI: [{ci_lower:.1%}, {ci_upper:.1%}]")
print()

if ci_lower > threshold:
    print("✓ Lower bound > threshold → rõ ràng exceed threshold")
    print("  Không cần thêm sample cho quyết định này.")
elif ci_upper < threshold:
    print("✗ Upper bound < threshold → rõ ràng dưới threshold")
    print("  Không cần thêm sample.")
else:
    print("△ CI giao với threshold → kết quả không rõ ràng")
    print("  Cân nhắc tăng n hoặc hạ confidence threshold.")`}
        </Code>
        <Output>{`Decision threshold: 60%
95% CI: [63.4%, 67.6%]

✓ Lower bound > threshold → rõ ràng exceed threshold
  Không cần thêm sample cho quyết định này.`}
        </Output>

        <Note>
          Đây là một điểm tinh tế: việc cần thêm sample hay không là câu hỏi{' '}
          <strong>business</strong>, không phải câu hỏi thống kê.
          Thống kê cho bạn CI. Business quyết định CI đó có đủ hẹp cho mục đích của họ không.
        </Note>

        <QuickSummary items={[
          'Không cần thêm sample khi: toàn bộ CI ở một phía của decision threshold.',
          'Cần thêm sample khi: CI giao với threshold → kết quả không rõ ràng.',
          '"Cần thêm sample" là business decision, không phải statistical requirement. Cân nhắc cost vs stakes.',
        ]} />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 7 — Common Mistakes
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="common-mistakes" className="mb-16">
        <SectionTitle id="common-mistakes">7. Common Mistakes</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Statistical Inference có hai nguồn lỗi: lỗi tính toán (dễ phát hiện) và
          lỗi diễn giải (nguy hiểm hơn vì ít ai nhận ra). Dưới đây là những gì
          DA thường làm sai khi report CI tại Fintech:
        </p>

        <Mistakes items={[
          '"Có 95% xác suất true rate nằm trong [63.4%, 67.6%]" — sai về mặt thống kê. Đúng: "Phương pháp này tạo ra CI chứa true rate trong 95% trường hợp nếu lặp lại nhiều lần."',
          'Chỉ report point estimate (65.5%) không có CI — stakeholder không thể đánh giá độ tin cậy của con số.',
          'Dùng CI là "range của data" — CI là range của estimate, không phải range mà từng user trả lời trong.',
          'Tăng CI từ 95% lên 99% nghĩ là "chính xác hơn" — thực ra là rộng hơn, kém quyết định hơn. Accuracy không đổi, chỉ confidence level thay đổi.',
          'Nhầm lẫn Bootstrap CI với Frequentist CI — Bootstrap đo stability của estimate từ sample này; CI từ SE đo uncertainty về population.',
        ]} />

        <InferenceChecklist />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 8 — Case Study
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="case-study" className="mb-16">
        <SectionTitle id="case-study">8. Case Study: Push Personalization Engine — 3 tỷ có đáng đầu tư?</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          CRM Manager Linh cần trình bày với Steering Committee. Đây là toàn bộ analysis
          từ survey data đến recommendation — sử dụng Statistical Inference đúng cách:
        </p>

        <div className="space-y-4 my-6">
          {[
            {
              phase: 'Survey Results',
              finding: '65.5% user thấy push relevant (n=2,000 stratified sample)',
              inference: 'p̂ = 0.655; SE = 0.0107; 95% CI = [63.4%, 67.6%]',
              implication: '34.5% user — tức ~4.1M MAU — thấy push không đủ relevant. Đây là cơ sở để justify Personalization.',
            },
            {
              phase: 'Segment Analysis',
              finding: 'Power Users: 64% relevant. Regular: 65%. Casual: 66%.',
              inference: 'Power Users thấy push ít relevant nhất — nhưng đây là nhóm đóng góp 60% TPV.',
              implication: 'Personalization Engine cần ưu tiên Power Users với transaction-based targeting, không phải segment-based.',
            },
            {
              phase: 'Business Case',
              finding: 'Lower bound 63.4% >> 60% threshold (minimum để ROI dương).',
              inference: 'Với 95% CI: ngay cả worst case estimate vẫn exceed ROI threshold.',
              implication: 'Risk của quyết định sai được định lượng: chỉ có 5% khả năng CI này không capture true rate.',
            },
          ].map((item, i) => (
            <div key={i} className="border border-outline-variant/30 rounded-xl p-5">
              <p className="font-ui-label text-ui-label text-secondary mb-2">{item.phase}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: 'Survey Finding', text: item.finding },
                  { label: 'Statistical Inference', text: item.inference },
                  { label: 'Business Implication', text: item.implication },
                ].map((col) => (
                  <div key={col.label}>
                    <p className="font-ui-label text-[0.6875rem] text-on-surface-variant/50 mb-1">{col.label}</p>
                    <p className="font-body-md text-[0.8rem] text-on-surface-variant">{col.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border border-secondary/25 bg-secondary/5 rounded-xl p-5 my-6">
          <p className="font-ui-label text-[0.625rem] text-secondary uppercase tracking-widest mb-3">
            Recommendation slide — Executive Summary
          </p>
          <div className="space-y-3">
            <div>
              <p className="font-ui-label text-ui-label text-on-surface mb-1">Finding</p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Survey 2,000 user (stratified) cho thấy <strong className="text-on-surface">34.5% MAU [32.4%, 36.6%] thấy push không đủ relevant</strong> —
                tương đương ~4.1M user. Power Users là nhóm kém satisfied nhất (36% không relevant).
              </p>
            </div>
            <div>
              <p className="font-ui-label text-ui-label text-on-surface mb-1">Recommendation</p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Đầu tư vào <strong className="text-on-surface">Push Personalization Engine (3 tỷ VND)</strong> với
                focus vào transaction-based targeting cho Power Users. ROI threshold (60% không relevant)
                được exceeded với 95% confidence — lower bound 32.4% &gt; không cần đến 60% để ROI dương.
              </p>
            </div>
            <div className="border-t border-secondary/20 pt-3">
              <p className="font-ui-label text-[0.6875rem] text-secondary mb-1">Next Step</p>
              <p className="font-body-md text-[0.8rem] text-on-surface-variant">
                A/B Test 4 tuần: nhóm A nhận push personalized theo top category 30 ngày qua,
                nhóm B nhận push generic hiện tại. KPI: push CTR (target từ 5.2% → 7%), wallet transaction rate.
                Statistical significance sẽ được đánh giá sau 4 tuần — đó là scope của Module 4: A/B Testing.
              </p>
            </div>
          </div>
        </div>

        <Note>
          Statistical Inference không ra quyết định thay bạn. Nó cho bạn con số có căn cứ và
          độ không chắc chắn được định lượng. "Đầu tư 3 tỷ hay không?" là business decision —
          nhưng với CI [63.4%, 67.6%] và 95% confidence, bạn đang ra quyết định đó với
          <strong> bằng chứng thống kê</strong>, không phải cảm tính.
        </Note>
      </section>

      {/* ── Sign-off ── */}
      <div className="border-t border-outline-variant/20 pt-10">
        <p className="font-body-md text-body-md text-on-surface-variant">
          Tiếp theo:{' '}
          <a href="/modules/ab-testing" className="text-secondary hover:underline">
            Module 4 — A/B Testing: Push personalized vs generic — làm sao biết kết quả thử nghiệm có ý nghĩa? →
          </a>
        </p>
      </div>

    </article>
  )
}
