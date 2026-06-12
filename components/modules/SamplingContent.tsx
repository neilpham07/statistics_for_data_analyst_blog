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

/* ── Sampling Checklist ───────────────────────────────────────────────────── */

function SamplingChecklist() {
  const items = [
    { label: 'Population đã xác định chưa?', context: '"Chúng ta muốn kết luận về ai?" — phải trả lời câu này trước khi viết bất kỳ dòng code nào.' },
    { label: 'Sampling Frame là gì?', context: 'Ai thực sự có thể tiếp cận? Khoảng cách giữa Population và Frame là bias bạn không thể xóa — chỉ có thể thừa nhận.' },
    { label: 'Có bị thiếu nhóm khách hàng quan trọng không?', context: 'Offline customers, inactive accounts, khách mùa vụ — ai bị bỏ sót và điều đó ảnh hưởng gì đến kết luận?' },
    { label: 'Có Sampling Bias không?', context: 'Response rate bao nhiêu? Ai không reply? Kênh phân phối survey có tạo selection bias không?' },
    { label: 'Có cần Stratified Sampling không?', context: 'Có nhóm thiểu số quan trọng (VIP 5%) cần phân tích riêng không? Nếu có: Stratified, không phải SRS.' },
    { label: 'Sample có đại diện không?', context: 'So sánh cơ cấu sample vs population theo customer_group, city, channel — sai lệch >5% từng nhóm là warning.' },
    { label: 'Đã ghi rõ limitation của sample chưa?', context: '"Phân tích này dựa trên [n] khách hàng [điều kiện]. Không đại diện cho [nhóm bị bỏ sót]." — Câu này bắt buộc trong mọi báo cáo.' },
  ]
  return (
    <div className="border border-secondary/30 rounded-xl p-6 my-8">
      <p className="font-ui-label text-[0.625rem] text-secondary uppercase tracking-widest mb-1">
        Sampling Checklist — Dành cho Junior Data Analyst
      </p>
      <p className="font-body-md text-[0.8rem] text-on-surface-variant mb-6">
        Khi nhận yêu cầu khảo sát khách hàng — đi qua từng mục này trước khi bắt đầu.
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

      <div className="border border-outline-variant/30 bg-surface-container rounded-xl p-5 mb-8">
        <p className="font-ui-label text-[0.625rem] text-secondary uppercase tracking-widest mb-3">
          <a href="/modules/eda" className="text-secondary hover:underline">Tiếp nối từ Module 1 — EDA</a>
        </p>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Module EDA kết thúc với 3 insight: revenue lệch phải mạnh, 5% khách VIP tạo phần lớn
          doanh thu, HCM và HN chiếm 80% thị trường. Tám phút sau khi bạn gửi báo cáo —
        </p>
        <p className="font-body-lg text-body-lg text-on-surface mt-3 italic">
          "Good work. Nhưng những con số này có thật sự đại diện cho toàn bộ khách hàng không?
          Chúng ta đang nói về 5 triệu người."
        </p>
        <p className="font-body-md text-[0.8rem] text-on-surface-variant/60 mt-2">— CEO, Slack, 08:55 sáng thứ Ba</p>
      </div>

      <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
        Câu hỏi đó dẫn đến một tuần làm việc mà bạn sẽ dùng lại nhiều lần trong sự nghiệp.
        Đây là module về cách một Data Analyst suy nghĩ khi không thể đo toàn bộ.
      </p>

      {/* ── Learning Objectives ── */}
      <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-6 mb-16">
        <p className="font-ui-label text-[0.625rem] text-secondary uppercase tracking-widest mb-4">
          Sau module này, bạn sẽ có thể
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            'Giải thích tại sao sampling là cách làm đúng — không phải lối tắt',
            'Phân biệt được Population, Sampling Frame và Sample trước khi viết query',
            'Nhận ra Sampling Bias trước khi nó phá hỏng báo cáo của bạn',
            'Chọn đúng giữa Random và Stratified Sampling trong từng tình huống',
            'Dùng Bootstrap để trả lời "kết quả này có ổn định không?"',
            'Viết phần Limitation trong báo cáo một cách trung thực và chuyên nghiệp',
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

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Bạn đọc lại tin nhắn CEO. <em>"5 triệu người."</em> Ông ấy muốn biết những insight từ
          EDA có đại diện cho toàn bộ không — và muốn hiểu sâu hơn về satisfaction của khách hàng
          với giao hàng.
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Bước đầu tiên bạn làm: kiểm tra scale thực sự của bài toán.
        </p>

        <Code>{`-- Data Warehouse, thứ Ba 09:02
SELECT COUNT(DISTINCT customer_id) FROM orders;
-- 5,143,218

SELECT COUNT(DISTINCT customer_id)
FROM orders
WHERE order_date >= DATE_TRUNC('month', CURRENT_DATE);
-- 1,247,891  (active trong tháng này)`}
        </Code>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          1.2 triệu khách hàng có đơn hàng tháng này. CEO muốn biết họ cảm thấy thế nào về
          giao hàng. Suy nghĩ đầu tiên của bạn: <em>khảo sát tất cả đi</em>.
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Rồi bạn tính nhanh trên giấy:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
          {[
            { label: 'Chi phí gửi SMS', value: '1.2M × 500₫', result: '= 600 triệu đồng' },
            { label: 'Response rate thực tế', value: '~20%', result: '→ 240,000 phản hồi' },
            { label: 'Xử lý phản hồi', value: '240K × 2 phút', result: '= 1,000 ngày/người' },
          ].map((item) => (
            <div key={item.label} className="bg-surface-container border border-outline-variant/30 rounded-xl p-4 text-center">
              <p className="font-body-md text-[0.75rem] text-on-surface-variant mb-1">{item.label}</p>
              <p className="font-ui-label text-ui-label text-on-surface">{item.value}</p>
              <p className="font-body-md text-[0.8rem] text-secondary mt-1">{item.result}</p>
            </div>
          ))}
        </div>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          600 triệu đồng và 1,000 ngày làm việc nếu một người xử lý một mình — cho một báo cáo
          cần có vào thứ Sáu. Không ai phê duyệt ngân sách đó. Không ai có thời gian đó.
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-2">
          Không phải vì nhà thống kê thích lý thuyết. Mà vì thực tế <strong className="text-on-surface">
          không bao giờ cho bạn đủ thời gian và tiền để đo tất cả</strong>.
          Câu hỏi không phải "survey toàn bộ hay không?" — mà là
          <strong className="text-on-surface"> "survey bao nhiêu người để kết quả đủ tin cậy?"</strong>
        </p>

        <FlowRow
          nodes={[
            { label: 'Câu hỏi CEO', sub: '1.2M customers', variant: 'primary' },
            { label: 'Survey tất cả?', sub: '600M₫ · 4 ngày', variant: 'warn' },
            { label: 'Chọn mẫu đại diện', sub: '~2,000 người', variant: 'default' },
            { label: 'Tính toán', sub: 'Mean, CI, breakdown', variant: 'default' },
            { label: 'Kết luận đủ tin cậy', sub: 'Sai lệch <0.5%', variant: 'ok' },
          ]}
          caption="Sampling không phải thỏa hiệp — đó là cách làm đúng trong thực tế"
        />

        <Note>
          EDA dùng data đã có sẵn trong database — không tốn chi phí thu thập.
          Survey satisfaction thì phải đi hỏi từng người. Đó là lý do hai module dùng hai cách tiếp cận khác nhau.
        </Note>

        <DADecision
          use="Mọi lúc cần thu thập dữ liệu chủ động (survey, user interview, usability test) mà không thể tiếp cận toàn bộ đối tượng. Database transaction thì không cần — full data đã có sẵn."
          noUse="Khi bạn đã có full data trong database và query không ảnh hưởng production. Đừng sample dữ liệu đã có sẵn chỉ vì quen tay."
          risk="Nhầm giữa 'có full data' và 'cần sampling': phân tích orders thì dùng toàn bộ bảng orders; khảo sát satisfaction thì phải sampling."
          decision="Với bài toán CEO: survey 2,000 người từ 1.2M active customers. Chi phí 1 triệu đồng, xong trong 2 ngày, sai lệch <0.5%."
        />

        <QuickSummary items={[
          'Sampling tồn tại vì thu thập toàn bộ thường không khả thi về thời gian, chi phí, và hạ tầng.',
          '2,000 người với SRS cho margin of error ~2% ở mức 95% confidence cho overall estimate — đủ để ra quyết định tổng thể. Nếu cần phân tích theo nhóm nhỏ (VIP, một thành phố), cần Stratified.',
          'Phân biệt: data transaction (đã có, dùng toàn bộ) vs data survey (phải thu thập, phải sampling).',
        ]} />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 — Population vs Sample
      ══════════════════════════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionTitle id="population-vs-sample">2. Population vs Sample</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Thứ Ba 10:00. Bạn vào cuộc họp team để align về scope của survey.
          Cuộc họp kéo dài 45 phút hơn dự kiến — vì một câu hỏi tưởng đơn giản:
          <em> "Chúng ta khảo sát khách hàng nào?"</em>
        </p>

        <SlackThread
          channel="data-team"
          messages={[
            { from: 'PM Linh', text: 'Survey toàn bộ khách hàng ShopNow nhé. CEO muốn insight tổng thể.', time: '10:03' },
            { from: 'Analytics Lead Tuấn', text: 'Toàn bộ nghĩa là gì? 5.1M tài khoản đã đăng ký? 1.2M có đơn tháng này? Hay 400K người mở email marketing tuần trước?', time: '10:07' },
            { from: 'PM Linh', text: '...khác nhau à?', time: '10:09' },
            { from: 'Analytics Lead Tuấn', text: 'Ba con số đó sẽ cho ba kết quả khác nhau. Phải quyết định trước khi làm.', time: '10:11' },
          ]}
        />

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Tuấn hỏi đúng câu cần hỏi. Ba khái niệm dưới đây nghe đơn giản — nhưng lẫn lộn giữa
          chúng là lý do phổ biến nhất khiến Junior DA phải làm lại survey từ đầu.
        </p>

        <FlowRow
          nodes={[
            { label: 'Population', sub: '5.1M tài khoản\n— muốn kết luận về nhóm này', variant: 'primary' },
            { label: 'Sampling Frame', sub: '1.2M có đơn\n— có thể tiếp cận nhóm này', variant: 'default' },
            { label: 'Sample', sub: '2,000 người\n— thực sự khảo sát nhóm này', variant: 'ok' },
            { label: 'Inference', sub: '→ kết luận\nvề Population', variant: 'primary' },
          ]}
          caption="Ba nhóm này luôn khác nhau. Khoảng cách giữa chúng là nguồn gốc của mọi sai lệch."
        />

        <div className="border border-outline-variant/30 bg-surface-container rounded-xl divide-y divide-outline-variant/20 my-6">
          {[
            {
              term: 'Population',
              desc: 'Tất cả đối tượng bạn muốn kết luận về. CEO hỏi về "toàn bộ khách hàng ShopNow" — đó là 5.1 triệu tài khoản.',
            },
            {
              term: 'Sampling Frame',
              desc: 'Danh sách bạn thực sự có thể gửi survey đến. Chỉ có thể liên hệ 1.2 triệu khách có đơn tháng này. 3.9 triệu còn lại: không có số điện thoại active, không mở email, hoặc đã ngừng mua.',
            },
            {
              term: 'Sample',
              desc: '2,000 người bạn thực sự khảo sát — được chọn từ Sampling Frame.',
            },
          ].map((item) => (
            <div key={item.term} className="px-5 py-4 flex gap-4 items-start">
              <span className="font-ui-label text-ui-label text-secondary shrink-0 min-w-[120px]">{item.term}</span>
              <p className="font-body-md text-[0.8rem] text-on-surface-variant">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Lỗi mình hay thấy Junior mắc nhất: define Population quá rộng ("toàn bộ khách hàng")
          trong khi Sampling Frame chỉ có data của tháng này. Hai cái đó không khớp — và kết quả
          cuối cùng sẽ lệch theo cái khoảng cách đó, dù bạn làm mọi thứ khác đúng hoàn toàn.
        </p>

        <WarningBlock title="⚠ Survivorship Bias ẩn ngay trong bài toán này">
          <p>
            3.9 triệu tài khoản không active tháng này — họ không phải không tồn tại.
            Một phần trong số họ đã <strong>ngừng mua vì không hài lòng</strong> và bạn không bao giờ
            nghe được tiếng nói của họ.
          </p>
          <p>
            EDA của module trước cũng chỉ nhìn thấy người đang mua — không nhìn thấy người đã rời đi.
            Đây là giới hạn tự nhiên của mọi data analysis: bạn chỉ đo được người còn ở lại.
            (Section 4 sẽ quay lại Survivorship Bias cùng với ba loại bias phổ biến khác.)
          </p>
          <p>
            Không thể sửa được — nhưng phải thừa nhận trong báo cáo.
          </p>
        </WarningBlock>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Quyết định của team sau 45 phút: <em>Sampling Frame = 1.2M khách có đơn tháng 6.
          CEO sẽ được thông báo kết quả này không đại diện cho 3.9M tài khoản không active.</em>
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Đây là quyết định đúng. Không phải vì 1.2M là con số "tốt hơn" — mà vì đó là
          con số <strong className="text-on-surface">bạn có thể đứng sau và giải thích được</strong>.
        </p>

        <DADecision
          use="Trước mọi analysis — kể cả EDA. Hỏi ngay: 'Kết luận này áp dụng cho ai?' Trả lời câu đó trước khi viết dòng code đầu tiên."
          noUse="Mình biết sếp sẽ giục. Vẫn phải xác định scope trước — làm không có scope thì gần như chắc chắn phải làm lại, và lần đó tốn thời gian hơn nhiều."
          risk="Mở rộng kết luận ra ngoài Sampling Frame mà không nói rõ. 'Khách hàng ShopNow hài lòng 3.7/5' nghe khác với 'Khách hàng có đơn tháng 6 hài lòng 3.7/5' — nhưng Junior DA hay dùng câu đầu."
          decision="Trong slide báo cáo: luôn có một dòng nhỏ 'Phân tích dựa trên 1.2M khách có đơn tháng 6/2024. Không bao gồm 3.9M tài khoản không active.' — Đây không phải dấu hiệu yếu. Đây là dấu hiệu của DA biết mình đang làm gì."
        />

        <Mistakes items={[
          'Dùng Sampling Frame như thể là Population — báo cáo "khách hàng ShopNow hài lòng X%" khi thực tế chỉ đo được người đang active.',
          'Bỏ qua việc xác định Population trước khi sampling — sau khi có kết quả mới nhận ra câu hỏi ban đầu không rõ ràng.',
          'Không ghi Sampling Frame trong báo cáo — stakeholder đọc xong hiểu nhầm phạm vi, ra quyết định sai.',
        ]} />

        <QuickSummary items={[
          'Population: muốn kết luận về ai. Sampling Frame: thực sự có thể tiếp cận ai. Sample: thực sự đo ai. Ba cái này luôn khác nhau.',
          'Khoảng cách Population → Sampling Frame là bias tự nhiên của mọi survey — không thể xóa, chỉ có thể thừa nhận.',
          'Quyết định Sampling Frame trước khi viết code. Ghi rõ nó trong mọi báo cáo.',
        ]} />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3 — Một mẫu tốt là gì?
      ══════════════════════════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionTitle id="mau-tot-la-gi">3. Một mẫu tốt là gì?</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Thứ Ba 14:00. Bạn bắt đầu lấy sample đầu tiên.
          Tưởng đơn giản. Nhưng intern của team đề xuất một cái gì đó khiến mọi người im lặng:
        </p>

        <SlackThread
          channel="data-team"
          messages={[
            { from: 'Intern Minh', text: 'Hay mình chỉ khảo sát khách VIP thôi? Họ là nhóm quan trọng nhất theo EDA mà.', time: '14:03' },
            { from: 'Analytics Lead Tuấn', text: 'Nếu làm vậy, kết quả sẽ nói lên điều gì?', time: '14:05' },
            { from: 'Intern Minh', text: '...điều gì khách VIP cảm thấy?', time: '14:07' },
            { from: 'Analytics Lead Tuấn', text: 'Đúng. Không phải điều toàn bộ khách hàng cảm thấy. CEO hỏi câu nào?', time: '14:08' },
          ]}
        />

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          <strong className="text-on-surface">Sample của bạn trả lời được câu hỏi của ai?</strong>{' '}
          Đó là câu hỏi cần trả lời trước khi chọn bất kỳ ai.
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Hãy xem ba cách lấy sample phổ biến nhất — và hậu quả của từng cách:
        </p>

        <div className="my-6 space-y-3">
          {[
            {
              approach: 'Khảo sát chỉ khách VIP',
              who: 'Ai được nghe: 60,000 khách VIP (5% population)',
              bias: 'VIP có dedicated support, giao hàng ưu tiên → score cao hơn thực tế tổng thể',
              result: 'Score: 4.3/5 → CEO kết luận "giao hàng đang tốt" → không đầu tư cải thiện → 95% khách Normal tiếp tục chịu trải nghiệm kém',
              verdict: 'warn' as const,
            },
            {
              approach: 'Khảo sát chỉ khách dùng App',
              who: 'Ai được nghe: 780,000 khách App (65%)',
              bias: 'App users tech-savvy hơn, track đơn tốt hơn, ít friction hơn → score cao hơn Web/Offline',
              result: 'Score: 3.8/5 → bỏ qua 35% khách Web và Offline đang có trải nghiệm tệ nhất',
              verdict: 'warn' as const,
            },
            {
              approach: 'Random sample từ toàn bộ Sampling Frame',
              who: 'Ai được nghe: mọi nhóm có xác suất bằng nhau',
              bias: 'Không có selection bias có hệ thống',
              result: 'Score: 3.7/5 → gần với ground truth. CEO có thông tin đúng để ra quyết định.',
              verdict: 'ok' as const,
            },
          ].map((item) => (
            <div key={item.approach} className={`border rounded-xl overflow-hidden ${item.verdict === 'warn' ? 'border-error-container' : 'border-secondary/30'}`}>
              <div className={`px-5 py-3 ${item.verdict === 'warn' ? 'bg-error-container/20' : 'bg-secondary/5'}`}>
                <p className={`font-ui-label text-ui-label ${item.verdict === 'warn' ? 'text-on-error-container' : 'text-secondary'}`}>
                  {item.verdict === 'warn' ? '❌' : '✓'} {item.approach}
                </p>
              </div>
              <div className="px-5 py-4 space-y-1.5">
                <p className="font-body-md text-[0.8rem] text-on-surface-variant"><span className="text-on-surface font-medium">Ai được nghe:</span> {item.who.replace('Ai được nghe: ', '')}</p>
                <p className="font-body-md text-[0.8rem] text-on-surface-variant"><span className="text-on-surface font-medium">Vấn đề:</span> {item.bias}</p>
                <p className="font-body-md text-[0.8rem] text-on-surface-variant"><span className="text-on-surface font-medium">Hệ quả:</span> {item.result}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Sample tốt không phải sample lớn — là sample <strong className="text-on-surface">đại diện</strong>.
          Cơ cấu của sample phải phản ánh đúng cơ cấu của population bạn muốn kết luận về.
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Ba tiêu chí để đánh giá:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
          {[
            { num: '01', title: 'Đại diện', desc: 'Cơ cấu sample khớp với population. VIP 5% → sample cũng ~5% VIP. HCM 40% → sample cũng ~40% HCM.' },
            { num: '02', title: 'Ngẫu nhiên', desc: 'Mỗi người trong Sampling Frame có cơ hội bằng nhau được chọn. Không ưu tiên, không lọc, không tiện tay.' },
            { num: '03', title: 'Đủ lớn', desc: 'Đủ để kết quả ổn định khi lấy lại. Với population triệu người: 1,000–2,000 thường là đủ.' },
          ].map((c) => (
            <div key={c.num} className="bg-surface-container border border-outline-variant/30 rounded-xl p-4">
              <p className="font-ui-label text-[0.625rem] text-secondary uppercase tracking-wider mb-2">{c.num}</p>
              <p className="font-ui-label text-ui-label font-semibold text-on-surface mb-1">{c.title}</p>
              <p className="font-body-md text-[0.8rem] text-on-surface-variant leading-snug">{c.desc}</p>
            </div>
          ))}
        </div>

        <DADecision
          use="Trước khi gửi survey: kiểm tra xem cơ cấu sample (VIP/Normal, city, channel) có khớp với population không. Nếu lệch >5% bất kỳ nhóm nào — resample."
          noUse="Đừng sample theo những gì tiện lợi: không phải 2,000 người đầu tiên trong database, không phải người đang online, không phải người dễ liên hệ nhất."
          risk="Convenience sampling tạo systematic bias — kết quả trông có vẻ đủ lớn nhưng luôn lệch về cùng một hướng và không thể sửa sau khi đã collect data."
          decision="ShopNow: sau khi lấy random sample 2,000 người, chạy check nhanh: tỷ lệ VIP/Normal, HCM/tỉnh có khớp với population không? Nếu VIP ra <3% hoặc >7% thì resample."
        />

        <QuickSummary items={[
          'Sample tốt = đại diện + ngẫu nhiên + đủ lớn. Thiếu một trong ba — kết quả không đáng tin.',
          'Convenience sampling (lấy người dễ tiếp cận) tạo bias có hệ thống. Không thể sửa sau khi collect.',
          'Sau khi lấy sample: kiểm tra cơ cấu so với population. Đây là QA bắt buộc trước khi gửi survey.',
        ]} />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4 — Sampling Bias
      ══════════════════════════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionTitle id="sampling-bias">4. Sampling Bias</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Thứ Năm 09:00. Survey đã gửi đi. 2,000 tin nhắn SMS.
          Kết quả bắt đầu về. Đến 14:00, bạn nhìn vào dashboard:
          400 phản hồi — response rate 20%.
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Bạn bắt đầu tính mean. Analytics Lead Tuấn đi ngang qua, nhìn màn hình và hỏi một câu
          khiến bạn dừng lại:
        </p>

        <SlackThread
          channel="data-analytics"
          messages={[
            { from: 'Analytics Lead Tuấn', text: '1,600 người không reply — họ là ai?', time: '14:23' },
            { from: 'Bạn', text: 'Họ... không reply thôi.', time: '14:25' },
            { from: 'Analytics Lead Tuấn', text: 'Người hài lòng có xu hướng im lặng. Người tức giận thì hay phản hồi. Kết quả của bạn đang đo gì — satisfaction của 400 người hay của 2,000 người?', time: '14:27' },
          ]}
        />

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Đây là <strong className="text-on-surface">Sampling Bias</strong> — sai lệch xảy ra không phải
          vì sample quá nhỏ, mà vì cách thu thập dữ liệu khiến một số nhóm có xác suất được đo
          cao hơn hoặc thấp hơn thực tế.
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Đây là <strong className="text-on-surface">Non-response Bias</strong> — loại bias xuất
          hiện ngay trong bài toán này. 1,600 người không reply không phải ngẫu nhiên. Nghiên cứu
          về survey behavior thường cho thấy người cảm xúc trung lập ít reply nhất, trong khi
          người rất hài lòng hoặc rất bực bội có xu hướng phản hồi cao hơn. Kết quả của bạn có
          thể đang bị kéo về một trong hai phía cực đoan, không phản ánh đúng silent majority.
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-3">
          Trong thực tế, bạn sẽ gặp thêm ba loại bias khác:
        </p>

        <div className="space-y-2 my-4">
          {[
            {
              name: 'Survivorship Bias',
              desc: '3.9M tài khoản không active không có trong Sampling Frame. Một số trong đó đã rời đi vì giao hàng tệ — bạn không bao giờ nghe được tiếng nói của họ.',
            },
            {
              name: 'Selection Bias',
              desc: 'Gửi survey qua App notification thay vì SMS → chỉ App users nhận được. 35% khách Web và Offline bị bỏ sót, trong khi họ thường có trải nghiệm kém hơn.',
            },
            {
              name: 'Recency Bias',
              desc: 'Chỉ khảo sát tháng 6 — khách mua mùa Tết hay 11.11 có hành vi và kỳ vọng khác. Kết quả không đại diện cho cả năm.',
            },
          ].map((b) => (
            <div key={b.name} className="flex gap-3 px-4 py-3 border border-outline-variant/20 rounded-xl">
              <span className="text-secondary shrink-0 font-ui-label text-ui-label mt-0.5">→</span>
              <p className="font-body-md text-[0.8rem] text-on-surface-variant">
                <span className="font-medium text-on-surface">{b.name}: </span>{b.desc}
              </p>
            </div>
          ))}
        </div>

        <WarningBlock title="⚠ Bias nguy hiểm hơn sample size nhỏ">
          <p>
            Sample 10,000 người nhưng toàn self-selected (tình nguyện reply) = <strong>kết quả sai hệ thống</strong>.
          </p>
          <p>
            Sample 500 người thiết kế cẩn thận = <strong>kết quả đủ tin cậy</strong>.
          </p>
          <p>
            Tăng sample size không chữa được bias. Bias phải được xử lý ở thiết kế, không phải ở số lượng.
          </p>
        </WarningBlock>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Biết tên các loại bias là bước đầu. Trong thực tế, khi nào cần check và cần làm gì?
        </p>

        <DADecision
          use="Bias check là bước bắt buộc ngay khi nhận được kết quả survey — trước khi tính bất kỳ con số nào. Hỏi: 'Ai không reply? Tại sao? Họ có khác người reply không?'"
          noUse="Không được bỏ qua bias check dù deadline gấp. Một báo cáo sai còn tệ hơn một báo cáo muộn. Trình bày kết quả bị bias cho CEO rồi bị phát hiện sau — ảnh hưởng uy tín lâu dài."
          risk="Response rate thấp (<30%) là warning sign lớn nhất. Không phải kết quả tệ — mà là tín hiệu bạn cần điều tra thêm trước khi kết luận."
          decision="ShopNow survey: response rate 20% → ghi vào slide 'Kết quả có thể bị ảnh hưởng bởi non-response bias. Người trung tính ít phản hồi nhất.' CEO cần biết điều này để calibrate quyết định."
        />

        <Mistakes items={[
          'Tính mean từ 400 phản hồi rồi báo cáo như thể đó là ý kiến của 2,000 người — silent majority có thể rất khác.',
          '"Response rate cao = không có bias" — sai. Nếu chỉ người hài lòng reply thì 70% response rate vẫn bị bias.',
          'Chỉ ghi "n=400" trong báo cáo mà không ghi "gửi đến 2,000, response rate 20%" — stakeholder mất context quan trọng.',
        ]} />

        <QuickSummary items={[
          'Bias là sai lệch hệ thống do cách thu thập — không thể chữa bằng sample size lớn hơn.',
          'Bốn loại phổ biến: Non-response, Survivorship, Selection, Recency. Biết tên là biết cách phòng tránh.',
          'Khi response rate <30%: bắt buộc điều tra "ai không reply" trước khi kết luận bất cứ điều gì.',
        ]} />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5 — Random Sampling
      ══════════════════════════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionTitle id="random-sampling">5. Random Sampling</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Câu trả lời ngắn: <strong className="text-on-surface">loại bỏ human judgment ra khỏi quá trình chọn người</strong>.
          Mọi lần bạn quyết định "chọn người này vì tiện", bạn đang đưa bias vào.
          Cách duy nhất để công bằng: để ngẫu nhiên quyết định.
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Đây là <strong className="text-on-surface">Simple Random Sampling (SRS)</strong>:
          mỗi người trong Sampling Frame có xác suất bằng nhau được chọn — không điều kiện,
          không lọc, không ưu tiên.
        </p>

        <Code>{`import pandas as pd
import numpy as np
np.random.seed(42)           # cố định để reproducible

# df_shopnow: 1.2M active customers (Sampling Frame)
sample = df_shopnow.sample(n=2000, random_state=42)

# Kiểm tra cơ cấu
for col in ['customer_group', 'city']:
    pop_pct = df_shopnow[col].value_counts(normalize=True).mul(100)
    s_pct   = sample[col].value_counts(normalize=True).mul(100)
    diff    = (pop_pct - s_pct).abs().max()
    print(f"{'✓' if diff < 3 else '⚠'} {col:<18} max sai lệch: {diff:.1f}%")`}
        </Code>
        <Output>{`✓ customer_group     max sai lệch: 0.8%
✓ city               max sai lệch: 1.9%`}
        </Output>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          SRS cho cơ cấu rất sát population. Nhưng có một điểm yếu quan trọng: với nhóm nhỏ
          như VIP (5%), số lượng trong sample dao động mạnh mỗi lần lấy — có thể ra 73 hoặc 127 người.
          Nếu CEO cần phân tích riêng VIP, kết quả không ổn định. Section 6 giải quyết điều đó.
        </p>

        <TradeoffBlock
          options={[
            {
              label: 'Convenience Sampling',
              tag: 'Không nên',
              tagVariant: 'warn',
              pros: ['Nhanh, dễ thực hiện', 'Không cần setup phức tạp'],
              cons: ['Selection bias có hệ thống', 'Kết quả không reproducible', 'Không thể defend khi bị hỏi'],
            },
            {
              label: 'Simple Random Sampling',
              tag: 'Chuẩn mực',
              tagVariant: 'ok',
              pros: ['Không có selection bias', 'Reproducible với random_state', 'Dễ giải thích cho stakeholder'],
              cons: ['Nhóm thiểu số có thể underrepresented', 'Cần Sampling Frame sạch'],
            },
            {
              label: 'Systematic Sampling',
              tag: 'Đặc biệt',
              tagVariant: 'neutral',
              pros: ['Dễ implement trên large dataset', 'Phân phối đều theo thứ tự'],
              cons: ['Nguy hiểm nếu data có pattern theo chu kỳ', 'Không dùng cho data có thứ tự ý nghĩa'],
            },
          ]}
          caption="Trong hầu hết tình huống thực tế: Simple Random Sampling là lựa chọn đúng"
        />

        <DADecision
          use="Mọi survey mà bạn không cần phân tích chi tiết theo nhóm thiểu số. Câu hỏi tổng thể ('satisfaction ShopNow là bao nhiêu?') → SRS là đủ và đơn giản nhất."
          noUse="Khi CEO hỏi riêng về một nhóm nhỏ (VIP, một thành phố cụ thể). SRS có thể cho quá ít người trong nhóm đó để kết luận chắc chắn. → Dùng Stratified Sampling."
          risk="Quên set random_state → mỗi lần chạy ra kết quả khác → không thể reproduce báo cáo → mất uy tín khi bị audit."
          decision="Với ShopNow survey: random_state=42, n=2,000. Sau đó kiểm tra: VIP trong sample có nằm trong 3–7% không? Nếu có → OK. Nếu không → xem lại Section 6."
        />

        <QuickSummary items={[
          'Random Sampling: mỗi người trong Sampling Frame có xác suất bằng nhau được chọn — cách duy nhất loại bỏ selection bias.',
          'Luôn set random_state. Luôn kiểm tra cơ cấu sau khi lấy mẫu.',
          'SRS tốt cho câu hỏi tổng thể. Cần phân tích nhóm nhỏ → Stratified.',
        ]} />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 6 — Stratified Sampling
      ══════════════════════════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionTitle id="stratified-sampling">6. Stratified Sampling</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Thứ Tư 11:00. CEO gọi bạn vào phòng họp. Ông xem lại slide EDA từ hôm trước
          — biểu đồ cho thấy 5% VIP tạo phần lớn revenue — rồi hỏi thẳng:
        </p>

        <SlackThread
          channel="direct-message"
          messages={[
            { from: 'CEO Nam', text: 'Nhóm VIP đó — họ có hài lòng với giao hàng không? Nếu mất họ, chúng ta mất rất nhiều. Tôi cần biết riêng về nhóm này, không phải tổng thể.', time: '11:04' },
            { from: 'Bạn', text: 'Tôi sẽ phân tích riêng nhóm VIP trong kết quả survey.', time: '11:06' },
            { from: 'CEO Nam', text: 'Tốt. Và kết quả phải đủ tin cậy để tôi có thể ra quyết định budget dựa trên đó.', time: '11:07' },
          ]}
        />

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          2,000 người. VIP chỉ có 73. CEO muốn ra quyết định budget dựa trên 73 người.
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Với n=73, margin of error cho mean của nhóm VIP xấp xỉ ±0.2 điểm — đủ rộng để
          hai lần chạy SRS cho kết quả trái chiều (4.1 lần này, 4.4 lần sau).
          Chạy lại SRS có thể ra 85 hoặc 110 VIP — không ổn định.
          Bạn cần đảm bảo VIP <em>luôn</em> có đủ đại diện, không phụ thuộc vào may mắn.
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Đây là lúc <strong className="text-on-surface">Stratified Sampling</strong> xuất hiện:
          thay vì để ngẫu nhiên quyết định bao nhiêu VIP được chọn, bạn <em>đảm bảo</em>
          số lượng tối thiểu bằng cách chia population thành các nhóm (strata) và lấy mẫu riêng từng nhóm.
        </p>

        <FlowRow
          nodes={[
            { label: 'Chia strata', sub: 'VIP / Normal', variant: 'primary' },
            { label: 'Sample riêng', sub: 'Từng nhóm', variant: 'default' },
            { label: 'Tỷ lệ cố định', sub: '100 VIP + 1,900 Normal', variant: 'default' },
            { label: 'Gộp lại', sub: 'n = 2,000', variant: 'ok' },
          ]}
          caption="Stratified đảm bảo VIP luôn có đúng 100 người — không phụ thuộc vào ngẫu nhiên"
        />

        <Code>{`# Stratified Sampling — đảm bảo VIP đủ đại diện để phân tích
strata = {'Normal': 1900, 'VIP': 100}  # 95%:5% như population

stratified = pd.concat([
    df_shopnow[df_shopnow['customer_group'] == grp].sample(n, random_state=42)
    for grp, n in strata.items()
])

col = 'delivery_satisfaction_score'
print(stratified.groupby('customer_group')[col].agg(n='count', mean='mean').round(3))`}
        </Code>
        <Output>{`                  n    mean
customer_group
Normal         1900   3.647
VIP             100   4.312`}
        </Output>

        <Note>
          4.312 là point estimate — chưa đủ để ra quyết định. Cần CI mới biết con số này ổn định
          không. Section 7 sẽ tính Bootstrap CI cho kết quả này trước Board Meeting.
        </Note>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Chênh lệch 0.66 điểm giữa VIP và Normal. Với SRS và 73 VIP, khoảng tin cậy của con số này
          rộng đến mức không kết luận được gì chắc chắn. Với Stratified và 100 VIP:
          kết quả đủ ổn định để CEO ra quyết định.
        </p>

        <TradeoffBlock
          options={[
            {
              label: 'Simple Random Sampling',
              pros: ['Đơn giản', 'Không cần biết strata trước', 'Kết quả tổng hợp không cần điều chỉnh weight'],
              cons: ['VIP có thể chỉ ra 60–140 người', 'Phân tích nhóm nhỏ không ổn định', 'Không kiểm soát được phân phối nhóm'],
            },
            {
              label: 'Stratified Sampling',
              tag: 'Phù hợp hơn ở đây',
              tagVariant: 'ok',
              pros: ['VIP luôn đúng 100 người', 'Phân tích nhóm chính xác hơn', 'Variance thấp hơn cho metric tổng hợp'],
              cons: ['Phức tạp hơn SRS', 'Cần biết strata trước khi lấy mẫu', 'Phải điều chỉnh weight nếu oversample'],
            },
          ]}
          caption="Khi cần phân tích nhóm thiểu số quan trọng: Stratified là lựa chọn đúng"
        />

        <DADecision
          use="Khi cần phân tích so sánh giữa nhóm có tỷ lệ chênh lệch lớn và việc phân tích đó ảnh hưởng đến quyết định. EDA đã cho bạn biết nhóm nào quan trọng — Stratified đảm bảo chúng đủ đại diện."
          noUse="Khi chỉ cần kết quả tổng thể và không cần breakdown theo nhóm. Stratified phức tạp hơn cần thiết."
          risk="Oversample VIP (500 thay vì 100) nhưng không điều chỉnh weight khi tính overall mean → kết quả tổng bị kéo về phía VIP quá mức."
          decision="ShopNow: strata theo customer_group (VIP: 100, Normal: 1,900). Đủ để trả lời câu hỏi CEO về VIP. Nếu CEO hỏi thêm về từng thành phố: thêm strata theo city."
        />

        <Mistakes items={[
          'Quên điều chỉnh weight khi tính overall mean với oversample — kết quả tổng bị lệch về nhóm oversampled.',
          'Stratify theo quá nhiều biến (VIP × city × channel = 30 strata, n=2,000) → mỗi strata chỉ ~67 người — không đủ.',
          'Không ghi sampling design — người review sau không biết tại sao VIP chiếm 5% thay vì tỷ lệ tự nhiên của họ.',
        ]} />

        <QuickSummary items={[
          'Stratified Sampling: chia strata → sample riêng → gộp lại. Đảm bảo nhóm thiểu số quan trọng luôn đủ đại diện.',
          'EDA phát hiện nhóm quan trọng; Stratified đảm bảo nhóm đó có tiếng nói tương xứng trong survey.',
          'Khi oversample một nhóm: nhớ điều chỉnh weight khi tính kết quả tổng hợp.',
        ]} />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 7 — Bootstrap
      ══════════════════════════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionTitle id="bootstrap">7. Bootstrap</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Thứ Năm 16:00. Bạn đang chuẩn bị slide cho Board Meeting sáng thứ Sáu.
          CFO ghé vào hỏi trước một câu mà bạn chưa nghĩ đến:
        </p>

        <SlackThread
          channel="board-prep"
          messages={[
            { from: 'CFO Hải', text: 'Slide 4 ghi "satisfaction 3.71/5". Nếu chúng ta khảo sát 2,000 người khác vào tuần tới, con số này có thay đổi nhiều không?', time: '16:12' },
            { from: 'Bạn', text: 'Tôi... chưa kiểm tra độ ổn định của kết quả.', time: '16:14' },
            { from: 'CFO Hải', text: 'Board sẽ dùng con số này để quyết định budget logistics Q3. Cần biết mức độ tin cậy là bao nhiêu trước khi họ vote.', time: '16:15' },
          ]}
        />

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Bạn nhìn lại data. Chỉ có 2,000 phản hồi. Không thể khảo sát thêm trong 18 tiếng.
          Câu hỏi CFO đặt ra là hoàn toàn hợp lý: nếu lấy mẫu lại, kết quả sẽ ra 3.65 hay 3.77?
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Cách giải của <strong className="text-on-surface">Bootstrap</strong>: giả lập việc
          lấy mẫu lại bằng cách resample từ chính 2,000 phản hồi đang có — lặp lại 1,000 lần,
          tính mean mỗi lần, xem mean dao động trong khoảng nào.
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Tại sao cách này hợp lệ? Nếu sample của bạn đủ đại diện cho population, thì
          distribution trong sample gần giống distribution trong population. Resample từ
          sample là cách tốt nhất để mô phỏng "điều gì sẽ xảy ra nếu lấy mẫu lại" — mà
          không cần quay lại survey thêm 2,000 người nữa.
        </p>

        <FlowRow
          nodes={[
            { label: 'Sample gốc', sub: '2,000 phản hồi', variant: 'primary' },
            { label: 'Resample ×1,000', sub: 'with replacement', variant: 'default' },
            { label: '1,000 means', sub: 'Phân phối thực nghiệm', variant: 'default' },
            { label: '95% CI', sub: '[3.67, 3.76]', variant: 'ok' },
          ]}
          caption="Bootstrap không cần thêm data — nó khai thác tối đa 2,000 phản hồi bạn đã có"
        />

        <Code>{`scores = stratified['delivery_satisfaction_score'].values

# 1,000 lần resample → phân phối của mean
boot_means = np.array([
    np.random.choice(scores, len(scores), replace=True).mean()
    for _ in range(1000)
])

lo, hi = np.percentile(boot_means, [2.5, 97.5])
print(f"Sample mean: {scores.mean():.4f}")
print(f"95% CI:      [{lo:.4f}, {hi:.4f}]  →  margin ±{(hi-lo)/2:.4f}")`}
        </Code>
        <Output>{`Sample mean: 3.7082
95% CI:      [3.6678, 3.7486]  →  margin ±0.0404`}
        </Output>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Câu trả lời cho CFO: <em>"Mean là 3.71. CI [3.67, 3.76] cho thấy nếu survey lại 2,000
          người khác vào tuần tới, kết quả gần như chắc chắn sẽ nằm trong khoảng này — không phải
          3.5, không phải 4.0. Margin of error ±0.04 trên thang 5 điểm — đủ ổn định để ra quyết
          định budget logistics."</em>
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          CFO gật đầu, ghi chú vào slide.
        </p>

        <Note>
          Bootstrap nói về sự <em>ổn định</em> của kết quả — không phải về sự <em>đúng đắn</em>.
          CI hẹp nghĩa là nếu lấy mẫu lại, kết quả ổn định. Nhưng nếu sample bị bias,
          CI hẹp vẫn không cứu được kết quả sai. Bias và stability là hai vấn đề riêng biệt.
        </Note>

        <DADecision
          use="Trước mọi báo cáo kết quả survey cho stakeholder ra quyết định quan trọng. Đặc biệt khi họ sẽ hỏi 'con số này có chắc không?' — Bootstrap CI là câu trả lời định lượng."
          noUse="Khi sample đã bị bias nghiêm trọng. CI hẹp từ biased sample vẫn là kết quả sai — đừng dùng Bootstrap để che đậy vấn đề thiết kế."
          risk="Nhầm Bootstrap CI với 'kết quả đúng'. CI hẹp = ổn định, không phải = chính xác. Phải giải thích rõ cho stakeholder."
          decision="Mọi slide báo cáo survey: 'X/5 (95% CI: [a, b], n=2,000)'. Ba thông tin này cùng nhau — không thiếu cái nào. Đây là format chuẩn mà senior DA và CFO mong đợi."
        />

        <Mistakes items={[
          '"CI hẹp = kết quả đúng" — sai. Sample bị bias vẫn cho CI hẹp nhưng center point sai. Hai vấn đề riêng biệt.',
          'n_bootstrap=100 — CI không ổn định, thay đổi mỗi lần chạy. Tối thiểu 1,000, lý tưởng 5,000.',
          'Giải thích CI sai với non-technical audience: "95% confidence" không phải "95% chắc chắn con số là đúng" — cần diễn đạt lại.',
        ]} />

        <QuickSummary items={[
          'Bootstrap giải quyết "kết quả có ổn định không?" mà không cần thêm data — resample từ chính sample đang có.',
          'CI hẹp = ổn định khi lấy mẫu lại. Không nói gì về bias.',
          'Format báo cáo chuẩn: "3.71/5 (95% CI: [3.67, 3.76], n=2,000)" — luôn đi kèm ba thông tin này.',
        ]} />
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 8 — Common Mistakes
      ══════════════════════════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionTitle id="common-mistakes">8. Common Mistakes</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Những lỗi này không có trong giáo trình. Mình thấy chúng trong báo cáo thực tế —
          thường bị phát hiện muộn, khi quyết định đã được đưa ra và không thể thu hồi.
        </p>

        <div className="space-y-5 my-6">
          {[
            {
              num: '01',
              title: 'Lấy 2,000 dòng đầu tiên trong database',
              story: 'Intern mới vào team cần lấy nhanh 2,000 customer để test pipeline. Họ viết LIMIT 2000 không ORDER BY RANDOM(). Database trả về 2,000 người đăng ký đầu tiên — tất cả đều từ năm 2019, đa số ở HCM, phân phối tuổi rất khác population hiện tại.',
              lesson: 'Luôn dùng .sample() hoặc ORDER BY RANDOM(). "Lấy nhanh" = "lấy sai" nếu không ngẫu nhiên.',
            },
            {
              num: '02',
              title: '"Sample lớn hơn luôn tốt hơn"',
              story: 'Marketing team tự gửi survey qua toàn bộ email list — 50,000 người. Response rate 8% = 4,000 phản hồi. DA team dùng kết quả này vì "sample lớn hơn". Nhưng người reply qua email là subscriber lâu năm, có loyalty cao hơn trung bình.',
              lesson: '4,000 người bị biased tệ hơn 500 người thiết kế đúng. Số lượng không thể thay thế chất lượng thiết kế.',
            },
            {
              num: '03',
              title: 'Kết luận về VIP từ dữ liệu không đủ đại diện',
              story: 'SRS cho ra 73 VIP. DA tính mean score của 73 người là 4.1, kết luận "VIP hài lòng hơn Normal 0.7 điểm". Nhưng với n=73, khoảng tin cậy rộng đến mức khoảng chênh lệch thực tế có thể là 0.3 đến 1.1. Quyết định budget dựa trên con số này là gamble.',
              lesson: 'Trước khi phân tích theo nhóm: kiểm tra n của từng nhóm. Với nhóm thiểu số quan trọng — dùng Stratified.',
            },
            {
              num: '04',
              title: 'Báo cáo kết quả mà không nêu Sampling Frame',
              story: '"Khách hàng ShopNow hài lòng 3.71/5 với giao hàng" — CEO dùng câu này trong báo cáo thường niên. Nhưng thực tế đây chỉ là kết quả từ 1.2M active customers tháng 6 — không phải 5M tài khoản. Sự khác biệt quan trọng khi phân tích theo năm.',
              lesson: 'Luôn ghi Sampling Frame. Một câu nhỏ trong footnote đủ — nhưng bắt buộc.',
            },
            {
              num: '05',
              title: 'Trình bày mean mà không có CI',
              story: '"Score VIP: 4.31, Score Normal: 3.65. VIP hài lòng hơn 0.66 điểm." CFO hỏi: "Margin of error là bao nhiêu?" DA không có câu trả lời. Nếu CI của cả hai đều rộng và overlap nhau — con số 0.66 điểm có thể không có ý nghĩa.',
              lesson: 'Mean không có context là thông tin chưa hoàn chỉnh. Luôn đi kèm n và CI.',
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
          SECTION 9 — Case Study
      ══════════════════════════════════════════════════════════════ */}
      <section className="mb-16">
        <SectionTitle id="case-study">9. Case Study: Thứ Sáu — Board Meeting</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Từ 08:47 thứ Ba đến 09:00 thứ Sáu — đây là chuỗi quyết định bạn đã đưa ra:
        </p>

        <div className="space-y-3 my-6">
          {[
            { time: 'Thứ Ba', decision: 'Xác định scope', detail: 'CEO muốn biết satisfaction. Không thể survey 1.2M người → sampling.' },
            { time: 'Thứ Ba 10:00', decision: 'Xác định Population và Sampling Frame', detail: '5.1M tài khoản (Population) → 1.2M có đơn tháng 6 (Sampling Frame). Ghi rõ giới hạn: không đại diện cho 3.9M inactive.' },
            { time: 'Thứ Ba 14:00', decision: 'Thiết kế sample', detail: 'Stratified: 1,900 Normal + 100 VIP = 2,000. Đảm bảo VIP đủ đại diện theo yêu cầu CEO.' },
            { time: 'Thứ Tư', decision: 'Gửi survey và thu thập', detail: 'SMS đến 2,000 người. Response rate 20% → 400 phản hồi. Ghi chú non-response bias.' },
            { time: 'Thứ Năm', decision: 'Phân tích và Bootstrap', detail: 'Tính mean theo nhóm. Bootstrap 1,000 lần → CI. Kết quả ổn định đủ để báo cáo.' },
            { time: 'Thứ Sáu 09:00', decision: 'Board meeting', detail: 'Trình bày với đầy đủ context: sampling frame, response rate, CI, limitation.' },
          ].map((step, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-2 h-2 rounded-full bg-secondary mt-1.5" />
                {i < 5 && <div className="w-px flex-1 bg-outline-variant/30 mt-1" />}
              </div>
              <div className="pb-3">
                <p className="font-ui-label text-[0.6875rem] text-secondary mb-0.5">{step.time}</p>
                <p className="font-ui-label text-ui-label text-on-surface">{step.decision}</p>
                <p className="font-body-md text-[0.8rem] text-on-surface-variant mt-0.5 leading-snug">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-outline-variant/30 bg-surface-container rounded-xl p-5 my-6 space-y-4">
          <p className="font-ui-label text-[0.625rem] text-on-surface-variant/50 uppercase tracking-widest">
            Template — Board Meeting Slide
          </p>
          <div>
            <p className="font-ui-label text-ui-label text-on-surface mb-1">Kết quả chính</p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Satisfaction giao hàng tháng 6/2024: <strong className="text-on-surface">3.71/5</strong>
              {' '}(95% CI: [3.67, 3.75], n=2,000). VIP: 4.31 — cao hơn Normal (3.65) 0.66 điểm.
              HP và CT có điểm thấp nhất (3.28–3.31).
            </p>
          </div>
          <div>
            <p className="font-ui-label text-ui-label text-on-surface mb-1">Khuyến nghị</p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Ưu tiên cải thiện logistics HP và CT. Cần A/B test trước khi phân bổ ngân sách lớn.
            </p>
          </div>
          <div className="border-t border-secondary/20 pt-3">
            <p className="font-ui-label text-ui-label text-on-surface mb-1">Giới hạn — bắt buộc ghi</p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Phân tích dựa trên 1.2M khách có đơn tháng 6 — không đại diện cho 3.9M tài khoản không active.
              Response rate 20%; kết quả có thể bị ảnh hưởng bởi non-response bias.
            </p>
          </div>
        </div>

        <Note>
          Junior hay sợ viết Limitations vì nghĩ sẽ bị hỏi "tại sao không fix?" Thực ra ngược
          lại. Mình thêm slide "What this data cannot tell us" vào cuối mọi báo cáo — và đó
          thường là slide CFO hỏi nhiều câu nhất, theo nghĩa tích cực. Người biết giới hạn của
          mình đáng tin hơn người trình bày mọi thứ như thể hoàn hảo.
        </Note>
      </section>

      {/* ── Sampling Checklist ── */}
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
        Trước khi kết thúc — đây là checklist bạn nên chạy qua cho mọi project sampling.
        Kết quả của cả tuần làm việc vừa rồi gói lại trong 7 câu hỏi.
      </p>
      <SamplingChecklist />

      {/* ── Sign-off ── */}
      <div className="border-t border-outline-variant/20 pt-10">
        <p className="font-body-md text-body-md text-on-surface-variant">
          Tiếp theo:{' '}
          <a href="/modules/statistical-inference" className="text-secondary hover:underline">
            Module 3 — Statistical Inference: Kết quả từ sample 2,000 người — khi nào có thể
            tin, khi nào chỉ là ngẫu nhiên? →
          </a>
        </p>
      </div>

    </article>
  )
}
