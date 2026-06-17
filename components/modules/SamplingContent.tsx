import type { TocItem } from '@/components/layout/TableOfContents'

export const samplingTocItems: TocItem[] = [
  { id: 'tai-sao-sampling',      label: '1. Tại sao Sampling tồn tại?' },
  { id: 'population-vs-sample',  label: '2. Population vs Sample' },
  { id: 'mau-tot-la-gi',         label: '3. Một mẫu tốt là gì?' },
  { id: 'sampling-bias',         label: '4. Sampling Bias' },
  { id: 'random-sampling',       label: '5. Random Sampling' },
  { id: 'stratified-sampling',   label: '6. Stratified Sampling' },
  { id: 'bootstrap',             label: '7. Bootstrap' },
  { id: 'common-mistakes',       label: '8. Common Mistakes' },
  { id: 'case-study',            label: '9. Case Study' },
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

/* ── Trade-off Block ──────────────────────────────────────────────────────── */

type TradeoffOpt = { label: string; tag?: string; tagVariant?: 'ok' | 'warn' | 'neutral'; pros: string[]; cons: string[] }

function TradeoffBlock({ options, caption }: { options: TradeoffOpt[]; caption?: string }) {
  const gridCls = options.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-3'
  const tagCls: Record<string, string> = { ok: 'text-secondary', warn: 'text-on-error-container', neutral: 'text-on-surface-variant/50' }
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

/* ── Sampling Checklist ───────────────────────────────────────────────────── */

function SamplingChecklist() {
  const items = [
    { label: 'Population được định nghĩa rõ', detail: '"30M user SnowTech" hay "8.4M user nhận push tháng 9"?' },
    { label: 'Sampling frame có bao phủ đúng population', detail: 'Exclude user chưa KYC nếu họ không nhận được push.' },
    { label: 'Sample size đủ lớn', detail: 'n=2,000 cho margin of error ~2% ở 95% CI.' },
    { label: 'Phương pháp random hoặc stratified', detail: 'Tránh chỉ survey user active — đó là survivorship bias.' },
    { label: 'Mỗi subgroup đủ lớn để phân tích riêng', detail: 'Nếu cần so sánh Power vs Casual: mỗi nhóm tối thiểu 100.' },
    { label: 'Kết quả đi kèm confidence interval', detail: '"64% ± 2.1%" tốt hơn chỉ báo "64%".' },
  ]
  return (
    <div className="border border-outline-variant/30 rounded-xl overflow-hidden my-6">
      <div className="bg-surface-container px-5 py-3 border-b border-outline-variant/20">
        <p className="font-ui-label text-[0.6875rem] text-on-surface font-semibold">
          Sampling Checklist — trước khi bắt đầu bất kỳ survey nào
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

/* ── Helpers ──────────────────────────────────────────────────────────────── */

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

function IC({ children }: { children: string }) {
  return (
    <code className="font-code text-[0.875rem] bg-surface-container px-1.5 py-0.5 rounded text-secondary">
      {children}
    </code>
  )
}

/* ── Main component ───────────────────────────────────────────────────────── */

export function SamplingContent() {
  return (
    <article className="max-w-[720px] py-8 lg:py-10 lg:pr-8">

      {/* ── Header ── */}
      <p className="font-ui-label text-ui-label text-secondary uppercase tracking-widest mb-4">Module 2</p>
      <h1 className="font-display text-display text-on-surface mb-6 leading-[1.05]">
        Data Sampling
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
        SnowTech có 30 triệu user. Bạn không thể — và không cần — hỏi tất cả họ.
        Sampling là kỹ năng chọn đúng người để hỏi, đúng cách, để câu trả lời
        đại diện cho cả 30 triệu.
      </p>

      {/* ── Learning Objectives ── */}
      <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-6 mb-16">
        <p className="font-ui-label text-[0.625rem] text-secondary uppercase tracking-widest mb-4">
          Sau module này, bạn sẽ có thể
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            'Định nghĩa đúng Population và Sampling Frame cho mỗi survey',
            'Phát hiện Sampling Bias trước khi nó làm hỏng kết quả',
            'Chọn giữa Simple Random và Stratified Sampling',
            'Tính sample size cần thiết để đạt margin of error mong muốn',
            'Dùng Bootstrap để đánh giá độ ổn định của estimate',
            'Thuyết phục stakeholder tại sao 2,000 user là đủ',
          ].map((obj) => (
            <div key={obj} className="flex gap-3 items-start">
              <span className="text-secondary shrink-0 mt-0.5 font-semibold">✓</span>
              <p className="font-body-md text-body-md text-on-surface-variant">{obj}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 1 — Tại sao Sampling tồn tại?
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="tai-sao-sampling" className="mb-16">
        <SectionTitle id="tai-sao-sampling">1. Tại sao Sampling tồn tại?</SectionTitle>

        <SlackThread
          channel="analytics-crm"
          messages={[
            {
              from: 'CRM Manager Linh',
              time: '9:14 SA',
              text: 'Push CTR của chúng mình giảm từ 8% xuống 5.2% trong 3 tháng qua. Mình cần hiểu WHY. Có thể survey user không?',
            },
            {
              from: 'DA Minh',
              time: '9:18 SA',
              text: 'Được. Hỏi hết 30M user hay một mẫu?',
            },
            {
              from: 'CRM Manager Linh',
              time: '9:19 SA',
              text: 'Hỏi đủ để ra quyết định là được. Mình cần biết user nghĩ gì về push notification của mình.',
            },
            {
              from: 'DA Minh',
              time: '9:21 SA',
              text: 'OK, mình đề xuất survey 2,000 user. Giải thích sau.',
            },
          ]}
        />

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          CRM Manager Linh cần câu trả lời. Nhưng hỏi 30 triệu user là:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
          {[
            { label: 'Không thể về logistics', desc: 'Survey gửi đến 30M người → response rate 0.1% = 30,000 người cần review. Không ai làm được trong 1 tuần.' },
            { label: 'Không cần thiết về thống kê', desc: 'Với 2,000 user được chọn đúng, margin of error chỉ ~2.2% — đủ chính xác để ra quyết định.' },
            { label: 'Tốn kém không tương xứng', desc: 'Cost per survey × 30M >> Cost per survey × 2,000. Insight không tỷ lệ thuận với số người hỏi.' },
          ].map((r) => (
            <div key={r.label} className="border border-outline-variant/30 rounded-xl p-4">
              <p className="font-ui-label text-ui-label text-on-surface mb-2">{r.label}</p>
              <p className="font-body-md text-[0.8rem] text-on-surface-variant">{r.desc}</p>
            </div>
          ))}
        </div>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Đây là lý do Sampling tồn tại:{' '}
          <strong className="text-on-surface">
            bạn có thể rút ra kết luận đủ chính xác về cả 30 triệu user,
            chỉ bằng cách hỏi đúng 2,000 người.
          </strong>{' '}
          Nhưng chỉ khi bạn chọn 2,000 người đó đúng cách.
        </p>

        <Note>
          Sampling không phải "hỏi ít người vì lười." Sampling là kỹ thuật có nguyên tắc
          để lấy thông tin đại diện. Làm sai → kết quả lệch → quyết định sai. Làm đúng →
          2,000 người nói lên tiếng nói của 30 triệu.
        </Note>
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 — Population vs Sample
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="population-vs-sample" className="mb-16">
        <SectionTitle id="population-vs-sample">2. Population vs Sample</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Trước khi chọn sample, phải định nghĩa rõ ba khái niệm — vì mỗi khái niệm có thể
          cho kết quả rất khác nhau nếu định nghĩa sai.
        </p>

        <div className="border border-outline-variant/30 rounded-xl overflow-hidden my-6 divide-y divide-outline-variant/20">
          {[
            {
              term: 'Population',
              def: 'Toàn bộ đối tượng bạn muốn rút ra kết luận.',
              snowtech: '30 triệu user SnowTech hiện có trong hệ thống.',
              trap: 'Đừng định nghĩa quá rộng — nếu bạn chỉ care về user active, population là 12M MAU, không phải 30M.',
            },
            {
              term: 'Sampling Frame',
              def: 'Danh sách thực tế bạn có thể rút sample từ đó.',
              snowtech: '8.4M user đã nhận push notification tháng 9 (có trong mart.fct_campaign_events).',
              trap: '(Section 4 sẽ quay lại Sampling Frame.) Nếu Sampling Frame không bao phủ đủ Population, kết quả sẽ lệch — đây chính là nguồn gốc của Sampling Bias.',
            },
            {
              term: 'Sample',
              def: 'Tập con được chọn ra từ Sampling Frame để khảo sát.',
              snowtech: '2,000 user được chọn ngẫu nhiên từ 8.4M người trong frame.',
              trap: 'Sample phải đại diện cho Population — không phải chỉ cho Sampling Frame.',
            },
          ].map((item) => (
            <div key={item.term} className="px-5 py-4">
              <p className="font-ui-label text-ui-label text-secondary mb-1">{item.term}</p>
              <p className="font-body-md text-[0.8rem] text-on-surface-variant mb-1">{item.def}</p>
              <p className="font-body-md text-[0.75rem] text-on-surface mb-1">
                <span className="font-medium">SnowTech: </span>{item.snowtech}
              </p>
              <p className="font-body-md text-[0.75rem] text-on-surface-variant/60 italic">{item.trap}</p>
            </div>
          ))}
        </div>

        <Code>{`import pandas as pd
import numpy as np

# Giả lập: 8.4M user đã nhận push (sampling frame của chúng ta)
np.random.seed(42)
n_frame = 8_400_000

sampling_frame = pd.DataFrame({
    'user_id':      [f'U{i:07d}' for i in range(n_frame)],
    'user_segment': np.random.choice(
        ['Power', 'Regular', 'Casual'],
        p=[0.05, 0.35, 0.60],         # 5% Power, 35% Regular, 60% Casual
        size=n_frame
    ),
    'province':     np.random.choice(
        ['HCM', 'HN', 'DN', 'Khác'],
        p=[0.35, 0.35, 0.10, 0.20],
        size=n_frame
    ),
})

print(f"Sampling Frame: {len(sampling_frame):,} users")
print()
print(sampling_frame['user_segment'].value_counts(normalize=True).mul(100).round(1))`}
        </Code>
        <Output>{`Sampling Frame: 8,400,000 users

user_segment
Casual     60.0%   → 5,040,000 users
Regular    35.0%   → 2,940,000 users
Power       5.0%   →   420,000 users   ← chỉ 5% nhưng đóng góp ~60% GMV
Name: proportion, dtype: float64`}
        </Output>

        <Note>
          Power Users chỉ chiếm 5% nhưng đóng góp ~60% GMV của SnowTech — đây là lý do
          Stratified Sampling (Section 6) quan trọng hơn Simple Random Sampling trong bài toán này.
          Nếu chỉ random sample, bạn có thể chỉ lấy được ~100 Power Users trong 2,000 người — quá ít để phân tích riêng.
        </Note>

        <QuickSummary items={[
          'Population: tất cả người bạn care (30M user). Sampling Frame: danh sách thực tế bạn có (8.4M nhận push). Sample: 2,000 người bạn hỏi.',
          'Population ≠ Sampling Frame — đây là nguồn gốc của Coverage Bias.',
          'Định nghĩa Population sai → câu trả lời đúng về sai đối tượng.',
        ]} />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3 — Một mẫu tốt là gì?
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="mau-tot-la-gi" className="mb-16">
        <SectionTitle id="mau-tot-la-gi">3. Một mẫu tốt là gì?</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          "Mẫu tốt" không phải là "mẫu lớn." Một mẫu 2,000 người được chọn đúng tốt hơn
          mẫu 200,000 người được chọn sai. Hai tiêu chí quan trọng nhất:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
          {[
            {
              criterion: 'Representative',
              desc: 'Phân phối của mẫu phản ánh đúng phân phối của population.',
              good: 'Sample 2,000 người có 5% Power Users — giống population.',
              bad: 'Sample có 40% Power Users — không đại diện.',
            },
            {
              criterion: 'Sufficient Size',
              desc: 'Đủ lớn để Margin of Error chấp nhận được với mức confidence mong muốn.',
              good: 'n=2,000 → MoE ≈ ±2.2% ở 95% CI — đủ để ra quyết định.',
              bad: 'n=50 → MoE ≈ ±14% — khoảng quá rộng để có nghĩa.',
            },
          ].map((c) => (
            <div key={c.criterion} className="border border-outline-variant/30 rounded-xl p-4">
              <p className="font-ui-label text-ui-label text-secondary mb-2">{c.criterion}</p>
              <p className="font-body-md text-[0.8rem] text-on-surface-variant mb-3">{c.desc}</p>
              <div className="space-y-1.5">
                <div className="flex gap-2">
                  <span className="text-secondary shrink-0 text-sm">+</span>
                  <span className="font-body-md text-[0.75rem] text-on-surface-variant">{c.good}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-error/70 shrink-0 text-sm">−</span>
                  <span className="font-body-md text-[0.75rem] text-on-surface-variant">{c.bad}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Sample size cần thiết phụ thuộc vào{' '}
          <strong className="text-on-surface">margin of error bạn chấp nhận được</strong> —
          không phải vào kích thước population. Công thức gần đúng cho proportions:
        </p>

        <Code>{`import math

def sample_size(moe: float, confidence: float = 0.95, p: float = 0.5) -> int:
    """
    moe: margin of error (vd 0.05 = ±5%)
    p:   estimated proportion (0.5 = worst case, MoE lớn nhất)
    """
    z = 1.96 if confidence == 0.95 else 2.576  # 95% hoặc 99% CI
    n = (z / moe) ** 2 * p * (1 - p)
    return math.ceil(n)

# Ứng dụng vào bài toán CRM
print("Sample size cần thiết:")
print(f"  MoE ±5%:   {sample_size(0.05):,} users")
print(f"  MoE ±3%:   {sample_size(0.03):,} users")
print(f"  MoE ±2.2%: {sample_size(0.022):,} users   ← n=2,000 đạt mức này")
print(f"  MoE ±1%:   {sample_size(0.01):,} users")`}
        </Code>
        <Output>{`Sample size cần thiết:
  MoE ±5%:     385 users
  MoE ±3%:   1,068 users
  MoE ±2.2%: 1,991 users   ← n=2,000 đạt mức này
  MoE ±1%:   9,604 users`}
        </Output>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Với n=2,000 user, kết quả survey sẽ có margin of error khoảng ±2.2% ở 95% confidence.
          Nghĩa là nếu 64% user nói push không relevant, tỷ lệ thực trong population nằm khoảng
          61.8%–66.2% — đủ chính xác để CRM Manager ra quyết định.
        </p>

        <DADecision
          use="Khi cần ước lượng proportion hoặc mean từ survey user. Khi cost hỏi từng người quá cao."
          noUse="Khi bạn đã có toàn bộ data trong warehouse — không cần survey, chỉ cần query."
          risk="Sample size quá nhỏ → MoE quá lớn → kết luận không đáng tin. Tệ hơn là không biết MoE là bao nhiêu."
          decision="Cho CRM survey này: n=2,000, MoE ±2.2%. Nếu cần phân tích riêng từng segment, cần n lớn hơn hoặc dùng Stratified Sampling."
        />

        <QuickSummary items={[
          'Mẫu tốt = representative + sufficient size. Mẫu lớn mà không representative vẫn cho kết quả sai.',
          'Sample size phụ thuộc vào MoE mong muốn, không phải vào kích thước population.',
          'n=2,000 → MoE ±2.2% ở 95% CI. Đây là ngưỡng phổ biến cho product/CRM survey tại Fintech.',
        ]} />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4 — Sampling Bias
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="sampling-bias" className="mb-16">
        <SectionTitle id="sampling-bias">4. Sampling Bias</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Bias là sai lệch có hệ thống — không phải ngẫu nhiên. Kết quả bị bias không thể
          "fix" bằng cách lấy thêm sample. Phải phát hiện và loại bỏ trước khi lấy mẫu.
        </p>

        <div className="space-y-4 my-6">
          {[
            {
              type: 'Selection Bias',
              desc: 'Sample không được chọn ngẫu nhiên — nhóm nhất định có nhiều khả năng được chọn hơn.',
              example: 'Survey gửi qua app → chỉ user còn đang dùng app trả lời → bỏ sót user đã churn hoặc ít dùng.',
              snowtech: 'Để hiểu TẠI SAO user giảm dùng push, bạn cần hỏi cả user inactive — nhưng gửi qua app thì không reach được họ.',
            },
            {
              type: 'Survivorship Bias',
              desc: 'Chỉ quan sát được "người sống sót" — những trường hợp thất bại đã biến mất khỏi data.',
              example: 'Phân tích push CTR chỉ trên user còn click — bỏ qua tất cả user đã tắt notification hoặc uninstall.',
              snowtech: 'User tắt push là những người quan trọng nhất để hiểu — nhưng họ không còn trong sampling frame nữa.',
            },
            {
              type: 'Response Bias',
              desc: 'Người trả lời survey có xu hướng thiên lệch — chỉ người có cảm xúc mạnh (rất thích hoặc rất ghét) mới trả lời.',
              example: 'Survey về push notification → response rate 20% → 80% người "bình thường" không có ý kiến bị bỏ sót.',
              snowtech: 'Kết quả survey push satisfaction có thể bị kéo về hai cực (rất positive và rất negative) hơn thực tế.',
            },
            {
              type: 'Coverage Bias',
              desc: 'Sampling Frame không bao phủ đủ Population — một phần đối tượng không có cơ hội được chọn.',
              example: 'Sampling Frame = 8.4M user nhận push. Nhưng 21.6M user không nhận push cũng thuộc population.',
              snowtech: '8.4M user nhận push có thể có tỷ lệ engagement khác với 21.6M không nhận — và kết quả survey sẽ không đại diện cho toàn bộ 30M.',
            },
          ].map((bias, i) => (
            <div key={i} className="border border-outline-variant/30 rounded-xl p-5">
              <p className="font-ui-label text-ui-label text-on-error-container mb-2">{bias.type}</p>
              <p className="font-body-md text-[0.8rem] text-on-surface-variant mb-3">{bias.desc}</p>
              <div className="bg-surface-container rounded-lg px-4 py-3 space-y-2">
                <p className="font-body-md text-[0.75rem] text-on-surface-variant">
                  <span className="font-medium text-on-surface">Ví dụ: </span>{bias.example}
                </p>
                <p className="font-body-md text-[0.75rem] text-secondary/80 italic">
                  <span className="font-medium not-italic text-secondary">SnowTech: </span>{bias.snowtech}
                </p>
              </div>
            </div>
          ))}
        </div>

        <WarningBlock title="⚠ Bias không thể fix bằng sample size lớn hơn">
          <p>
            Năm 1936, Literary Digest gửi 10 triệu phiếu khảo sát bầu cử tổng thống Mỹ
            và nhận được 2.4 triệu phản hồi — rồi dự đoán sai hoàn toàn.
          </p>
          <p>
            Vấn đề không phải vì sample quá nhỏ. Vì sampling frame chỉ gồm người có xe hơi
            và điện thoại (nhóm giàu hơn) — bias ngay từ đầu.
            Thêm 10 triệu phiếu nữa cũng không cứu được kết quả sai.
          </p>
          <p>
            Tại SnowTech: survey 2,000 user active không cho bạn biết gì về 21.6M user chưa nhận push.
            Đó là bias về coverage — không fix được bằng cách tăng n.
          </p>
        </WarningBlock>

        <Mistakes items={[
          'Survey chỉ user active app — bỏ sót toàn bộ user đã churn hoặc inactive, nhưng họ có thể là người cần hiểu nhất.',
          'Phân tích push CTR trung bình mà không nhận ra rằng những ai không click đã chặn notification — survivorship bias.',
          'Nghĩ rằng "lấy thêm mẫu sẽ fix được bias" — sai. Bias là sai lệch có hệ thống, không phải random error.',
        ]} />

        <QuickSummary items={[
          'Bias = sai lệch có hệ thống. Không fix được bằng n lớn hơn. Phải phát hiện và loại bỏ từ thiết kế.',
          '4 loại bias chính: Selection, Survivorship, Response, Coverage.',
          'Với push survey tại SnowTech: phải thiết kế riêng để reach user inactive — không thể chỉ dùng in-app survey.',
        ]} />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5 — Random Sampling
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="random-sampling" className="mb-16">
        <SectionTitle id="random-sampling">5. Simple Random Sampling</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Cách đơn giản nhất: mỗi user trong Sampling Frame có cơ hội được chọn bằng nhau.
          Không ưu tiên, không phân nhóm — hoàn toàn ngẫu nhiên.
        </p>

        <Code>{`# Simple Random Sampling: 2,000 user từ 8.4M Sampling Frame
srs_sample = sampling_frame.sample(n=2000, random_state=42)

print(f"Sample size: {len(srs_sample):,}")
print()
print("Phân phối user_segment trong SRS:")
print(srs_sample['user_segment'].value_counts())`}
        </Code>
        <Output>{`Sample size: 2,000

user_segment
Casual     1,204   (60.2%)   ← gần đúng 60% trong frame
Regular      706   (35.3%)
Power         90   (4.5%)    ← chỉ ~90 Power Users!
Name: count, dtype: int64`}
        </Output>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Vấn đề lộ ra ngay: SRS cho ~90 Power Users trong sample — quá ít để phân tích riêng.
          Power Users là nhóm đóng góp 60% GMV, và CRM Manager cần hiểu riêng hành vi của họ
          với push notification. 90 người không đủ để rút ra kết luận đáng tin.
        </p>

        <TradeoffBlock
          options={[
            {
              label: 'Simple Random Sampling',
              tag: 'Dùng được',
              tagVariant: 'ok',
              pros: [
                'Dễ implement: df.sample(n=2000)',
                'Không cần biết cấu trúc population trước',
                'Mỗi người có cơ hội bằng nhau — unbiased',
              ],
              cons: [
                'Nhóm nhỏ (Power Users 5%) có thể under-represented',
                'n=90 Power Users → kết quả không đáng tin khi phân tích riêng',
                'Không đảm bảo tỷ lệ đại diện của minority groups',
              ],
            },
            {
              label: 'Stratified Sampling',
              tag: 'Tốt hơn cho bài này',
              tagVariant: 'ok',
              pros: [
                'Đảm bảo mỗi segment được đại diện đủ',
                'Power Users: 200 thay vì 90 → phân tích riêng được',
                'Variance thấp hơn SRS khi strata tương đồng nội bộ',
              ],
              cons: [
                'Cần biết segment trước khi sample',
                'Phải điều chỉnh weight khi tổng hợp kết quả toàn population',
                'Phức tạp hơn SRS một chút',
              ],
            },
          ]}
        />

        <DADecision
          use="Khi tất cả subgroup đều đủ lớn trong population (>10%) và không cần phân tích riêng từng nhóm."
          noUse="Khi có minority group quan trọng (Power Users 5%) cần phân tích riêng — sẽ bị under-represented."
          risk="Under-representation của Power Users → quyết định CRM không phản ánh đúng hành vi nhóm chiến lược nhất."
          decision="Với push survey này: SRS không đủ cho Power Users. Chuyển sang Stratified Sampling — xem Section 6."
        />

        <QuickSummary items={[
          'SRS: mỗi người có cơ hội bằng nhau. Unbiased, dễ implement.',
          'Vấn đề: minority group (Power Users 5%) có thể dưới đại diện — n=90 trong 2,000 sample.',
          'Nếu không cần phân tích riêng từng subgroup → SRS đủ tốt. Nếu cần → dùng Stratified.',
        ]} />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 6 — Stratified Sampling
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="stratified-sampling" className="mb-16">
        <SectionTitle id="stratified-sampling">6. Stratified Sampling</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Stratified Sampling chia population thành các <em>strata</em> (nhóm con) rồi
          sample ngẫu nhiên từ mỗi nhóm theo tỷ lệ được thiết kế sẵn.
          Đây là phương pháp đúng khi bạn cần so sánh các nhóm quan trọng.
        </p>

        <SlackThread
          channel="analytics-crm"
          messages={[
            {
              from: 'CRM Manager Linh',
              time: '10:05 SA',
              text: 'Mình cần hiểu riêng: Power Users có cảm thấy push relevant không? Họ là nhóm quan trọng nhất.',
            },
            {
              from: 'DA Minh',
              time: '10:09 SA',
              text: 'SRS sẽ cho ~90 Power Users — ít quá để kết luận. Mình đề xuất Stratified: 200 Power Users + 1,800 Regular/Casual. Đủ để so sánh.',
            },
            {
              from: 'CRM Manager Linh',
              time: '10:11 SA',
              text: 'OK, làm vậy đi. Nhưng khi tổng hợp toàn bộ thì sao?',
            },
            {
              from: 'DA Minh',
              time: '10:13 SA',
              text: 'Khi report overall sẽ weight theo tỷ lệ thực của từng segment. Power Users 5% thực tế sẽ được weight 5%, không phải 10%.',
            },
          ]}
        />

        <Code>{`# Stratified Sampling: đảm bảo đủ Power Users để phân tích riêng
strata_config = {
    'Power':   200,    # over-sample từ 5% → 10% trong sample
    'Regular': 700,    # proportional
    'Casual':  1100,   # proportional
}
# Tổng: 2,000 users

stratified_parts = []
for segment, n in strata_config.items():
    stratum = sampling_frame[sampling_frame['user_segment'] == segment]
    stratified_parts.append(stratum.sample(n=n, random_state=42))

stratified_sample = pd.concat(stratified_parts).reset_index(drop=True)

print(f"Sample size: {len(stratified_sample):,}")
print()
print("Phân phối trong Stratified Sample:")
print(stratified_sample['user_segment'].value_counts())`}
        </Code>
        <Output>{`Sample size: 2,000

user_segment
Casual     1,100   (55.0%)
Regular      700   (35.0%)
Power        200   (10.0%)   ← tăng từ 90 lên 200 — đủ để phân tích riêng

Name: count, dtype: int64`}
        </Output>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Bây giờ có 200 Power Users — đủ để rút ra kết luận riêng về nhóm này.
          Sau khi có kết quả survey, tổng hợp toàn bộ bằng cách weight đúng tỷ lệ thực:
        </p>

        <Code>{`# Giả lập kết quả survey: tỷ lệ "push relevant"
survey_results = {
    'Power':   {'relevant': 128, 'not_relevant': 72,  'n': 200},  # 64% relevant
    'Regular': {'relevant': 455, 'not_relevant': 245, 'n': 700},  # 65% relevant
    'Casual':  {'relevant': 726, 'not_relevant': 374, 'n': 1100}, # 66% relevant
}

# Weight thực của mỗi segment trong population (không phải trong sample)
actual_weights = {'Power': 0.05, 'Regular': 0.35, 'Casual': 0.60}

weighted_relevant = 0
for seg, res in survey_results.items():
    segment_rate = res['relevant'] / res['n']
    print(f"{seg:8s}: {segment_rate:.1%} relevant  (n={res['n']}, weight={actual_weights[seg]:.0%})")
    weighted_relevant += segment_rate * actual_weights[seg]

print()
print(f"Weighted overall: {weighted_relevant:.1%} find push relevant")
print(f"  → 95% CI: [{weighted_relevant - 0.022:.1%}, {weighted_relevant + 0.022:.1%}]")`}
        </Code>
        <Output>{`Power   : 64.0% relevant  (n=200, weight=5%)
Regular : 65.0% relevant  (n=700, weight=35%)
Casual  : 66.0% relevant  (n=1100, weight=60%)

Weighted overall: 65.5% find push relevant
  → 95% CI: [63.3%, 67.7%]`}
        </Output>

        <Note>
          Kết quả thú vị: Power Users (64%) thấy push ít relevant hơn Casual Users (66%) — dù chênh lệch nhỏ.
          Đây là insight CRM Manager cần: nội dung push hiện tại đang được optimize cho Casual Users,
          nhưng không đủ personalized cho Power Users có transaction phức tạp hơn.
          4.312 VND là point estimate — cần CI để báo cáo đầy đủ (Module 3 sẽ đi sâu về điều này).
        </Note>

        <QuickSummary items={[
          'Stratified Sampling: chia thành strata → sample ngẫu nhiên từ mỗi strata với n thiết kế sẵn.',
          'Over-sample minority group (Power Users) để phân tích riêng. Weight lại khi tổng hợp overall.',
          'Tốt hơn SRS khi: có minority group quan trọng, hoặc cần so sánh subgroup với độ chính xác cao.',
        ]} />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 7 — Bootstrap
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="bootstrap" className="mb-16">
        <SectionTitle id="bootstrap">7. Bootstrap</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Bootstrap trả lời một câu hỏi khác: <em>"Nếu tôi survey lại 2,000 user khác,
          kết quả có thay đổi nhiều không?"</em> — hay nói cách khác, estimate của bạn
          có ổn định không?
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Ý tưởng: tái mẫu <em>có hoàn lại</em> từ sample hiện tại nhiều lần để mô phỏng
          biến động nếu bạn lấy các sample khác nhau từ cùng population.
        </p>

        <Code>{`import numpy as np

# Survey data: 65.5% trong 2,000 user thấy push relevant
n_sample       = 2000
observed_rate  = 0.655
responses      = np.array([1] * int(n_sample * observed_rate) +
                          [0] * (n_sample - int(n_sample * observed_rate)))

# Bootstrap: 10,000 lần re-sample
np.random.seed(42)
n_bootstrap    = 10_000
bootstrap_means = [
    np.mean(np.random.choice(responses, size=n_sample, replace=True))
    for _ in range(n_bootstrap)
]

boot_arr = np.array(bootstrap_means)
ci_lower = np.percentile(boot_arr, 2.5)
ci_upper = np.percentile(boot_arr, 97.5)

print(f"Observed rate:    {observed_rate:.1%}")
print(f"Bootstrap mean:   {boot_arr.mean():.3f}")
print(f"Bootstrap std:    {boot_arr.std():.4f}")
print(f"95% Bootstrap CI: [{ci_lower:.3f}, {ci_upper:.3f}]")
print(f"                  [{ci_lower:.1%}, {ci_upper:.1%}]")`}
        </Code>
        <Output>{`Observed rate:    65.5%
Bootstrap mean:   0.655
Bootstrap std:    0.0107
95% Bootstrap CI: [0.634, 0.676]
                  [63.4%, 67.6%]`}
        </Output>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Bootstrap std = 0.0107 — nhỏ, cho thấy estimate rất ổn định.
          Nếu lấy 2,000 user khác từ cùng population, kết quả sẽ nằm trong khoảng [63.4%, 67.6%]
          trong 95% trường hợp.
        </p>

        <WarningBlock title="Bootstrap đo stability, không đo accuracy">
          <p>
            Bootstrap CI nói: <em>"Nếu lấy lại mẫu từ SAMPLE này, kết quả sẽ nằm trong khoảng này."</em>
          </p>
          <p>
            Bootstrap KHÔNG nói: <em>"Kết quả thực của 30M user nằm trong khoảng này."</em>
          </p>
          <p>
            Để kết luận về population, cần Confidence Interval dựa trên Standard Error —
            đó là nội dung của <strong>Module 3: Statistical Inference</strong>.
          </p>
        </WarningBlock>

        <div className="border border-outline-variant/30 bg-surface-container rounded-xl p-5 my-6">
          <p className="font-ui-label text-[0.625rem] text-secondary uppercase tracking-widest mb-3">
            Khi nào dùng Bootstrap tại SnowTech
          </p>
          <div className="space-y-2">
            {[
              { use: 'Estimate có distribution phức tạp', example: 'Median wallet balance — không có công thức SE đơn giản.' },
              { use: 'Kiểm tra xem estimate có ổn định không', example: 'Bootstrap std nhỏ → có thể tin vào survey results.' },
              { use: 'So sánh hai group khi n nhỏ', example: 'Push CTR của Power Users (n=200) vs Casual (n=1,100).' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-secondary shrink-0 mt-0.5">→</span>
                <p className="font-body-md text-[0.8rem] text-on-surface-variant">
                  <span className="text-on-surface font-medium">{item.use}: </span>{item.example}
                </p>
              </div>
            ))}
          </div>
        </div>

        <QuickSummary items={[
          'Bootstrap: re-sample có hoàn lại từ sample hiện tại → đo variability của estimate.',
          'Bootstrap CI đo stability (sẽ ra kết quả tương tự nếu sample lại?), không đo accuracy (estimate có đúng không?).',
          'Dùng khi distribution của statistic không biết, hoặc khi muốn confirm estimate ổn định.',
        ]} />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 8 — Common Mistakes
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="common-mistakes" className="mb-16">
        <SectionTitle id="common-mistakes">8. Common Mistakes</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Sampling mistakes không phải lỗi code — chúng là lỗi tư duy.
          Đây là những gì DA thường làm sai khi thiết kế survey tại Fintech:
        </p>

        <div className="space-y-4 my-6">
          {[
            {
              mistake: 'Survey in-app cho user active only',
              why: 'Bạn đang hỏi người đang dùng app tại sao họ ít dùng app hơn — câu hỏi sai đối tượng.',
              fix: 'Thiết kế channel reach được cả user inactive: SMS, email, hoặc retargeting ad.',
            },
            {
              mistake: '"n lớn hơn = kết quả tốt hơn"',
              why: 'Survey 100,000 user bị bias vẫn cho kết quả sai. Survey 2,000 user đúng phương pháp cho kết quả tốt hơn.',
              fix: 'Fix bias trước, tăng n sau. Tăng n không fix được bias đã tồn tại trong thiết kế.',
            },
            {
              mistake: 'Không report Margin of Error',
              why: '"64% user không thấy push relevant" mà không có CI là thiếu context. Stakeholder không biết độ tin cậy của con số này.',
              fix: 'Luôn report: "64% ± 2.2% (95% CI)". Một con số không có MoE là không hoàn chỉnh.',
            },
            {
              mistake: 'Dùng SRS khi có minority group quan trọng',
              why: 'SRS cho ~90 Power Users trong 2,000 sample — không đủ để phân tích riêng nhóm đóng góp 60% GMV.',
              fix: 'Dùng Stratified Sampling: over-sample Power Users lên 200 → phân tích riêng được, weight lại khi tổng hợp.',
            },
          ].map((m, i) => (
            <div key={i} className="border border-error-container/40 rounded-xl overflow-hidden">
              <div className="bg-error-container/20 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="text-on-error-container text-sm font-semibold">✕</span>
                  <p className="font-ui-label text-ui-label text-on-error-container">{m.mistake}</p>
                </div>
              </div>
              <div className="px-5 py-3 space-y-2">
                <p className="font-body-md text-[0.8rem] text-on-surface-variant">
                  <span className="font-medium text-on-surface">Vì sao sai: </span>{m.why}
                </p>
                <p className="font-body-md text-[0.8rem] text-on-surface-variant">
                  <span className="font-medium text-secondary">Fix: </span>{m.fix}
                </p>
              </div>
            </div>
          ))}
        </div>

        <SamplingChecklist />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 9 — Case Study
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="case-study" className="mb-16">
        <SectionTitle id="case-study">9. Case Study: Push CTR giảm — thiết kế survey đúng</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Quay lại bài toán ban đầu. Push CTR của SnowTech giảm từ 8% xuống 5.2%.
          CRM Manager Linh cần biết WHY. Đây là thiết kế sampling hoàn chỉnh:
        </p>

        <div className="space-y-3 my-6">
          {[
            {
              step: '1. Định nghĩa Population & Question',
              content: 'Population: 12M Monthly Active Users đang nhận push notification. Business Question: "Tỷ lệ user thấy push không relevant là bao nhiêu, và lý do là gì?"',
            },
            {
              step: '2. Xác định Sampling Frame',
              content: 'Sampling Frame: 8.4M user đã nhận ít nhất 1 push trong tháng 9 (từ mart.fct_campaign_events). Exclusion: user chưa KYC (không nhận push), user dưới 18 tuổi.',
            },
            {
              step: '3. Chọn phương pháp & tính n',
              content: 'Stratified Sampling theo user_segment. Target MoE ±2.2% overall → n=2,000. Allocation: Power=200, Regular=700, Casual=1,100.',
            },
            {
              step: '4. Kiểm tra Bias',
              content: 'Bias risk: channel survey là SMS → reach được cả inactive user. Response bias: survey ngắn (3 câu), có incentive nhỏ (5K điểm thưởng). Chấp nhận được.',
            },
            {
              step: '5. Run & Analyze',
              content: 'Kết quả: 65.5% [63.3%, 67.7%] thấy push relevant — tức 34.5% không relevant. Power Users 64% vs Casual Users 66% — Power Users ít thấy relevant hơn.',
            },
          ].map((s, i) => (
            <div key={i} className="flex gap-5 border border-outline-variant/30 rounded-xl p-5">
              <span className="font-code text-[0.875rem] text-secondary/50 font-semibold shrink-0 mt-0.5">{String(i+1).padStart(2,'0')}</span>
              <div>
                <p className="font-ui-label text-ui-label text-on-surface mb-2">{s.step.replace(/^\d+\. /, '')}</p>
                <p className="font-body-md text-[0.8rem] text-on-surface-variant">{s.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-outline-variant/30 bg-surface-container rounded-xl p-5 my-6">
          <p className="font-ui-label text-[0.625rem] text-secondary uppercase tracking-widest mb-3">
            Recommendation cho CRM Manager Linh
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mb-3">
            34.5% user — khoảng <strong className="text-on-surface">2.9M MAU</strong> — thấy push không relevant.
            Đây không phải vấn đề frequency (số lần gửi) mà là relevance (nội dung không đúng với hành vi
            thực tế của từng segment).
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mb-3">
            Power Users đặc biệt kém: họ có giao dịch phức tạp hơn (Retail, Health) nhưng nhận
            push giống Casual Users (F&B voucher, general promotion). Cần personalization theo
            transaction history, không phải theo segment label đơn giản.
          </p>
          <div className="border-t border-outline-variant/20 pt-3">
            <p className="font-ui-label text-[0.6875rem] text-secondary mb-1">Next Step</p>
            <p className="font-body-md text-[0.8rem] text-on-surface-variant">
              A/B Test: nhóm A nhận push personalized theo top category của user trong 30 ngày qua.
              Nhóm B nhận push generic hiện tại. Hypothesis: CTR của nhóm A cao hơn ít nhất 1.5%.
              Đó là <a href="/modules/inference" className="text-secondary hover:underline">Module 3: Statistical Inference</a> — làm sao để biết kết quả A/B Test có ý nghĩa không.
            </p>
          </div>
        </div>
      </section>

      {/* ── Sign-off ── */}
      <div className="border-t border-outline-variant/20 pt-10">
        <p className="font-body-md text-body-md text-on-surface-variant">
          Tiếp theo:{' '}
          <a href="/modules/inference" className="text-secondary hover:underline">
            Module 3 — Statistical Inference: 65.5% là point estimate.
            Làm sao biết nó đáng tin? →
          </a>
        </p>
      </div>

    </article>
  )
}
