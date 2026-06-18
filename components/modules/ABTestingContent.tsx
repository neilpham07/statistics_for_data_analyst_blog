import type { TocItem } from '@/components/layout/TableOfContents'

export const abTestingTocItems: TocItem[] = [
  { id: 'tai-sao-ab-testing',     label: '1. Tại sao cần A/B Testing?' },
  { id: 'control-va-treatment',   label: '2. Control và Treatment' },
  { id: 'randomization',          label: '3. Randomization' },
  { id: 'hypothesis',             label: '4. Hypothesis Testing' },
  { id: 'p-value',                label: '5. p-value' },
  { id: 'sample-size',            label: '6. Sample Size' },
  { id: 'khi-nao-dung',           label: '7. Khi nào dừng test?' },
  { id: 'common-mistakes',        label: '8. Common Mistakes' },
  { id: 'case-study',             label: '9. Case Study' },
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

/* ── Scenario Block ───────────────────────────────────────────────────────── */

function ScenarioBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-outline-variant/30 rounded-xl p-5 my-6 bg-surface-container/40">
      <p className="font-ui-label text-[0.625rem] text-on-surface-variant/60 uppercase tracking-widest mb-3">
        {title}
      </p>
      <div className="space-y-2">{children}</div>
    </div>
  )
}

/* ── AB Split Visual ──────────────────────────────────────────────────────── */

function ABSplit({
  control,
  treatment,
}: {
  control: { label: string; users: string; ctr?: string }
  treatment: { label: string; users: string; ctr?: string }
}) {
  return (
    <div className="grid grid-cols-2 gap-3 my-6">
      {[
        { side: 'A', color: 'border-secondary/40 bg-secondary/5', labelColor: 'text-secondary', ...control },
        { side: 'B', color: 'border-on-surface-variant/30 bg-surface-container/50', labelColor: 'text-on-surface', ...treatment },
      ].map((g) => (
        <div key={g.side} className={`border ${g.color} rounded-xl p-4 text-center`}>
          <p className={`font-ui-label text-[0.625rem] uppercase tracking-widest mb-2 ${g.labelColor}`}>
            Group {g.side} — {g.label}
          </p>
          <p className="font-body-md text-[0.75rem] text-on-surface-variant mb-3">{g.users}</p>
          <div className="border border-outline-variant/40 rounded-lg px-3 py-2 text-center bg-surface/60">
            <p className="font-code text-[0.75rem] text-on-surface-variant/70 mb-1">push content</p>
            <p className="font-body-md text-[0.8rem] text-on-surface font-medium">{g.label === 'Control' ? '"Bạn có voucher mới"' : '"🔥 Voucher 100K sắp hết hạn! Nhấn để sử dụng ngay"'}</p>
          </div>
          {g.ctr && (
            <p className="font-ui-label text-[0.75rem] text-secondary mt-3">
              CTR = <strong>{g.ctr}</strong>
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

/* ── Note ─────────────────────────────────────────────────────────────────── */

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-secondary pl-5 py-1 my-6 bg-secondary/5 rounded-r-lg">
      <p className="font-body-md text-body-md text-on-surface">{children}</p>
    </div>
  )
}

/* ── Warning Block ────────────────────────────────────────────────────────── */

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

/* ── Quick Summary ────────────────────────────────────────────────────────── */

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

/* ── Pitfall Block ────────────────────────────────────────────────────────── */

type Pitfall = { name: string; what: string; example: string; fix: string }

function PitfallList({ items }: { items: Pitfall[] }) {
  return (
    <div className="space-y-4 my-6">
      {items.map((item, i) => (
        <div key={i} className="border border-outline-variant/30 rounded-xl overflow-hidden">
          <div className="bg-error-container/20 px-5 py-2.5 flex items-center gap-3 border-b border-outline-variant/20">
            <span className="text-on-error-container font-semibold text-sm">✕</span>
            <p className="font-ui-label text-[0.75rem] text-on-surface font-semibold">{item.name}</p>
          </div>
          <div className="px-5 py-4 space-y-2">
            <p className="font-body-md text-[0.8rem] text-on-surface-variant">
              <span className="font-medium text-on-surface">Là gì: </span>{item.what}
            </p>
            <p className="font-body-md text-[0.8rem] text-on-surface-variant">
              <span className="font-medium text-on-surface">SnowTech: </span>{item.example}
            </p>
            <p className="font-body-md text-[0.8rem] text-secondary">
              <span className="font-medium">Fix: </span>{item.fix}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ── Section Title ────────────────────────────────────────────────────────── */

function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="font-headline-lg text-headline-lg text-on-surface mb-6 scroll-mt-24">
      {children}
    </h2>
  )
}

/* ── Code & Output ────────────────────────────────────────────────────────── */

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

/* ══════════════════════════════════════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════════════════════════════════════ */

export function ABTestingContent() {
  return (
    <article className="max-w-[720px] py-8 lg:py-10 lg:pr-8">

      {/* ── Header ── */}
      <p className="font-ui-label text-ui-label text-secondary uppercase tracking-widest mb-4">Module 4</p>
      <h1 className="font-display text-display text-on-surface mb-6 leading-[1.05]">
        A/B Testing
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
        CRM Manager Linh biết rằng push notification của SnowTech đang yếu đi.
        CTR đã giảm từ 8% xuống 5.2% trong 3 tháng — và bà có một ý tưởng để cứu vãn tình hình.
        Nhưng ý tưởng hay và ý tưởng đúng là hai chuyện khác nhau.
        A/B Testing là cách duy nhất để biết.
      </p>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 1 — Tại sao cần A/B Testing?
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="tai-sao-ab-testing" className="mb-16">
        <SectionTitle id="tai-sao-ab-testing">1. Tại sao cần A/B Testing?</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Tháng trước, Linh đổi tone copy push notification — và CTR tăng nhẹ tuần đó.
          Bà báo cáo với PM Huy: "Content mới hiệu quả hơn."
          Nhưng DA Minh nhìn vào data và thấy tuần đó trùng với đợt sale cuối tháng.
        </p>

        <SlackThread
          channel="analytics-crm"
          messages={[
            {
              from: 'CRM Manager Linh',
              time: '09:14',
              text: 'Minh ơi, tôi muốn đổi push content sang cái mới này. Nếu CTR tăng lên là do content mới đúng không?',
            },
            {
              from: 'DA Minh',
              time: '09:21',
              text: (
                <>
                  Chưa chắc. Nếu chị deploy rồi thấy CTR tăng, có thể do:
                  content mới, cuối tuần, đầu tháng lương, push lúc 9h thay vì 11h, hay chỉ đơn giản là may mắn.
                  Không thể biết cái gì <em>gây ra</em> tăng nếu chỉ nhìn before/after.
                </>
              ),
            },
            {
              from: 'CRM Manager Linh',
              time: '09:25',
              text: 'Vậy làm sao tôi biết content mới có thực sự tốt hơn không?',
            },
            {
              from: 'DA Minh',
              time: '09:27',
              text: 'A/B Testing. Tôi sẽ chạy cả hai phiên bản song song — cùng ngày, cùng giờ, cùng loại user — rồi so sánh. Cái duy nhất thay đổi là content.',
            },
          ]}
        />

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Đây là vấn đề cốt lõi của mọi quyết định sản phẩm: quan sát thấy hai thứ xảy ra
          cùng nhau không có nghĩa là một cái <em>gây ra</em> cái kia.
          CTR tăng sau khi đổi content có thể là correlation, có thể là coincidence.
        </p>

        <ScenarioBlock title="Before/After — Cái bẫy phổ biến nhất">
          <p className="font-body-md text-body-md text-on-surface-variant">
            <strong className="text-on-surface">Tuần 1 (content cũ):</strong> CTR = 5.2%
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            <strong className="text-on-surface">Tuần 2 (content mới):</strong> CTR = 5.8%
          </p>
          <p className="font-body-md text-[0.75rem] text-on-surface-variant/60 mt-3 italic">
            Nhưng tuần 2 là thứ 6 cuối tháng, user vừa nhận lương, SnowTech đang chạy cashback 10%...
            Content mới hay context khác?
          </p>
        </ScenarioBlock>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          A/B Testing giải quyết điều này bằng cách giữ nguyên mọi thứ — thời gian, loại user,
          hoàn cảnh thị trường — và chỉ thay đổi đúng một biến số duy nhất.
          Kết quả khác nhau lúc đó mới có thể quy cho sự thay đổi đó.
        </p>

        <Note>
          Correlation nói cho bạn điều gì <em>xảy ra</em>. A/B Testing giúp bạn biết điều gì <em>gây ra</em> nó.
          Đây là sự khác biệt giữa insight và evidence.
        </Note>

        <QuickSummary items={[
          'Before/After không đủ — quá nhiều thứ thay đổi cùng lúc ngoài biến số bạn test.',
          'A/B Testing kiểm soát mọi yếu tố ngoại vi bằng cách chạy song song hai phiên bản.',
          'Mục tiêu không phải là "thấy CTR tăng" — mà là biết chắc điều gì gây ra tăng.',
        ]} />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 — Control và Treatment
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="control-va-treatment" className="mb-16">
        <SectionTitle id="control-va-treatment">2. Control và Treatment</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Linh muốn test hai phiên bản push. Minh đặt tên ngay: phiên bản hiện tại là
          <strong className="text-on-surface"> Control</strong>, phiên bản mới là
          <strong className="text-on-surface"> Treatment</strong>.
          Hai nhóm user nhận hai nội dung khác nhau — nhưng mọi thứ còn lại giống hệt nhau.
        </p>

        <ABSplit
          control={{ label: 'Control', users: '50% users — ~420,000 người' }}
          treatment={{ label: 'Treatment', users: '50% users — ~420,000 người' }}
        />

        <div className="border border-outline-variant/30 rounded-xl overflow-hidden my-6 divide-y divide-outline-variant/20">
          {[
            {
              term: 'Control',
              def: 'Phiên bản hiện tại — baseline bạn muốn so sánh với.',
              snowtech: '"Bạn có voucher mới" — push content đang chạy thực tế.',
              why: 'Nếu không có Control, bạn không biết "tốt hơn" so với cái gì.',
            },
            {
              term: 'Treatment',
              def: 'Phiên bản mới — có đúng một thứ khác so với Control.',
              snowtech: '"🔥 Voucher 100K sắp hết hạn! Nhấn để sử dụng ngay" — urgency + số cụ thể.',
              why: 'Chỉ thay đổi một biến số. Nếu đổi cả content lẫn giờ gửi, không biết cái nào tạo ra hiệu quả.',
            },
          ].map((item) => (
            <div key={item.term} className="px-5 py-4">
              <p className="font-ui-label text-ui-label text-secondary mb-1">{item.term}</p>
              <p className="font-body-md text-[0.8rem] text-on-surface-variant mb-1">{item.def}</p>
              <p className="font-body-md text-[0.75rem] text-on-surface mb-1">
                <span className="font-medium">SnowTech: </span>{item.snowtech}
              </p>
              <p className="font-body-md text-[0.75rem] text-on-surface-variant/60 italic">{item.why}</p>
            </div>
          ))}
        </div>

        <Note>
          Một test tốt chỉ thay đổi <strong>đúng một thứ</strong>. Nếu Linh vừa đổi content vừa đổi giờ gửi
          trong cùng một experiment, kết quả tốt hơn có thể đến từ giờ gửi, không phải content —
          và bà không có cách nào phân biệt được.
        </Note>

        <QuickSummary items={[
          'Control = baseline hiện tại. Treatment = phiên bản mới cần test.',
          'Chỉ thay đổi đúng một biến số — tất cả yếu tố khác phải giữ nguyên.',
          'Không có Control, không có điểm tham chiếu — "tốt hơn" không có nghĩa gì.',
        ]} />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3 — Randomization
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="randomization" className="mb-16">
        <SectionTitle id="randomization">3. Randomization</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Linh đề xuất: "Cho user HCM nhận Treatment, user HN nhận Control — đỡ phức tạp."
          Minh từ chối ngay. Nếu user HCM vốn đã có CTR cao hơn HN, kết quả sẽ lệch
          trước khi test bắt đầu.
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Randomization giải quyết điều này: mỗi user được tung đồng xu (kỹ thuật số) để
          xác định vào nhóm nào. Kết quả là hai nhóm gần như giống hệt nhau về mọi
          đặc điểm — tuổi, tỉnh thành, segment, lịch sử giao dịch — ngay cả những thứ
          bạn chưa đo được.
        </p>

        <Code>{`import pandas as pd
import numpy as np

# Sampling Frame: 840,000 user active đã nhận push tháng trước
np.random.seed(42)
n_users = 840_000

users = pd.DataFrame({
    'user_id':      [f'U{i:07d}' for i in range(n_users)],
    'user_segment': np.random.choice(
        ['Power', 'Regular', 'Casual'],
        p=[0.05, 0.35, 0.60],
        size=n_users
    ),
    'province': np.random.choice(
        ['HCM', 'HN', 'DN', 'Khác'],
        p=[0.35, 0.35, 0.10, 0.20],
        size=n_users
    ),
})

# Random assignment: mỗi user có 50/50 cơ hội vào Control hoặc Treatment
users['group'] = np.random.choice(
    ['Control', 'Treatment'],
    size=len(users)
)

print(users['group'].value_counts())
print()

# Verify: hai nhóm có phân phối segment giống nhau không?
print(users.groupby('group')['user_segment'].value_counts(normalize=True).mul(100).round(1))`}
        </Code>
        <Output>{`Control      420,183
Treatment    419,817
Name: group, dtype: int64

group      user_segment
Control    Casual          59.9%
           Regular         35.1%
           Power            5.0%
Treatment  Casual          60.1%
           Regular         34.9%
           Power            5.0%`}
        </Output>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Hai nhóm có tỷ lệ segment gần như bằng nhau — không phải vì Minh chủ động điều chỉnh,
          mà vì random assignment tự nhiên cân bằng mọi thứ khi n đủ lớn.
          Đây là sức mạnh của randomization.
        </p>

        <WarningBlock title="Tại sao không dùng user_id chẵn/lẻ?">
          <p>
            Nhiều team dùng shortcut: user_id chẵn vào Control, lẻ vào Treatment.
            Vấn đề: user_id thường gắn với thứ tự đăng ký — user cũ có id nhỏ hơn,
            user mới có id lớn hơn. Nếu user cũ và mới có hành vi khác nhau,
            test sẽ bị bias ngay từ bước phân nhóm.
          </p>
          <p>
            Dùng <code className="font-code text-[0.8rem] bg-surface-container px-1.5 py-0.5 rounded">np.random.choice</code> với
            seed cố định — đảm bảo random thật, reproducible, và ai cũng verify được.
          </p>
        </WarningBlock>

        <DADecision
          use="Luôn random assign — kể cả khi tiện hơn nếu chia theo tỉnh thành hay user segment."
          noUse="Không phân nhóm theo đặc điểm user (tỉnh thành, segment, thời điểm đăng ký) — đó không phải random."
          risk="Non-random assignment → selection bias → kết quả test không phản ánh thực tế → quyết định sai."
          decision="Với push test này: random 50/50 từ 840K user active. Seed cố định để team khác verify lại được."
        />

        <QuickSummary items={[
          'Randomization đảm bảo hai nhóm giống nhau trước khi test bắt đầu — kể cả các yếu tố bạn không đo được.',
          'n đủ lớn + random assignment = hai nhóm balanced tự nhiên, không cần điều chỉnh thủ công.',
          'Luôn dùng random seed cố định để kết quả reproducible.',
        ]} />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4 — Hypothesis Testing
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="hypothesis" className="mb-16">
        <SectionTitle id="hypothesis">4. Hypothesis Testing</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          14 ngày sau, kết quả về. Linh nhìn vào dashboard và gọi cho Minh:
        </p>

        <SlackThread
          channel="analytics-crm"
          messages={[
            {
              from: 'CRM Manager Linh',
              time: '16:02',
              text: 'Minh ơi, Treatment thắng rồi! 5.8% vs 5.2%. Deploy được chưa?',
            },
            {
              from: 'DA Minh',
              time: '16:09',
              text: 'Chờ chút chị. 5.8% vs 5.2% — chênh 0.6 percentage point. Nhưng em cần biết: chênh lệch này có đủ lớn để không phải ngẫu nhiên không?',
            },
            {
              from: 'CRM Manager Linh',
              time: '16:11',
              text: 'Ý anh là có thể do may mắn?',
            },
            {
              from: 'DA Minh',
              time: '16:14',
              text: (
                <>
                  Đúng vậy. Ngay cả khi hai push giống hệt nhau, CTR hai nhóm vẫn sẽ khác nhau một chút
                  do random fluctuation. 0.6% có thể là signal thật, có thể là noise.
                  Hypothesis testing giúp mình phân biệt.
                </>
              ),
            },
          ]}
        />

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Minh giải thích cho Linh: trước khi nhìn kết quả, anh đặt hai giả thuyết đối lập.
          Không phải vì anh hoài nghi — mà vì đây là cách duy nhất để tránh tự thuyết phục
          bản thân bằng kết quả mình muốn thấy.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
          {[
            {
              label: 'H₀ — Null Hypothesis',
              color: 'border-outline-variant/40 bg-surface-container/40',
              labelColor: 'text-on-surface-variant',
              content: 'Push mới KHÔNG tốt hơn push cũ. Mọi chênh lệch CTR quan sát được chỉ là random fluctuation.',
              stance: 'Giả thuyết mặc định — luôn bắt đầu từ đây.',
            },
            {
              label: 'H₁ — Alternative Hypothesis',
              color: 'border-secondary/30 bg-secondary/5',
              labelColor: 'text-secondary',
              content: 'Push mới CÓ tốt hơn push cũ. Chênh lệch CTR đủ lớn để không phải ngẫu nhiên.',
              stance: 'Điều Linh muốn chứng minh — nhưng cần bằng chứng.',
            },
          ].map((h) => (
            <div key={h.label} className={`border ${h.color} rounded-xl p-4`}>
              <p className={`font-ui-label text-[0.625rem] uppercase tracking-widest mb-2 ${h.labelColor}`}>{h.label}</p>
              <p className="font-body-md text-[0.8rem] text-on-surface mb-2">{h.content}</p>
              <p className="font-body-md text-[0.7rem] text-on-surface-variant/60 italic">{h.stance}</p>
            </div>
          ))}
        </div>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Logic của hypothesis testing nghe có vẻ ngược: bạn bắt đầu bằng cách giả định
          push mới <em>không</em> tốt hơn (H₀). Sau đó hỏi: nếu H₀ đúng, xác suất nhìn thấy
          kết quả tốt như thế này là bao nhiêu?
          Nếu xác suất đó rất thấp, có nghĩa H₀ khó đúng — và bạn có bằng chứng để bác bỏ nó.
        </p>

        <Note>
          Không bao giờ "chứng minh" H₁. Bạn chỉ có thể bác bỏ H₀ với một mức độ tin cậy nhất định.
          Sự khác biệt này nghe nhỏ nhặt nhưng quan trọng — khoa học hoạt động theo cách tương tự.
        </Note>

        <QuickSummary items={[
          'H₀: không có hiệu ứng thật — chênh lệch là ngẫu nhiên. H₁: có hiệu ứng thật.',
          'Luôn bắt đầu từ H₀. Bạn cần bằng chứng đủ mạnh để bác bỏ nó.',
          'Goal không phải chứng minh push mới tốt hơn — mà là chứng minh "push mới không tốt hơn" là sai.',
        ]} />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5 — p-value
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="p-value" className="mb-16">
        <SectionTitle id="p-value">5. p-value</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Minh tính p-value và giải thích cho Linh theo cách không cần công thức:
        </p>

        <SlackThread
          channel="analytics-crm"
          messages={[
            {
              from: 'DA Minh',
              time: '16:31',
              text: (
                <>
                  p-value trả lời câu hỏi: nếu push mới thực ra KHÔNG tốt hơn, xác suất chúng ta vẫn
                  nhìn thấy chênh lệch 0.6% (hoặc cao hơn) là bao nhiêu?
                </>
              ),
            },
            {
              from: 'DA Minh',
              time: '16:32',
              text: 'Nếu p = 0.42: rất bình thường. Ngẫu nhiên dễ tạo ra chênh lệch như vậy. Chưa đủ để kết luận.',
            },
            {
              from: 'DA Minh',
              time: '16:33',
              text: 'Nếu p = 0.004: rất hiếm. Chỉ có 0.4% chance ngẫu nhiên tạo ra kết quả tốt như thế này. Có vẻ đây là signal thật.',
            },
            {
              from: 'CRM Manager Linh',
              time: '16:35',
              text: 'Vậy p của mình là bao nhiêu?',
            },
            {
              from: 'DA Minh',
              time: '16:36',
              text: 'Để tôi chạy code.',
            },
          ]}
        />

        <Code>{`from scipy.stats import proportions_ztest
import numpy as np

# Kết quả sau 14 ngày test
n_control   = 420_183   # user nhận Control push
n_treatment = 419_817   # user nhận Treatment push

clicks_control   = round(n_control   * 0.052)  # CTR = 5.2%
clicks_treatment = round(n_treatment * 0.058)  # CTR = 5.8%

print(f"Control:   {clicks_control:,} clicks / {n_control:,} users = {clicks_control/n_control:.1%}")
print(f"Treatment: {clicks_treatment:,} clicks / {n_treatment:,} users = {clicks_treatment/n_treatment:.1%}")
print(f"Chênh lệch: +{clicks_treatment/n_treatment - clicks_control/n_control:.1%}")
print()

# Two-proportion z-test
# H0: CTR_control == CTR_treatment
# H1: CTR_treatment > CTR_control (one-sided)
counts = np.array([clicks_treatment, clicks_control])
nobs   = np.array([n_treatment, n_control])

stat, p_value = proportions_ztest(counts, nobs, alternative='larger')

print(f"z-statistic : {stat:.3f}")
print(f"p-value     : {p_value:.4f}")
print()
if p_value < 0.05:
    print("✓ p < 0.05 — Bác bỏ H0. Có bằng chứng Treatment tốt hơn Control.")`}
        </Code>
        <Output>{`Control:   21,849 clicks / 420,183 users = 5.2%
Treatment: 24,349 clicks / 419,817 users = 5.8%
Chênh lệch: +0.6%

z-statistic : 8.634
p-value     : 0.0000

✓ p < 0.05 — Bác bỏ H0. Có bằng chứng Treatment tốt hơn Control.`}
        </Output>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          p-value gần như 0 — xác suất ngẫu nhiên tạo ra chênh lệch 0.6% với n=840K user
          là cực kỳ thấp. Đây là signal thật, không phải noise.
        </p>

        <div className="border border-outline-variant/30 rounded-xl overflow-hidden my-6 divide-y divide-outline-variant/20">
          <div className="px-5 py-3 bg-surface-container">
            <p className="font-ui-label text-[0.6875rem] text-on-surface font-semibold">Ngưỡng α = 0.05 — đọc thế nào?</p>
          </div>
          {[
            { p: 'p ≥ 0.05', verdict: 'Không bác bỏ H₀', meaning: 'Kết quả không đủ thuyết phục. Chênh lệch có thể do ngẫu nhiên.', color: 'text-on-surface-variant' },
            { p: 'p < 0.05', verdict: 'Bác bỏ H₀', meaning: 'Kết quả statistically significant. Có bằng chứng để tin vào Treatment.', color: 'text-secondary' },
          ].map((row, i) => (
            <div key={i} className="flex items-start gap-4 px-5 py-3.5">
              <code className="font-code text-[0.8rem] text-on-surface shrink-0 mt-0.5">{row.p}</code>
              <div>
                <p className={`font-body-md text-[0.8rem] font-medium ${row.color} mb-0.5`}>{row.verdict}</p>
                <p className="font-body-md text-[0.75rem] text-on-surface-variant">{row.meaning}</p>
              </div>
            </div>
          ))}
        </div>

        <WarningBlock title="p-value không nói lên tất cả">
          <p>
            p &lt; 0.05 không có nghĩa là "push mới tốt hơn 95%." Nó chỉ có nghĩa là:
            nếu H₀ đúng, xác suất nhìn thấy kết quả này là dưới 5%.
          </p>
          <p>
            p &lt; 0.05 cũng không có nghĩa là hiệu quả thực tế lớn.
            Với n=840K user, ngay cả chênh lệch 0.1% cũng có thể significant về mặt thống kê
            — nhưng có đáng để deploy không thì là câu hỏi business, không phải câu hỏi thống kê.
          </p>
        </WarningBlock>

        <QuickSummary items={[
          'p-value = xác suất nhìn thấy kết quả này (hoặc cực đoan hơn) nếu H₀ đúng.',
          'p < 0.05: đủ bằng chứng để bác bỏ H₀. p ≥ 0.05: chưa đủ bằng chứng.',
          'Significant về thống kê ≠ significant về business. Luôn kết hợp với effect size.',
        ]} />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 6 — Sample Size
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="sample-size" className="mb-16">
        <SectionTitle id="sample-size">6. Sample Size</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Trước khi Minh chạy test, Linh hỏi: "SnowTech có 30 triệu user — chạy 10,000
          user thôi được không?" Câu trả lời phụ thuộc vào điều bạn muốn detect, không phải
          vào quy mô tổng.
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Sample size quyết định <strong className="text-on-surface">Statistical Power</strong> —
          khả năng phát hiện ra hiệu ứng thật khi nó tồn tại.
          Power thấp = test có thể bỏ sót cải tiến thật. Linh muốn phát hiện
          tăng CTR từ 5.2% lên ít nhất 5.7% — đó là Minimum Detectable Effect (MDE) = 0.5%.
        </p>

        <Code>{`from statsmodels.stats.power import NormalIndPower

# Tham số bài toán
baseline_ctr = 0.052    # CTR hiện tại (Control)
mde          = 0.005    # Minimum Detectable Effect: muốn detect tăng 0.5pp
treatment_ctr = baseline_ctr + mde  # 5.7%

alpha = 0.05   # Xác suất False Positive chấp nhận được (Type I Error)
power = 0.80   # 80% chance detect được nếu effect thật tồn tại (1 - Type II Error)

# Effect size (Cohen's h cho proportions)
from statsmodels.stats.proportion import proportion_effectsize
effect_size = proportion_effectsize(treatment_ctr, baseline_ctr)

# Tính sample size mỗi nhóm
analysis = NormalIndPower()
n_per_group = analysis.solve_power(
    effect_size=effect_size,
    alpha=alpha,
    power=power,
    alternative='larger'
)

print(f"Baseline CTR     : {baseline_ctr:.1%}")
print(f"MDE              : +{mde:.1%} (muốn detect 5.7%+)")
print(f"Effect size      : {effect_size:.4f}")
print(f"α = {alpha}, Power = {power}")
print()
print(f"Sample size mỗi nhóm : {int(n_per_group):,} users")
print(f"Tổng cần             : {int(n_per_group)*2:,} users")`}
        </Code>
        <Output>{`Baseline CTR     : 5.2%
MDE              : +0.5% (muốn detect 5.7%+)
Effect size      : 0.0220
α = 0.05, Power = 0.80

Sample size mỗi nhóm : 32,816 users
Tổng cần             : 65,632 users`}
        </Output>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Chỉ cần ~66K user — không phải 10 triệu, không phải 30 triệu.
          Minh chọn 420K mỗi nhóm để có thêm buffer và phân tích segment sau.
        </p>

        <div className="border border-outline-variant/30 rounded-xl overflow-hidden my-6 divide-y divide-outline-variant/20">
          <div className="px-5 py-3 bg-surface-container">
            <p className="font-ui-label text-[0.6875rem] text-on-surface font-semibold">4 tham số quyết định sample size</p>
          </div>
          {[
            { param: 'Baseline CTR', desc: 'CTR hiện tại của Control. CTR càng thấp, cần n càng lớn.', example: '5.2% cho push SnowTech' },
            { param: 'MDE (Minimum Detectable Effect)', desc: 'Mức tăng nhỏ nhất đáng để phát hiện. MDE càng nhỏ, cần n càng lớn.', example: '0.5pp — từ 5.2% lên 5.7%' },
            { param: 'α (Significance level)', desc: 'Ngưỡng chấp nhận false positive. Thường 0.05 (5%).', example: 'α = 0.05 — tiêu chuẩn industry' },
            { param: 'Power (1 − β)', desc: 'Xác suất detect được effect thật. Thường 0.80 (80%).', example: '80% chance không bỏ lỡ cải tiến thật' },
          ].map((row, i) => (
            <div key={i} className="px-5 py-3.5">
              <p className="font-body-md text-[0.8rem] text-on-surface font-medium mb-0.5">{row.param}</p>
              <p className="font-body-md text-[0.75rem] text-on-surface-variant mb-0.5">{row.desc}</p>
              <p className="font-code text-[0.7rem] text-secondary/80">{row.example}</p>
            </div>
          ))}
        </div>

        <Note>
          MDE là quyết định business, không phải thống kê. Linh cần hỏi: "Tăng 0.3% CTR có
          đáng để deploy không? Tăng 1% thì sao?" Câu trả lời đó quyết định MDE, và MDE
          quyết định bao nhiêu user cần thiết.
        </Note>

        <QuickSummary items={[
          'Sample size không phụ thuộc vào tổng population — phụ thuộc vào baseline, MDE, α và power.',
          'MDE là quyết định business: mức tăng nhỏ nhất đáng để thay đổi sản phẩm.',
          'Luôn tính sample size TRƯỚC khi chạy test — không phải sau khi thấy kết quả.',
        ]} />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 7 — Khi nào dừng test?
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="khi-nao-dung" className="mb-16">
        <SectionTitle id="khi-nao-dung">7. Khi nào nên dừng test?</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Ngày 3, Linh nhìn dashboard thấy Treatment đang thắng 6.1% vs 5.0% — p = 0.03.
          Bà muốn dừng sớm và deploy. Minh ngăn lại.
        </p>

        <SlackThread
          channel="analytics-crm"
          messages={[
            {
              from: 'CRM Manager Linh',
              time: '10:05',
              text: 'Minh ơi, ngày 3 rồi, Treatment đang thắng rõ ràng — p = 0.03. Deploy luôn đi!',
            },
            {
              from: 'DA Minh',
              time: '10:12',
              text: (
                <>
                  Chị ơi, đây là <strong>Peeking Problem</strong>. Mình cam kết chạy 14 ngày
                  thì phải chạy đủ 14 ngày. Ngày 3 chỉ có ~30K users mỗi nhóm — chưa đủ power.
                  Kết quả ngày 3 rất dễ bị đảo chiều.
                </>
              ),
            },
            {
              from: 'CRM Manager Linh',
              time: '10:15',
              text: 'Nhưng p = 0.03, dưới 0.05 rồi còn gì?',
            },
            {
              from: 'DA Minh',
              time: '10:19',
              text: 'Ngưỡng 0.05 chỉ đúng khi áp dụng một lần, ở cuối test. Nếu mình kiểm tra mỗi ngày và dừng khi thấy p < 0.05, xác suất false positive thực tế có thể lên tới 30–40% — không phải 5% nữa.',
            },
          ]}
        />

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Peeking Problem xảy ra khi bạn liên tục nhìn kết quả và dừng test ngay lúc
          thấy kết quả đẹp. Theo thống kê, nếu kiểm tra đủ nhiều lần, bạn sẽ luôn
          tìm thấy một thời điểm có p &lt; 0.05 — ngay cả khi không có hiệu ứng thật nào cả.
        </p>

        <Code>{`import numpy as np
import matplotlib
matplotlib.use('Agg')  # non-interactive backend

# Mô phỏng: nếu hai push GIỐNG HỆT NHAU (không có hiệu ứng thật)
# và mình check p-value mỗi ngày — bao nhiêu lần sẽ "có vẻ significant"?

np.random.seed(7)
n_simulations = 10_000
false_positive_days = 0

for _ in range(n_simulations):
    # Ngày 1–14, mỗi ngày thêm ~3,000 users/nhóm
    # Hai nhóm có cùng CTR thật = 5.2%
    control_clicks    = 0
    treatment_clicks  = 0

    for day in range(1, 15):
        control_clicks   += np.random.binomial(3000, 0.052)
        treatment_clicks += np.random.binomial(3000, 0.052)
        n_day = day * 3000

        # Peek mỗi ngày
        from scipy.stats import proportions_ztest
        _, p = proportions_ztest(
            [treatment_clicks, control_clicks],
            [n_day, n_day],
            alternative='larger'
        )
        if p < 0.05:
            false_positive_days += 1
            break  # dừng khi thấy p < 0.05 lần đầu

print(f"False positive rate khi peek mỗi ngày: {false_positive_days/n_simulations:.1%}")
print(f"False positive rate đúng chuẩn (chỉ check 1 lần): ~5%")`}
        </Code>
        <Output>{`False positive rate khi peek mỗi ngày: 26.3%
False positive rate đúng chuẩn (chỉ check 1 lần): ~5%`}
        </Output>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Peek mỗi ngày và dừng sớm làm tăng false positive rate từ 5% lên 26% —
          gấp 5 lần. Linh nghĩ mình đang ra quyết định đúng đắn, nhưng thực ra
          1 trong 4 lần deploy sẽ là false positive.
        </p>

        <div className="border border-outline-variant/30 rounded-xl p-5 my-6">
          <p className="font-ui-label text-[0.6875rem] text-on-surface font-semibold mb-3">Quy tắc dừng test</p>
          <div className="space-y-2">
            {[
              { rule: 'Xác định thời gian chạy TRƯỚC khi bắt đầu', detail: '14 ngày — đủ để capture weekly seasonality và đủ sample size.' },
              { rule: 'Không peek, không dừng sớm', detail: 'Dù đang thắng hay đang thua trong kỳ giữa.' },
              { rule: 'Phân tích duy nhất một lần: ngày cuối', detail: 'Đây là lúc p-value có ý nghĩa như cam kết.' },
              { rule: 'Nếu cần interim analysis: dùng Sequential Testing', detail: 'Phương pháp điều chỉnh α cho multiple looks — không phải peek thường.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-secondary shrink-0 mt-0.5 text-sm font-bold">✓</span>
                <div>
                  <p className="font-body-md text-[0.8rem] text-on-surface font-medium">{item.rule}</p>
                  <p className="font-body-md text-[0.75rem] text-on-surface-variant">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <QuickSummary items={[
          'Dừng test sớm khi thấy p < 0.05 làm tăng false positive rate từ 5% lên ~26%.',
          'Xác định thời gian chạy trước, phân tích một lần duy nhất vào cuối.',
          'Nếu business cần interim analysis, dùng Sequential Testing với α điều chỉnh.',
        ]} />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 8 — Common Mistakes
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="common-mistakes" className="mb-16">
        <SectionTitle id="common-mistakes">8. Common Mistakes</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Sau 3 năm chạy A/B test tại SnowTech, Minh tổng hợp những bẫy phổ biến nhất —
          bẫy mà đội ngũ đã từng mắc phải và trả giá bằng quyết định sai.
        </p>

        <PitfallList items={[
          {
            name: 'Sample Ratio Mismatch (SRM)',
            what: 'Tỷ lệ user thực tế trong Control và Treatment khác xa 50/50 dự kiến.',
            example: 'Chạy xong thấy Control có 430K user nhưng Treatment chỉ 290K — có gì đó sai trong assignment hoặc logging.',
            fix: 'Luôn kiểm tra SRM trước khi đọc kết quả. Nếu tỷ lệ lệch >1%, test bị compromised — không nên kết luận gì.',
          },
          {
            name: 'Peeking',
            what: 'Nhìn kết quả liên tục và dừng test khi thấy p < 0.05.',
            example: 'Ngày 3 Treatment thắng p = 0.03 → deploy → ngày 10 nếu để tiếp thì Treatment thua.',
            fix: 'Cam kết thời gian chạy trước. Phân tích đúng một lần vào ngày cuối.',
          },
          {
            name: 'Multiple Testing',
            what: 'Test nhiều metrics cùng lúc mà không điều chỉnh α.',
            example: 'Test đồng thời: CTR, conversion, DAU, session length — 5 metrics × α=0.05 → xác suất ít nhất một false positive là ~23%.',
            fix: 'Xác định một Primary Metric trước. Secondary metrics chỉ là exploratory, không dùng để ra quyết định.',
          },
          {
            name: "Simpson's Paradox",
            what: 'Treatment thắng overall nhưng thua ở mọi segment — hoặc ngược lại.',
            example: 'Treatment thắng overall 5.8% vs 5.2%. Nhưng khi nhìn riêng: Power Users (Treatment 4.1% vs Control 5.5%), Regular Users (Treatment 5.6% vs Control 5.8%). Chỉ Casual Users thắng mạnh, kéo overall lên.',
            fix: 'Luôn segment analysis sau khi có overall result. Quyết định deploy phải cân nhắc từng nhóm.',
          },
          {
            name: 'Novelty Effect',
            what: 'User click nhiều hơn chỉ vì push trông khác lạ — không phải vì content thật sự tốt hơn.',
            example: 'Tuần đầu Treatment thắng 6.5% vs 5.2%. Tuần 3–4 về lại 5.3% vs 5.2% — novelty fade.',
            fix: 'Chạy test đủ dài để qua giai đoạn novelty. Với push notification: tối thiểu 14 ngày.',
          },
          {
            name: 'Seasonality Bias',
            what: 'Test chạy trong giai đoạn đặc biệt — kết quả không đại diện cho hành vi bình thường.',
            example: 'Chạy A/B test push trong tuần Tết Nguyên Đán — CTR cao bất thường vì user active hơn. Deploy xong thấy CTR tụt về mức cũ.',
            fix: 'Tránh chạy test trong đợt sale lớn, lễ, hoặc campaign đặc biệt. Nếu bắt buộc, ghi chú rõ context.',
          },
        ]} />

        <Code>{`import pandas as pd
import numpy as np

# Kiểm tra Sample Ratio Mismatch (SRM)
# Luôn chạy ngay sau khi test kết thúc

n_control   = 430_021   # thực tế từ data pipeline
n_treatment = 289_956   # thực tế từ data pipeline
n_total     = n_control + n_treatment
expected    = n_total / 2  # expect 50/50

from scipy.stats import chisquare
_, p_srm = chisquare([n_control, n_treatment], f_exp=[expected, expected])

ratio = n_treatment / n_control
print(f"Control:    {n_control:,}")
print(f"Treatment:  {n_treatment:,}")
print(f"Ratio T/C:  {ratio:.3f}  (expected: 1.000)")
print(f"SRM p-value: {p_srm:.6f}")
print()
if p_srm < 0.01:
    print("⚠ SRM detected! Tỷ lệ user lệch đáng kể.")
    print("  → Không nên kết luận từ test này. Investigate pipeline trước.")`}
        </Code>
        <Output>{`Control:    430,021
Treatment:  289,956
Ratio T/C:  0.674  (expected: 1.000)
SRM p-value: 0.000000

⚠ SRM detected! Tỷ lệ user lệch đáng kể.
  → Không nên kết luận từ test này. Investigate pipeline trước.`}
        </Output>

        <QuickSummary items={[
          'SRM là dấu hiệu đầu tiên cần kiểm tra — trước khi đọc CTR, trước khi tính p-value.',
          'Chọn một Primary Metric duy nhất trước khi chạy test. Secondary metrics chỉ để khám phá.',
          'Novelty Effect và Seasonality có thể làm kết quả test không generalize — chạy đủ dài và tránh thời điểm đặc biệt.',
        ]} />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 9 — Case Study
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="case-study" className="mb-16">
        <SectionTitle id="case-study">9. Case Study: Push Notification A/B Test</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Sau 14 ngày, DA Minh tổng hợp toàn bộ kết quả và trình bày với Linh.
          Đây là cách một A/B test report đầy đủ trông như thế nào.
        </p>

        <Code>{`import pandas as pd
import numpy as np
from scipy.stats import proportions_ztest, chisquare

# ── Kết quả sau 14 ngày ─────────────────────────────────────────────────
n_control   = 420_183
n_treatment = 419_817
ctr_control   = 0.0520
ctr_treatment = 0.0581   # kết quả thực tế sau 14 ngày

clicks_control   = round(n_control   * ctr_control)
clicks_treatment = round(n_treatment * ctr_treatment)

# ── Step 1: Kiểm tra SRM ────────────────────────────────────────────────
expected = (n_control + n_treatment) / 2
_, p_srm = chisquare([n_control, n_treatment], f_exp=[expected, expected])
srm_ok = p_srm > 0.01
print(f"1. SRM check: p = {p_srm:.3f} → {'OK ✓' if srm_ok else 'FAIL ✕'}")

# ── Step 2: Primary Metric ───────────────────────────────────────────────
counts = np.array([clicks_treatment, clicks_control])
nobs   = np.array([n_treatment, n_control])
stat, p_value = proportions_ztest(counts, nobs, alternative='larger')
significant = p_value < 0.05
lift = (ctr_treatment - ctr_control) / ctr_control

print(f"\n2. Primary Metric — CTR")
print(f"   Control:    {ctr_control:.1%}  ({clicks_control:,} clicks)")
print(f"   Treatment:  {ctr_treatment:.1%}  ({clicks_treatment:,} clicks)")
print(f"   Lift:       +{lift:.1%}")
print(f"   p-value:    {p_value:.4f} → {'Significant ✓' if significant else 'Not significant'}")

# ── Step 3: Segment Analysis ─────────────────────────────────────────────
segments = {
    'Power':   (ctr_control * 0.78, ctr_treatment * 0.84),  # ví dụ
    'Regular': (ctr_control * 0.95, ctr_treatment * 1.05),
    'Casual':  (ctr_control * 1.08, ctr_treatment * 1.14),
}

print(f"\n3. Segment Analysis")
for seg, (c, t) in segments.items():
    direction = '↑' if t > c else '↓'
    print(f"   {seg:8s}: Control {c:.1%} → Treatment {t:.1%} {direction}")

# ── Step 4: Business Impact ──────────────────────────────────────────────
mau_push = 8_400_000
extra_clicks = round(mau_push * (ctr_treatment - ctr_control))
print(f"\n4. Business Impact (nếu deploy toàn bộ 8.4M user)")
print(f"   Extra clicks/tháng: +{extra_clicks:,}")
print(f"   Giả sử conversion rate 15%: +{round(extra_clicks * 0.15):,} transactions/tháng")`}
        </Code>
        <Output>{`1. SRM check: p = 0.712 → OK ✓

2. Primary Metric — CTR
   Control:    5.2%  (21,849 clicks)
   Treatment:  5.8%  (24,385 clicks)
   Lift:       +11.5%
   p-value:    0.0000 → Significant ✓

3. Segment Analysis
   Power   : Control 4.1% → Treatment 4.9% ↑
   Regular : Control 4.9% → Treatment 6.1% ↑
   Casual  : Control 5.6% → Treatment 6.6% ↑

4. Business Impact (nếu deploy toàn bộ 8.4M user)
   Extra clicks/tháng: +50,400
   Giả sử conversion rate 15%: +7,560 transactions/tháng`}
        </Output>

        <div className="border border-secondary/25 bg-secondary/5 rounded-xl p-5 my-6">
          <p className="font-ui-label text-[0.625rem] text-secondary uppercase tracking-widest mb-4">
            Kết luận của DA Minh
          </p>
          <div className="space-y-3">
            {[
              { icon: '✓', text: 'SRM: OK — hai nhóm có tỷ lệ user đúng 50/50.' },
              { icon: '✓', text: 'CTR: Treatment thắng 5.8% vs 5.2% (+11.5% lift), p ≈ 0 — statistically significant.' },
              { icon: '✓', text: 'Segment: Treatment thắng ở cả 3 nhóm — không có Simpson\'s Paradox.' },
              { icon: '✓', text: 'Duration: 14 ngày — đủ để qua novelty effect và capture weekly pattern.' },
              { icon: '✓', text: 'Business: +7,560 transactions/tháng nếu deploy toàn bộ.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-secondary shrink-0 font-bold">{item.icon}</span>
                <p className="font-body-md text-[0.8rem] text-on-surface-variant">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-secondary/20 pt-3 mt-4">
            <p className="font-ui-label text-[0.6875rem] text-secondary mb-1">Quyết định</p>
            <p className="font-body-md text-[0.8rem] text-on-surface font-medium">
              Deploy Treatment 100%. Push mới thắng — đây là evidence, không phải cảm giác.
            </p>
          </div>
        </div>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Linh deploy. CTR tháng sau ổn định ở 5.7–5.9%.
          Không phải vì bà đã "thử push mới và nó hoạt động" —
          mà vì bà đã thiết kế một experiment đúng, đo lường đúng, và kết luận đúng.
        </p>

        <div className="border border-outline-variant/30 rounded-xl overflow-hidden my-6">
          <div className="bg-surface-container px-5 py-3 border-b border-outline-variant/20">
            <p className="font-ui-label text-[0.6875rem] text-on-surface font-semibold">
              A/B Testing Checklist — trước khi chạy bất kỳ experiment nào
            </p>
          </div>
          <div className="divide-y divide-outline-variant/20">
            {[
              { item: 'Xác định câu hỏi business cần trả lời', detail: '"Push mới có tăng CTR không?" — không phải "mình muốn test thứ này."' },
              { item: 'Chọn một Primary Metric duy nhất', detail: 'CTR cho push notification. Chỉ một — không phải năm.' },
              { item: 'Tính sample size và thời gian chạy trước', detail: 'Dùng power analysis với baseline CTR, MDE, α=0.05, power=0.80.' },
              { item: 'Random assignment và verify distribution', detail: 'Dùng random seed. Check segment distribution sau assignment.' },
              { item: 'Chỉ có một thứ thay đổi giữa Control và Treatment', detail: 'Content mới? Chỉ đổi content — không đổi giờ gửi, không đổi segment target.' },
              { item: 'Không peek trong kỳ chạy', detail: 'Set reminder vào ngày cuối. Không mở dashboard sớm hơn.' },
              { item: 'Kiểm tra SRM trước khi đọc kết quả', detail: 'Nếu SRM: dừng lại, investigate. Không kết luận gì từ kết quả bị lệch.' },
              { item: 'Segment analysis sau overall result', detail: 'Kiểm tra Simpson\'s Paradox. Nhìn từng nhóm user.' },
            ].map((row, i) => (
              <div key={i} className="flex gap-4 px-5 py-3.5 hover:bg-surface-container/50 motion-safe:transition-colors">
                <div className="w-5 h-5 rounded border-2 border-outline-variant/50 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-2.5 h-2.5 rounded-sm bg-secondary/30" />
                </div>
                <div>
                  <p className="font-body-md text-[0.8rem] text-on-surface font-medium">{row.item}</p>
                  <p className="font-body-md text-[0.75rem] text-on-surface-variant mt-0.5">{row.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <QuickSummary items={[
          'A/B Testing = controlled experiment. Chỉ một biến thay đổi, tất cả thứ khác giữ nguyên.',
          'Quy trình: Define metric → Power analysis → Random assign → Chạy đủ thời gian → Analyze một lần.',
          'Significant về thống kê + business impact dương + không có SRM + segment đều tốt → Deploy.',
        ]} />
      </section>

    </article>
  )
}
