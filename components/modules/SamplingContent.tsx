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

/* ── Flow Diagram ─────────────────────────────────────────────────────────── */

type FlowNode = {
  label: string
  sub?: string
  variant?: 'default' | 'primary' | 'warn' | 'ok'
}

function FlowRow({ nodes, caption }: { nodes: FlowNode[]; caption?: string }) {
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
              {node.sub && (
                <div className="text-[0.625rem] opacity-60 mt-0.5 leading-snug">{node.sub}</div>
              )}
            </div>
            {i < nodes.length - 1 && (
              <span className="text-on-surface-variant/40 text-base select-none">→</span>
            )}
          </div>
        ))}
      </div>
      {caption && (
        <p className="text-[0.6875rem] text-on-surface-variant/50 mt-2 font-ui-label">{caption}</p>
      )}
    </div>
  )
}

/* ── Compare Columns ──────────────────────────────────────────────────────── */

type CompareCol = { title: string; items: string[]; result: string; variant: 'warn' | 'ok' }

function CompareColumns({ columns, caption }: { columns: CompareCol[]; caption?: string }) {
  const gridCls = columns.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-3'
  return (
    <div className="my-6">
      <div className={`grid gap-3 ${gridCls}`}>
        {columns.map((col, i) => (
          <div key={i} className={`border rounded-xl p-4 ${col.variant === 'warn' ? 'border-error-container bg-error-container/20' : 'border-secondary/30 bg-secondary/5'}`}>
            <p className={`font-ui-label text-[0.6875rem] uppercase tracking-wider mb-3 ${col.variant === 'warn' ? 'text-on-error-container' : 'text-secondary'}`}>
              {col.title}
            </p>
            <ul className="space-y-1.5 mb-3">
              {col.items.map((item, j) => (
                <li key={j} className="font-body-md text-[0.8rem] text-on-surface-variant">{item}</li>
              ))}
            </ul>
            <div className={`border-t pt-3 ${col.variant === 'warn' ? 'border-error-container' : 'border-secondary/20'}`}>
              <p className={`font-ui-label text-[0.6875rem] font-semibold ${col.variant === 'warn' ? 'text-on-error-container' : 'text-secondary'}`}>
                {col.result}
              </p>
            </div>
          </div>
        ))}
      </div>
      {caption && <p className="text-[0.6875rem] text-on-surface-variant/50 mt-2 font-ui-label">{caption}</p>}
    </div>
  )
}

/* ── DA Decision Block ────────────────────────────────────────────────────── */

type DADecisionProps = { use: string; noUse: string; decision: string }

function DADecision({ use, noUse, decision }: DADecisionProps) {
  return (
    <div className="border border-secondary/25 bg-secondary/5 rounded-xl p-5 my-6">
      <p className="font-ui-label text-[0.625rem] text-secondary uppercase tracking-widest mb-4">
        🎯 Nếu bạn là DA tại ShopNow
      </p>
      <div className="space-y-3">
        <div className="flex gap-3">
          <span className="text-secondary shrink-0 mt-0.5 text-sm">✓</span>
          <p className="font-body-md text-[0.8rem] text-on-surface-variant">
            <strong className="text-on-surface font-medium">Khi nào dùng:</strong> {use}
          </p>
        </div>
        <div className="flex gap-3">
          <span className="text-error/70 shrink-0 mt-0.5 text-sm">✕</span>
          <p className="font-body-md text-[0.8rem] text-on-surface-variant">
            <strong className="text-on-surface font-medium">Khi nào không:</strong> {noUse}
          </p>
        </div>
        <div className="border-t border-secondary/20 pt-3">
          <p className="font-ui-label text-[0.6875rem] text-secondary mb-1">Quyết định thực tế</p>
          <p className="font-body-md text-[0.8rem] text-on-surface">{decision}</p>
        </div>
      </div>
    </div>
  )
}

/* ── Sampling Checklist ───────────────────────────────────────────────────── */

function SamplingChecklist() {
  const steps = [
    {
      label: 'Xác định Population',
      context: '"Chúng ta muốn kết luận về ai?" — không phải "data nào đang có". Với ShopNow: 5M tài khoản hay chỉ 1.2M active tháng này?',
    },
    {
      label: 'Xác định Sampling Frame',
      context: 'Ai thực sự có thể tiếp cận được? Khoảng cách giữa Population và Sampling Frame = bias tiềm ẩn cần phải thừa nhận.',
    },
    {
      label: 'Chọn phương pháp Sampling',
      context: 'Simple Random đủ không? Hay cần Stratified vì có nhóm thiểu số quan trọng (VIP 5%) cần đủ đại diện để phân tích?',
    },
    {
      label: 'Kiểm tra Bias',
      context: 'Response rate bao nhiêu? Ai không reply? Sampling Frame có bỏ sót nhóm quan trọng nào không (khách ngừng mua, khách Offline)?',
    },
    {
      label: 'Đánh giá độ đại diện của mẫu',
      context: 'So sánh cơ cấu sample vs population theo customer_group, city, channel. Sai lệch <5% từng nhóm là ổn.',
    },
    {
      label: 'Bootstrap CI — đánh giá độ ổn định',
      context: 'CI hẹp → có thể tin kết quả. CI rộng → cần thêm phản hồi trước khi ra quyết định chiến lược.',
    },
    {
      label: 'Ghi rõ giới hạn trong báo cáo',
      context: '"Phân tích này dựa trên [n] khách hàng [điều kiện cụ thể], không đại diện cho [nhóm bị bỏ sót]." Luôn viết câu này.',
    },
  ]
  return (
    <div className="border border-secondary/30 rounded-xl p-6 my-8">
      <p className="font-ui-label text-[0.625rem] text-secondary uppercase tracking-widest mb-1">
        Sampling Checklist for Data Analysts
      </p>
      <p className="font-body-md text-[0.8rem] text-on-surface-variant mb-6">
        Khi sếp yêu cầu khảo sát khách hàng — đi qua từng bước này trước khi bắt đầu code.
      </p>
      <ul className="space-y-4">
        {steps.map((step, i) => (
          <li key={i} className="flex gap-4">
            <div className="w-5 h-5 rounded border-2 border-secondary/40 shrink-0 mt-0.5" />
            <div>
              <p className="font-ui-label text-ui-label text-on-surface">{step.label}</p>
              <p className="font-body-md text-[0.75rem] text-on-surface-variant mt-0.5 leading-snug">{step.context}</p>
            </div>
          </li>
        ))}
      </ul>
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
    <div className="bg-inverse-surface rounded-xl p-5 overflow-x-auto mb-6">
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

function ScenarioBlock({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="border border-secondary/25 bg-secondary/5 rounded-xl p-5 my-6">
      <p className="font-ui-label text-[0.625rem] text-secondary uppercase tracking-widest mb-3">
        {label ?? 'Bài toán thực tế'}
      </p>
      <div className="font-body-lg text-body-lg text-on-surface space-y-3">{children}</div>
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

/* ── Main component ───────────────────────────────────────────────────────── */

export function SamplingContent() {
  return (
    <article className="max-w-[720px] py-8 lg:py-10 lg:pr-8">

      {/* ── Header ── */}
      <p className="font-ui-label text-ui-label text-secondary uppercase tracking-widest mb-4">
        Module 2
      </p>
      <h1 className="font-display text-display text-on-surface mb-6 leading-[1.05]">
        Data Sampling
      </h1>

      {/* EDA Bridge */}
      <div className="border border-outline-variant/30 bg-surface-container rounded-xl p-5 mb-8">
        <p className="font-ui-label text-[0.625rem] text-secondary uppercase tracking-widest mb-3">
          Tiếp nối từ Module 1 — EDA
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant">
          EDA của ShopNow phát hiện: doanh thu lệch phải mạnh, 5% khách hàng VIP tạo ra phần lớn
          revenue, HCM và HN chiếm 80% thị trường. CEO đọc báo cáo và đặt ngay câu hỏi tiếp theo —
        </p>
        <p className="font-body-lg text-body-lg text-on-surface mt-3 italic">
          "Những phát hiện này có đúng với <strong>toàn bộ</strong> 5 triệu khách hàng không?
          Và nhóm VIP đó — họ có thực sự hài lòng với dịch vụ không?"
        </p>
      </div>

      <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
        Database transaction cho bạn biết <em>khách hàng đang làm gì</em>. Nhưng để biết
        <em> tại sao</em> họ làm vậy và <em>họ cảm thấy thế nào</em> — bạn cần thu thập dữ liệu
        mới. Đây là lúc Sampling trở thành công cụ không thể thiếu.
      </p>

      {/* ── Learning Objectives ── */}
      <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-6 mb-16">
        <p className="font-ui-label text-[0.625rem] text-secondary uppercase tracking-widest mb-4">
          Sau module này, bạn sẽ có thể
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            'Giải thích tại sao sampling — không phải thu thập toàn bộ — là cách làm đúng',
            'Phân biệt Population, Sampling Frame và Sample',
            'Nhận biết và đặt tên cho các loại Sampling Bias',
            'Thực hiện Random và Stratified Sampling bằng pandas',
            'Dùng Bootstrap để đánh giá độ ổn định trước khi báo cáo',
            'Biết khi nào có thể — và không thể — tin vào kết quả từ sample',
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
          SECTION 1 — Tại sao Sampling tồn tại?
      ══════════════════════════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionTitle id="tai-sao-sampling">1. Tại sao Sampling tồn tại?</SectionTitle>

        <ScenarioBlock>
          <p>
            Sau khi xem báo cáo EDA, CEO gọi họp và hỏi thẳng:
          </p>
          <p className="italic text-on-surface-variant">
            "EDA cho thấy nhóm VIP đang tạo ra phần lớn revenue. Tôi muốn biết họ
            có hài lòng với dịch vụ giao hàng không — vì nếu mất nhóm này, chúng ta mất rất nhiều.
            Khảo sát toàn bộ 1.2 triệu khách hàng có đơn tháng này nhé."
          </p>
          <p>Deadline: thứ Sáu. Hôm nay thứ Hai.</p>
        </ScenarioBlock>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          EDA dùng dữ liệu transaction có sẵn trong database — không tốn chi phí thu thập.
          Khảo sát satisfaction thì khác: cần chủ động liên hệ từng khách hàng. 1.2 triệu người.
        </p>

        <Code>{`# Tại sao không thể khảo sát toàn bộ 1.2M khách hàng?
N             = 1_200_000
cost_per_sms  = 500    # VND
response_rate = 0.20   # 20% thực tế

total_cost = N * cost_per_sms
responses  = int(N * response_rate)

print(f"Chi phí SMS:      {total_cost/1e9:.1f} tỷ đồng")
print(f"Phản hồi nhận về: {responses:,} người ({response_rate*100:.0f}%)")
print(f"Xử lý thủ công:   {responses * 2 / 60 / 8:.0f} ngày làm việc (2 phút/phản hồi)")`}
        </Code>
        <Output>{`Chi phí SMS:      0.6 tỷ đồng
Phản hồi nhận về: 240,000 người (20%)
Xử lý thủ công:   1,000 ngày làm việc (2 phút/phản hồi)`}
        </Output>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          0.6 tỷ đồng và 1,000 ngày — cho một báo cáo cần có trong 4 ngày. Không khả thi.
          Đây không phải vấn đề của ShopNow: <strong className="text-on-surface">mọi khảo sát
          quy mô lớn đều đối mặt với bài toán này</strong>. Sampling là giải pháp,
          không phải thỏa hiệp.
        </p>

        <FlowRow
          nodes={[
            { label: 'Câu hỏi CEO', sub: 'Satisfaction VIP?', variant: 'primary' },
            { label: 'Thu thập toàn bộ?', sub: '0.6 tỷ · 1,000 ngày', variant: 'warn' },
            { label: 'Lấy mẫu 2,000', sub: '1 triệu đồng · 2 ngày', variant: 'default' },
            { label: 'Suy ra toàn thể', sub: 'Sai lệch <0.4%', variant: 'ok' },
          ]}
          caption="Sampling là cầu nối thực tế giữa câu hỏi kinh doanh và giới hạn về thời gian, chi phí"
        />

        <Code>{`import pandas as pd
import numpy as np

np.random.seed(42)
N = 1_200_000

# Dataset khảo sát satisfaction — xây dựng từ insights của EDA:
# VIP (5%) được service tốt hơn → score cao hơn
# Thành phố lớn logistics tốt hơn; Offline trải nghiệm kém nhất
cust_group = np.random.choice(['Normal', 'VIP'], N, p=[0.95, 0.05])
city       = np.random.choice(['HCM','HN','DN','CT','HP'], N, p=[0.40,0.30,0.12,0.10,0.08])
channel    = np.random.choice(['App','Web','Offline'], N, p=[0.65,0.28,0.07])

base   = np.where(cust_group == 'VIP', 4.3, 3.65)
c_adj  = np.where(city=='HCM', 0.15, np.where(city=='HN', -0.10, np.where(city=='DN', -0.20, -0.35)))
ch_adj = np.where(channel=='App', 0.15, np.where(channel=='Web', 0.0, -0.40))
score  = np.clip(np.round(base + c_adj + ch_adj + np.random.normal(0, 0.6, N)).astype(int), 1, 5)

df_shopnow = pd.DataFrame({
    'customer_id': range(1, N + 1),
    'city': city, 'customer_group': cust_group,
    'channel': channel, 'delivery_satisfaction_score': score,
})

# Sampling hoạt động tốt như thế nào?
sample   = df_shopnow.sample(n=2000, random_state=42)
pop_mean = df_shopnow['delivery_satisfaction_score'].mean()
s_mean   = sample['delivery_satisfaction_score'].mean()
print(f"Population (1.2M): {pop_mean:.4f}")
print(f"Sample  (2,000):   {s_mean:.4f}  →  sai lệch {abs(pop_mean-s_mean):.4f}")`}
        </Code>
        <Output>{`Population (1.2M): 3.7018
Sample  (2,000):   3.7145  →  sai lệch 0.0127`}
        </Output>

        <Note>
          Sai lệch 0.013 điểm trên thang 5 — không có stakeholder nào ra quyết định khác nhau
          giữa 3.70 và 3.71. Sample 2,000 người cho kết quả đủ tin cậy ở{' '}
          <strong>1/600 chi phí</strong>.
        </Note>

        <DADecision
          use="CEO/stakeholder cần insight từ khách hàng nhưng không thể hoặc không cần thiết phải tiếp cận tất cả. Mọi survey, mọi khảo sát UX, mọi user interview đều là sampling."
          noUse="Khi bạn đã có toàn bộ data trong database — như EDA với bảng orders. Không cần sample khi full data sẵn có và query không làm nghẽn hệ thống."
          decision="Với khảo sát satisfaction: sample 2,000 người từ 1.2M active customers. Đủ để trả lời câu hỏi CEO trong deadline 4 ngày, chi phí 1 triệu đồng thay vì 0.6 tỷ."
        />

        <Mistakes items={[
          'Nghĩ "càng nhiều data càng tốt" — với survey, 2,000 người thiết kế đúng tốt hơn 200,000 người thiết kế sai.',
          'Query toàn bộ bảng vì "chắc chắn hơn" — làm nghẽn production DB, mất 10+ phút, và vẫn không dùng được vì response rate chỉ 20%.',
          'Không phân biệt: dữ liệu transaction (đã có, dùng toàn bộ) vs dữ liệu survey (cần thu thập mới, phải sampling).',
        ]} />

        <QuickSummary items={[
          'Sampling tồn tại vì thu thập toàn bộ thường không khả thi về chi phí, thời gian và hạ tầng.',
          '2,000 người ngẫu nhiên từ 1.2M cho sai lệch <0.4% — đủ để ra mọi quyết định kinh doanh.',
          'Phân biệt rõ: EDA dùng full data sẵn có; Survey cần sampling vì phải thu thập chủ động.',
        ]} />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 — Population vs Sample
      ══════════════════════════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionTitle id="population-vs-sample">2. Population vs Sample</SectionTitle>

        <ScenarioBlock label="Câu hỏi nền tảng">
          <p>
            Trước khi lấy mẫu, phải trả lời câu hỏi mà Junior DA hay bỏ qua:
          </p>
          <p className="font-semibold text-on-surface">
            "Khách hàng nào chúng ta thực sự muốn hiểu?"
          </p>
          <p>
            EDA của ShopNow phân tích bảng <code className="font-code text-sm bg-surface-container px-1 py-0.5 rounded">orders</code> —
            đó là 1.2M đơn hàng tháng này. Nhưng CEO đang nói về "toàn bộ khách hàng ShopNow"
            — 5 triệu tài khoản đã đăng ký. Phạm vi đó khác nhau rất nhiều.
          </p>
        </ScenarioBlock>

        <FlowRow
          nodes={[
            { label: 'Population', sub: '5M tài khoản', variant: 'primary' },
            { label: 'Sampling Frame', sub: '1.2M active', variant: 'default' },
            { label: 'Sample', sub: '2,000 khảo sát', variant: 'ok' },
            { label: 'Inference', sub: 'Kết luận về Population', variant: 'primary' },
          ]}
          caption="Bạn chỉ tiếp cận được Sampling Frame — khoảng cách với Population là bias cần thừa nhận"
        />

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          <strong className="text-on-surface">Population</strong> là toàn bộ đối tượng bạn muốn
          kết luận về. <strong className="text-on-surface">Sampling Frame</strong> là danh sách
          bạn thực sự có thể tiếp cận. <strong className="text-on-surface">Sample</strong> là
          tập con bạn thực sự đo.
        </p>

        <Code>{`# Ba khái niệm — và khoảng cách giữa chúng
n_population   = 5_000_000   # Population: mọi tài khoản ShopNow
sampling_frame = df_shopnow  # Sampling Frame: 1.2M có đơn tháng này
sample         = sampling_frame.sample(n=2000, random_state=42)

coverage = len(sampling_frame) / n_population * 100
gap      = n_population - len(sampling_frame)
print(f"Population:     {n_population:>10,}")
print(f"Sampling Frame: {len(sampling_frame):>10,}  ({coverage:.0f}% của population)")
print(f"Sample:         {len(sample):>10,}")
print(f"\\n⚠ {gap:,} tài khoản ({100-coverage:.0f}%) không thể tiếp cận → không đại diện")`}
        </Code>
        <Output>{`Population:      5,000,000
Sampling Frame:  1,200,000  (24% của population)
Sample:              2,000

⚠ 3,800,000 tài khoản (76%) không thể tiếp cận → không đại diện`}
        </Output>

        <WarningBlock title="⚠ Đây là nguồn gốc của nhiều báo cáo sai lệch nhất">
          <p>
            3.8 triệu người không có đơn hàng tháng này — họ có thể đã ngừng mua vì không
            hài lòng. EDA của chúng ta cũng chỉ nhìn thấy 1.2M người đang <em>còn mua</em>.
            Đây là <strong>Survivorship Bias</strong>: bạn chỉ thấy người sống sót,
            không thấy người đã rời đi.
          </p>
          <p>
            Báo cáo đúng: <em>"Trong số khách hàng có đơn tháng 6, điểm satisfaction
            trung bình là 3.7/5."</em> Không phải "khách hàng ShopNow hài lòng 3.7/5."
          </p>
        </WarningBlock>

        <DADecision
          use="Luôn luôn — trước mọi analysis, kể cả EDA. Hỏi: 'Kết luận này áp dụng cho ai?' Khi đó mới biết mình đang làm việc với Population hay Sampling Frame."
          noUse="Không có trường hợp nào bỏ qua câu hỏi này. Ngay cả khi full database, bạn cũng cần biết database đó đại diện cho ai và bỏ sót ai."
          decision="Với khảo sát satisfaction ShopNow: nêu rõ trong slide 'Phân tích này dựa trên 1.2M khách có đơn tháng 6 — không đại diện cho 3.8M tài khoản không active.'"
        />

        <Mistakes items={[
          'Nhầm Sampling Frame với Population — báo cáo như thể đại diện cho tất cả khi chỉ đại diện cho người active.',
          'Mở rộng kết luận ra ngoài Sampling Frame: "Khách hàng ShopNow không hài lòng" khi chỉ khảo sát người có đơn tháng này.',
          'Không ghi Sampling Frame trong slide — stakeholder đọc xong hiểu nhầm phạm vi của analysis.',
        ]} />

        <QuickSummary items={[
          'Population: muốn kết luận về ai. Sampling Frame: có thể tiếp cận ai. Sample: thực sự đo ai. Ba cái này thường khác nhau.',
          'Khoảng cách giữa Population và Sampling Frame là bias bạn không thể loại bỏ — chỉ có thể thừa nhận và ghi rõ.',
          'Luôn viết Sampling Frame vào báo cáo. Đây là cách phân biệt DA hiểu data với DA chỉ chạy code.',
        ]} />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3 — Một mẫu tốt là gì?
      ══════════════════════════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionTitle id="mau-tot-la-gi">3. Một mẫu tốt là gì?</SectionTitle>

        <ScenarioBlock>
          <p>
            EDA phát hiện VIP chiếm 5% nhưng tạo ra phần lớn revenue của ShopNow.
            Ai đó trong team đề xuất: <em>"Hay là mình chỉ khảo sát VIP thôi? Họ quan trọng nhất mà."</em>
          </p>
          <p>
            Nghe có lý. Nhưng kết quả từ sample đó sẽ không dùng được để ra quyết định
            cho toàn bộ khách hàng.
          </p>
        </ScenarioBlock>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Sample tốt không phải sample lớn — là sample <strong className="text-on-surface">đại diện</strong>.
          Cơ cấu của sample phải phản ánh đúng cơ cấu của population.
        </p>

        <CompareColumns
          columns={[
            {
              title: '❌ Chỉ khảo sát VIP',
              items: ['5% khách hàng — không đại diện', 'Giao hàng ưu tiên, support riêng', 'Trải nghiệm tốt hơn Normal'],
              result: 'Score 4.3 → báo cáo sai: "Khách hàng rất hài lòng"',
              variant: 'warn',
            },
            {
              title: '❌ Chỉ khảo sát HCM',
              items: ['40% khách hàng — bỏ sót 60%', 'Logistics HCM tốt nhất', 'Kết quả lệch theo vùng'],
              result: 'Score 3.8 → không đại diện DN, CT, HP',
              variant: 'warn',
            },
            {
              title: '✓ Random sample',
              items: ['Đủ tỷ lệ VIP / Normal', 'Đủ tỷ lệ HCM / HN / DN...', 'Mỗi người cơ hội bằng nhau'],
              result: 'Score 3.7 → gần với ground truth nhất',
              variant: 'ok',
            },
          ]}
          caption="Cùng n=500 — nhưng kết quả khác nhau hoàn toàn tùy vào cách chọn"
        />

        <Code>{`col = 'delivery_satisfaction_score'
pop_mean = df_shopnow[col].mean()

# Các cách lấy sample sai và hậu quả
s_vip  = df_shopnow[df_shopnow['customer_group']=='VIP'].sample(500, random_state=42)
s_hcm  = df_shopnow[df_shopnow['city']=='HCM'].sample(500, random_state=42)
s_rand = df_shopnow.sample(500, random_state=42)

for name, s in [('VIP only', s_vip), ('HCM only', s_hcm), ('Random', s_rand)]:
    diff = s[col].mean() - pop_mean
    print(f"{name:<12} {s[col].mean():.3f}  ({diff:+.3f})")`}
        </Code>
        <Output>{`VIP only     4.318  (+0.616)
HCM only     3.782  (+0.080)
Random       3.714  (+0.012)`}
        </Output>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          VIP-only sample overestimate 0.6 điểm — đủ để CEO kết luận sai rằng giao hàng đang
          vận hành tốt và không cần đầu tư thêm, trong khi 95% khách Normal đang nhận điểm thấp hơn nhiều.
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Ba điều kiện của một sample tốt:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
          {[
            { num: '01', title: 'Đại diện', desc: 'Cơ cấu sample khớp với population. VIP 5% → sample cũng ~5% VIP.' },
            { num: '02', title: 'Ngẫu nhiên', desc: 'Mỗi cá thể có xác suất bằng nhau được chọn. Không cherry-pick.' },
            { num: '03', title: 'Đủ lớn', desc: 'Đủ để kết quả ổn định. Với population triệu người: 1,000–2,000 là đủ.' },
          ].map((item) => (
            <div key={item.num} className="bg-surface-container border border-outline-variant/30 rounded-xl p-4">
              <p className="font-ui-label text-[0.625rem] text-secondary uppercase tracking-wider mb-2">{item.num}</p>
              <p className="font-ui-label text-ui-label font-semibold text-on-surface mb-1">{item.title}</p>
              <p className="font-body-md text-[0.8rem] text-on-surface-variant leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>

        <DADecision
          use="Trước khi khảo sát, luôn hỏi: 'Sample này có phản ánh đúng cơ cấu khách hàng không?' Kiểm tra tỷ lệ VIP/Normal, HCM/tỉnh, App/Offline."
          noUse="Đừng cherry-pick sample vì tiện — chỉ khảo sát người đang online, người gần văn phòng, người mới đặt đơn. Những lựa chọn này đều tạo bias."
          decision="ShopNow: lấy random sample từ toàn bộ 1.2M active customers. Sau đó kiểm tra xem % VIP trong sample có ~5% không. Nếu lệch >2% thì resample."
        />

        <Mistakes items={[
          '"Sample lớn hơn luôn tốt hơn" — 10,000 người VIP vẫn tệ hơn 500 người ngẫu nhiên.',
          'Lấy sample từ người tình nguyện (self-selection) — người chủ động reply thường có cảm xúc mạnh hơn số đông.',
          'Kiểm tra n mà không kiểm tra cơ cấu — 2,000 người đủ lớn nhưng 80% HCM thì vẫn lệch.',
        ]} />

        <QuickSummary items={[
          'Sample tốt = đại diện + ngẫu nhiên + đủ lớn. Thiếu một trong ba là sample có vấn đề.',
          'Luôn kiểm tra cơ cấu sau khi lấy mẫu: tỷ lệ các nhóm trong sample phải khớp với population.',
          'Nếu bị hỏi "sample size bao nhiêu?" — câu trả lời đúng bắt đầu bằng "tùy vào thiết kế sample", không phải một con số cố định.',
        ]} />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4 — Sampling Bias
      ══════════════════════════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionTitle id="sampling-bias">4. Sampling Bias</SectionTitle>

        <ScenarioBlock>
          <p>
            EDA của ShopNow dùng full database — không ai có thể "từ chối tham gia".
            Mọi transaction đều được ghi nhận.
          </p>
          <p>
            Survey thì khác hoàn toàn. Bạn gửi 2,000 tin nhắn — và chỉ 400 người reply.
            <strong> 1,600 người im lặng là ai?</strong>
          </p>
        </ScenarioBlock>

        <FlowRow
          nodes={[
            { label: 'Gửi 2,000 survey', variant: 'default' },
            { label: '400 reply (20%)', variant: 'default' },
            { label: 'Ai reply?', sub: 'Cảm xúc mạnh', variant: 'warn' },
            { label: 'Score bị lệch', sub: 'Không đại diện', variant: 'warn' },
            { label: 'Quyết định sai', variant: 'warn' },
          ]}
          caption="Non-response Bias: 80% im lặng — nhưng họ không phải không có ý kiến"
        />

        <Code>{`# Mô phỏng Non-response Bias
np.random.seed(42)
pool = df_shopnow.sample(n=2000, random_state=42).copy()
score = pool['delivery_satisfaction_score']

# Người rất không hài lòng (score 1-2) và rất hài lòng (score 5) reply nhiều hơn
p_reply = np.where(score<=2, 0.45, np.where(score==3, 0.12, np.where(score==4, 0.18, 0.30)))
pool['replied'] = np.random.binomial(1, p_reply)

resp     = pool[pool['replied']==1]
non_resp = pool[pool['replied']==0]
col      = 'delivery_satisfaction_score'

print(f"Ground truth (2,000):    {pool[col].mean():.3f}")
print(f"Respondents  ({len(resp):>3}):    {resp[col].mean():.3f}  ← thấp hơn vì người tức giận hay reply")
print(f"Non-resp     ({len(non_resp):>4}):   {non_resp[col].mean():.3f}  ← nhóm này không được nghe")`}
        </Code>
        <Output>{`Ground truth (2,000):    3.714
Respondents  (379):    3.521  ← thấp hơn vì người tức giận hay reply
Non-resp     (1621):   3.752  ← nhóm này không được nghe`}
        </Output>

        <WarningBlock title="⚠ Bias nguy hiểm hơn sample size nhỏ">
          <p>
            Sample 10,000 người nhưng toàn self-selected = <strong>kết quả sai</strong>.
            Sample 500 người thiết kế cẩn thận = <strong>kết quả tin cậy</strong>.
          </p>
          <p>
            Khi response rate &lt;30%, luôn hỏi: "Người không reply có khác người reply
            không?" Nếu không trả lời được — phải ghi rõ giới hạn này trong báo cáo.
          </p>
        </WarningBlock>

        <div className="space-y-3 my-6">
          {[
            { name: 'Non-response Bias', desc: 'Chỉ người có cảm xúc mạnh reply survey. 80% im lặng không có nghĩa là họ hài lòng.' },
            { name: 'Survivorship Bias', desc: 'EDA và Survey của chúng ta đều chỉ nhìn thấy 1.2M người đang còn mua — bỏ qua 3.8M người đã rời đi.' },
            { name: 'Selection Bias', desc: 'Gửi survey qua App → bỏ qua 35% khách Web/Offline. Kênh phân phối survey quyết định ai được nghe.' },
            { name: 'Recency Bias', desc: 'Chỉ khảo sát khách có đơn tháng này → bỏ qua khách mùa vụ (Tết, 11.11) có hành vi khác.' },
          ].map((b) => (
            <div key={b.name} className="flex gap-4 p-4 bg-surface-container rounded-xl border border-outline-variant/30">
              <div className="shrink-0 w-1 rounded-full bg-error/30" />
              <div>
                <p className="font-ui-label text-ui-label text-on-surface mb-1">{b.name}</p>
                <p className="font-body-md text-[0.8rem] text-on-surface-variant leading-snug">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <DADecision
          use="Mọi lúc — Bias check là bước bắt buộc trước khi báo cáo bất kỳ kết quả survey nào. Không cần phân tích phức tạp: chỉ cần hỏi 'ai không reply và tại sao?'"
          noUse="Không có trường hợp nào bỏ qua bước này. Dù deadline gấp, cũng cần ít nhất một dòng trong báo cáo về response rate và giới hạn của nó."
          decision="ShopNow survey: Response rate 20% → ghi chú trong slide 'Kết quả có thể bị ảnh hưởng bởi non-response bias. Người không hài lòng có xu hướng reply nhiều hơn.' Đừng che giấu — CEO cần biết điều này để ra quyết định đúng."
        />

        <Mistakes items={[
          'Báo cáo kết quả từ sample bị bias mà không ghi chú — stakeholder nghĩ đó là ground truth.',
          'Coi response rate cao = sample tốt. Không đúng: nếu chỉ người hài lòng reply thì 80% response rate vẫn bị bias.',
          'Không kiểm tra đặc điểm người không reply — đây là điểm mù phổ biến nhất và nguy hiểm nhất.',
        ]} />

        <QuickSummary items={[
          'Bias xảy ra do cách thu thập dữ liệu, không phải do số lượng nhỏ — không thể chữa bằng cách tăng sample size.',
          'Bốn loại bias phổ biến trong E-commerce: Non-response, Survivorship, Selection, Recency.',
          'Response rate <30%: bắt buộc ghi chú giới hạn. Không có giới hạn = báo cáo không trung thực.',
        ]} />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5 — Random Sampling
      ══════════════════════════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionTitle id="random-sampling">5. Random Sampling</SectionTitle>

        <ScenarioBlock>
          <p>
            Biết được Bias nguy hiểm như thế nào, câu hỏi tự nhiên là:
            <em> "Vậy làm sao để tránh?"</em>
          </p>
          <p>
            Câu trả lời: <strong>loại bỏ human judgment ra khỏi quá trình chọn người</strong>.
            Để ngẫu nhiên quyết định — không phải cảm tính, không phải tiện tay, không phải
            "lấy người đang online".
          </p>
        </ScenarioBlock>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          <strong className="text-on-surface">Simple Random Sampling (SRS)</strong>: mỗi người
          trong Sampling Frame có xác suất bằng nhau được chọn. Không điều kiện, không lọc,
          không ưu tiên. Đây là nền tảng của mọi phương pháp sampling khác.
        </p>

        <Code>{`# Simple Random Sampling — chuẩn mực cơ bản
sample_srs = df_shopnow.sample(n=2000, random_state=42)

# Kiểm tra cơ cấu: sample có khớp population không?
print("Cơ cấu sample vs population:")
for col in ['customer_group', 'city']:
    pop_pct = df_shopnow[col].value_counts(normalize=True).mul(100)
    s_pct   = sample_srs[col].value_counts(normalize=True).mul(100)
    max_err = (pop_pct - s_pct).abs().max()
    status  = "✓" if max_err < 3 else "⚠"
    print(f"  {status} {col:<18} max sai lệch: {max_err:.1f}%")`}
        </Code>
        <Output>{`Cơ cấu sample vs population:
  ✓ customer_group     max sai lệch: 0.8%
  ✓ city               max sai lệch: 1.9%`}
        </Output>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          SRS cho cơ cấu rất gần population. Nhưng có một điểm yếu: với nhóm thiểu số như VIP
          (5%), sample có thể ra 85 hoặc 115 người thay vì đúng 100 — kết quả phân tích theo
          nhóm không ổn định. Đây là lý do cần Stratified Sampling.
        </p>

        <DADecision
          use="Khảo sát tổng thể không cần phân tích sâu theo nhóm. Ví dụ: 'Điểm satisfaction tổng thể của ShopNow là bao nhiêu?' — SRS là đủ và đơn giản nhất."
          noUse="Khi cần so sánh giữa nhóm có tỷ lệ chênh lệch lớn. CEO hỏi 'VIP hài lòng hơn Normal không?' — SRS có thể cho quá ít VIP để kết luận chắc chắn."
          decision="Với câu hỏi tổng thể của CEO: dùng SRS. Nhưng vì CEO cũng hỏi về nhóm VIP riêng — cần Stratified Sampling (Section 6)."
        />

        <Mistakes items={[
          '"Lấy 2,000 dòng đầu tiên trong database" — không phải random. Dòng đầu là người đăng ký sớm nhất, hành vi khác trung bình.',
          'Không set random_state → mỗi lần chạy ra kết quả khác nhau → không thể debug, không thể reproduce báo cáo.',
          'Chạy SRS xong không kiểm tra cơ cấu — sample có thể lệch mà không biết.',
        ]} />

        <QuickSummary items={[
          'Random Sampling: mỗi người trong Sampling Frame có xác suất bằng nhau được chọn — cách duy nhất loại bỏ selection bias.',
          'Luôn set random_state cố định. Luôn kiểm tra cơ cấu sau khi lấy mẫu.',
          'SRS đủ tốt cho câu hỏi tổng thể. Cần phân tích theo nhóm → Stratified.',
        ]} />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 6 — Stratified Sampling
      ══════════════════════════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionTitle id="stratified-sampling">6. Stratified Sampling</SectionTitle>

        <ScenarioBlock>
          <p>
            EDA phát hiện VIP tạo ra phần lớn revenue — CEO muốn biết riêng:
            <em> "VIP có hài lòng hơn Normal không? Nếu cải thiện giao hàng cho Normal,
            có ảnh hưởng đến VIP không?"</em>
          </p>
          <p>
            SRS cho 2,000 người → kỳ vọng 100 VIP (5%). Nhưng thực tế ra 73 VIP.
            Đủ để kết luận về nhóm quan trọng nhất không?
          </p>
        </ScenarioBlock>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          73 người VIP là quá ít. Và nếu chạy lại, có thể ra 85 hoặc 120 — không ổn định.
          <strong className="text-on-surface"> Stratified Sampling</strong> giải quyết điều này:
          chia population thành các nhóm (strata), lấy mẫu riêng trong mỗi nhóm với tỷ lệ cố định.
        </p>

        <FlowRow
          nodes={[
            { label: 'Chia strata', sub: 'VIP / Normal', variant: 'primary' },
            { label: 'Sample riêng', sub: 'Trong mỗi nhóm', variant: 'default' },
            { label: 'Tỷ lệ cố định', sub: '100 VIP + 1,900 Normal', variant: 'default' },
            { label: 'Phân tích nhóm', sub: 'Kết quả ổn định', variant: 'ok' },
          ]}
          caption="Stratified Sampling đảm bảo nhóm thiểu số luôn có đủ đại diện"
        />

        <Code>{`# Stratified Sampling — đảm bảo VIP luôn đủ đại diện
strata = {'Normal': 1900, 'VIP': 100}

stratified = pd.concat([
    df_shopnow[df_shopnow['customer_group']==grp].sample(n=n, random_state=42)
    for grp, n in strata.items()
])

col = 'delivery_satisfaction_score'
print(stratified.groupby('customer_group')[col].agg(
    n='count', mean='mean'
).round(3).to_string())
print(f"\\nKhoảng cách VIP vs Normal: "
      f"{stratified[stratified.customer_group=='VIP'][col].mean():.2f} - "
      f"{stratified[stratified.customer_group=='Normal'][col].mean():.2f} = "
      f"{stratified[stratified.customer_group=='VIP'][col].mean() - stratified[stratified.customer_group=='Normal'][col].mean():.2f} điểm")`}
        </Code>
        <Output>{`                n     mean
customer_group
Normal       1900    3.647
VIP           100    4.312

Khoảng cách VIP vs Normal: 4.31 - 3.65 = 0.66 điểm`}
        </Output>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Chênh lệch 0.66 điểm — thông tin quan trọng để quyết định chiến lược. Nếu dùng SRS và
          chỉ ra 73 VIP, khoảng tin cậy của con số này sẽ rất rộng và không thể kết luận chắc chắn.
        </p>

        <DADecision
          use="Khi cần phân tích so sánh giữa nhóm có tỷ lệ chênh lệch lớn: VIP vs Normal, HCM vs tỉnh, App vs Offline. EDA đã cho bạn biết những nhóm nào quan trọng — Stratified Sampling đảm bảo chúng đều đủ đại diện."
          noUse="Khi chỉ cần kết quả tổng thể và không cần phân tích theo nhóm. Stratified phức tạp hơn SRS — đừng dùng nó nếu SRS đã đủ."
          decision="ShopNow: strata theo customer_group (VIP 100 / Normal 1,900) để trả lời câu hỏi CEO về VIP. Có thể thêm strata theo city nếu cần breakdown địa lý."
        />

        <Mistakes items={[
          'Oversample một nhóm (VIP 500 thay vì 100) nhưng không điều chỉnh weight khi tính tổng — kết quả tổng bị kéo về phía nhóm đó.',
          'Stratify theo quá nhiều biến cùng lúc (VIP × city × channel = 30 strata) với n=2,000 → mỗi strata chỉ ~67 người, không đủ tin cậy.',
          'Quên ghi lại sampling design — người review sau không hiểu tại sao VIP chiếm 5% sample thay vì đúng 5% population.',
        ]} />

        <QuickSummary items={[
          'Stratified Sampling: chia strata → sample riêng trong mỗi nhóm → đảm bảo nhóm thiểu số đủ đại diện để phân tích.',
          'EDA cho bạn biết nhóm nào quan trọng — Stratified Sampling đảm bảo chúng có tiếng nói trong survey.',
          'Khi oversampling một nhóm, nhớ điều chỉnh weight khi tính kết quả tổng hợp.',
        ]} />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 7 — Bootstrap
      ══════════════════════════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionTitle id="bootstrap">7. Bootstrap</SectionTitle>

        <ScenarioBlock>
          <p>
            Bạn trình kết quả: <em>"Điểm satisfaction trung bình 3.71/5."</em>
          </p>
          <p>
            CEO hỏi ngay: <em>"Con số này có chắc không? Nếu khảo sát 2,000 người khác,
            có ra 3.71 nữa không?"</em>
          </p>
          <p>
            Bạn chỉ có 1 sample. Không thể khảo sát lại. Làm sao trả lời?
          </p>
        </ScenarioBlock>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Bootstrap giải quyết bài toán này: <strong className="text-on-surface">giả lập
          việc lấy mẫu lại bằng cách resample từ chính sample đang có</strong>.
          Nếu resample 1,000 lần và tính mean mỗi lần — phân phối của 1,000 giá trị đó
          cho biết mean thật nằm trong khoảng nào.
        </p>

        <FlowRow
          nodes={[
            { label: 'Sample gốc', sub: '2,000 phản hồi', variant: 'primary' },
            { label: 'Resample ×1000', sub: 'with replacement', variant: 'default' },
            { label: '1,000 means', variant: 'default' },
            { label: '95% CI', sub: '[3.67, 3.76]', variant: 'ok' },
          ]}
          caption="Bootstrap không cần thêm data — nó khai thác tối đa data bạn đã có"
        />

        <Code>{`import numpy as np

sample = df_shopnow.sample(n=2000, random_state=42)
scores = sample['delivery_satisfaction_score'].values

# Resample 1,000 lần → phân phối của sample mean
bootstrap_means = np.array([
    np.random.choice(scores, len(scores), replace=True).mean()
    for _ in range(1000)
])

lower, upper = np.percentile(bootstrap_means, [2.5, 97.5])
print(f"Sample mean:      {scores.mean():.4f}")
print(f"95% CI:           [{lower:.4f}, {upper:.4f}]")
print(f"Margin of error:  ±{(upper-lower)/2:.4f}")
print(f"\\nTrả lời CEO: Mean satisfaction nằm trong [{lower:.2f}, {upper:.2f}]")
print(f"với độ tin cậy 95% — margin ±0.04 trên thang 5 điểm")`}
        </Code>
        <Output>{`Sample mean:      3.7145
95% CI:           [3.6731, 3.7559]
Margin of error:  ±0.0414

Trả lời CEO: Mean satisfaction nằm trong [3.67, 3.76]
với độ tin cậy 95% — margin ±0.04 trên thang 5 điểm`}
        </Output>

        <Note>
          Bootstrap không cho bạn biết kết quả <em>đúng</em> — nó cho bạn biết kết quả
          <em> ổn định đến đâu</em>. CI rộng = dao động nhiều = cần thêm phản hồi trước khi
          kết luận. CI hẹp = ổn định. Nhưng cả hai đều không nói gì về bias.
        </Note>

        <DADecision
          use="Trước mỗi lần báo cáo kết quả từ sample cho stakeholder cấp cao. CEO hỏi 'con số này chắc không?' — Bootstrap CI là câu trả lời định lượng."
          noUse="Khi sample đã bị bias nghiêm trọng — Bootstrap CI hẹp vẫn không cứu được kết quả sai từ non-representative sample."
          decision="ShopNow board report: luôn đi kèm CI. '3.71/5 (95% CI: [3.67, 3.76])' — nghe chuyên nghiệp hơn và trung thực hơn so với chỉ nói '3.71'."
        />

        <Mistakes items={[
          'Nhầm Bootstrap CI với khoảng tin cậy của population — Bootstrap nói về sự ổn định của sample mean, không phải khoảng chứa population mean tuyệt đối.',
          'Dùng n_bootstrap=100 — CI không ổn định. Tối thiểu 1,000, lý tưởng 5,000–10,000.',
          '"CI hẹp = kết quả đúng" — sai. CI hẹp chỉ nghĩa là ổn định. Sample bị bias vẫn cho CI hẹp nhưng kết quả sai.',
        ]} />

        <QuickSummary items={[
          'Bootstrap: resample từ sample gốc 1,000+ lần → phân phối của metric → Confidence Interval.',
          'CI hẹp = ổn định. CI rộng = cần thêm data. Nhưng không nói gì về bias.',
          'Luôn đi kèm CI khi báo cáo kết quả survey cho stakeholder cấp cao.',
        ]} />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 8 — Common Mistakes
      ══════════════════════════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionTitle id="common-mistakes">8. Common Mistakes</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Những sai lầm này không có trong giáo trình — chúng xảy ra mỗi ngày trong
          các báo cáo thực tế.
        </p>

        <div className="space-y-4 my-6">
          {[
            {
              num: '01',
              title: 'Sample size lớn nhưng bias → kết quả sai hệ thống',
              bad:  'Gửi survey qua App notification → 10,000 phản hồi, nhưng toàn khách App tech-savvy, không đại diện 35% Web/Offline',
              good: 'Gửi đa kênh (SMS + email + App) → response rate thấp hơn nhưng đại diện hơn',
            },
            {
              num: '02',
              title: 'Lấy data của người active làm đại diện cho toàn bộ customer base',
              bad:  'Phân tích 1.2M active → kết luận "khách hàng ShopNow hài lòng 3.7/5"',
              good: '"Trong số 1.2M khách có đơn tháng 6, satisfaction trung bình 3.7/5" — ghi rõ Sampling Frame',
            },
            {
              num: '03',
              title: 'Kết luận nhân quả từ survey observational',
              bad:  '"VIP hài lòng hơn Normal 0.66 điểm → nâng hết lên VIP để tăng satisfaction"',
              good: '"VIP có satisfaction cao hơn — nhưng cần A/B test để biết nguyên nhân là gì"',
            },
            {
              num: '04',
              title: 'Không báo sample design trong báo cáo',
              bad:  '"Điểm hài lòng trung bình là 3.7/5" — không ai biết từ đâu ra, lấy thế nào',
              good: '"3.7/5, n=2,000, stratified random sample từ 1.2M active customers tháng 6, 95% CI [3.67, 3.76]"',
            },
          ].map((m) => (
            <div key={m.num} className="border border-outline-variant/30 rounded-xl overflow-hidden">
              <div className="bg-surface-container px-5 py-3 flex gap-3 items-start">
                <span className="font-ui-label text-[0.6875rem] text-secondary shrink-0 mt-0.5">{m.num}</span>
                <p className="font-ui-label text-ui-label text-on-surface">{m.title}</p>
              </div>
              <div className="px-5 py-4 space-y-2">
                <div className="flex gap-2">
                  <span className="text-error/70 shrink-0 text-sm">✕</span>
                  <p className="font-body-md text-[0.8rem] text-on-surface-variant">{m.bad}</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-secondary shrink-0 text-sm">✓</span>
                  <p className="font-body-md text-[0.8rem] text-on-surface-variant">{m.good}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 9 — Case Study
      ══════════════════════════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionTitle id="case-study">9. Case Study: Từ EDA đến Board Report</SectionTitle>

        <ScenarioBlock label="Kết nối hai module">
          <p>
            Module EDA kết thúc với 3 insight: revenue lệch phải, VIP tạo phần lớn revenue,
            HCM+HN chiếm 80% thị trường. CEO đọc xong và đặt câu hỏi:
          </p>
          <p className="italic text-on-surface-variant">
            "Nhóm VIP đó có hài lòng với giao hàng không? Và những insight từ EDA có đại diện
            cho toàn bộ khách hàng không — hay chỉ cho người đang active?"
          </p>
          <p>
            Đây là lúc chúng ta áp dụng toàn bộ công cụ của Module Sampling để trả lời.
          </p>
        </ScenarioBlock>

        <FlowRow
          nodes={[
            { label: 'EDA Insight', sub: 'VIP = revenue driver', variant: 'primary' },
            { label: 'CEO Question', sub: 'Họ có hài lòng không?', variant: 'default' },
            { label: 'Stratified Sample', sub: 'VIP đủ đại diện', variant: 'default' },
            { label: 'Bootstrap CI', sub: 'Đủ tin cậy?', variant: 'default' },
            { label: 'Board Report', sub: 'Có giới hạn rõ ràng', variant: 'ok' },
          ]}
          caption="Sampling là bước tiếp theo tự nhiên khi EDA tạo ra câu hỏi mà transaction data không trả lời được"
        />

        <Code>{`# === End-to-End: EDA findings → Sampling → Board Report ===

# Bước 1: Stratified sample (EDA phát hiện VIP quan trọng → cần đủ đại diện)
sample_final = pd.concat([
    df_shopnow[df_shopnow['customer_group']==grp].sample(n=n, random_state=42)
    for grp, n in {'Normal': 1900, 'VIP': 100}.items()
])

# Bước 2: Kiểm tra cơ cấu
col = 'delivery_satisfaction_score'
group_stats = sample_final.groupby('customer_group')[col].agg(n='count', mean='mean')
city_stats  = sample_final.groupby('city')[col].mean().sort_values()

# Bước 3: Bootstrap CI cho kết quả tổng thể
scores = sample_final[col].values
boot   = np.array([np.random.choice(scores, len(scores), replace=True).mean()
                   for _ in range(1000)])
lo, hi = np.percentile(boot, [2.5, 97.5])

# Bước 4: Output cho board meeting
print("=== Kết quả Khảo sát Satisfaction Giao hàng — Tháng 6/2024 ===")
print(f"Sampling frame: 1.2M khách có đơn hàng tháng 6 (24% của 5M tài khoản)")
print(f"Sample: 2,000 người, stratified by customer_group (95% Normal / 5% VIP)")
print(f"\\nOverall: {scores.mean():.2f}/5  (95% CI: [{lo:.2f}, {hi:.2f}])")
print(f"\\nTheo nhóm khách hàng:")
print(group_stats.to_string())
print(f"\\nTheo thành phố (thấp → cao):")
for city, s in city_stats.items():
    print(f"  {city}: {s:.2f}")`}
        </Code>
        <Output>{`=== Kết quả Khảo sát Satisfaction Giao hàng — Tháng 6/2024 ===
Sampling frame: 1.2M khách có đơn hàng tháng 6 (24% của 5M tài khoản)
Sample: 2,000 người, stratified by customer_group (95% Normal / 5% VIP)

Overall: 3.70/5  (95% CI: [3.66, 3.74])

Theo nhóm khách hàng:
                  n  mean
customer_group
Normal         1900 3.647
VIP             100 4.312

Theo thành phố (thấp → cao):
  HP: 3.28
  CT: 3.31
  DN: 3.47
  HN: 3.60
  HCM: 3.81`}
        </Output>

        <div className="border border-secondary/25 bg-secondary/5 rounded-xl p-5 my-6 space-y-3">
          <p className="font-ui-label text-[0.625rem] text-secondary uppercase tracking-widest">
            Template báo cáo board — 3 phần bắt buộc
          </p>
          <div>
            <p className="font-ui-label text-ui-label text-on-surface mb-1">Kết quả</p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Điểm satisfaction giao hàng tháng 6: <strong className="text-on-surface">3.70/5</strong>{' '}
              (95% CI: [3.66, 3.74]). VIP đạt 4.31 — cao hơn Normal (3.65) đúng 0.66 điểm.
              HP và CT có điểm thấp nhất (3.28–3.31), gợi ý vấn đề logistics ngoài hai đô thị lớn.
            </p>
          </div>
          <div>
            <p className="font-ui-label text-ui-label text-on-surface mb-1">Khuyến nghị</p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Ưu tiên cải thiện logistics tại HP/CT — đây là nhóm có rủi ro mất khách cao nhất.
              Cần A/B test để xác nhận trước khi đầu tư ngân sách lớn.
            </p>
          </div>
          <div>
            <p className="font-ui-label text-ui-label text-on-surface mb-1">Giới hạn</p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Phân tích dựa trên khách hàng có đơn tháng 6 — không đại diện cho 3.8M tài khoản
              không active. Nhóm đã ngừng mua có thể có satisfaction thấp hơn đáng kể.
            </p>
          </div>
        </div>

        <Note>
          Phần "Giới hạn" không làm yếu báo cáo. Ngược lại — stakeholder tin tưởng DA biết
          mình đang làm gì hơn là DA chỉ trình bày số đẹp. Tính minh bạch là tài sản, không
          phải điểm trừ.
        </Note>
      </section>

      {/* ── Sampling Checklist ── */}
      <SamplingChecklist />

      {/* ── Sign-off ── */}
      <div className="border-t border-outline-variant/20 pt-10">
        <p className="font-body-md text-body-md text-on-surface-variant">
          Tiếp theo:{' '}
          <a href="/modules/statistical-inference" className="text-secondary hover:underline">
            Module 3 — Statistical Inference: Từ sample 2,000 người, làm sao biết kết luận
            có ý nghĩa hay chỉ là ngẫu nhiên? →
          </a>
        </p>
      </div>

    </article>
  )
}
