import type { TocItem } from '@/components/layout/TableOfContents'

export const edaTocItems: TocItem[] = [
  { id: 'eda-la-gi',        label: '1. EDA là gì?' },
  { id: 'eda-workflow',     label: '2. EDA Workflow' },
  { id: 'data-types',       label: '3. Data Types' },
  { id: 'distribution',     label: '4. Distribution' },
  { id: 'mean-median-mode', label: '5. Mean, Median, Mode' },
  { id: 'variability',      label: '6. Variability' },
  { id: 'percentiles',      label: '7. Percentiles' },
  { id: 'outliers',         label: '8. Outliers' },
  { id: 'visualization',    label: '9. Data Visualization' },
  { id: 'correlation',      label: '10. Correlation' },
  { id: 'case-study',       label: '11. Case Study' },
]

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

function IC({ children }: { children: string }) {
  return (
    <code className="font-code text-[0.875rem] bg-surface-container px-1.5 py-0.5 rounded text-secondary">
      {children}
    </code>
  )
}

/* ── QR Payment mini-dataset ──────────────────────────────────────────────── */

function TxTable() {
  const rows = [
    ['P_001', 'U1234', '45,000',     'HCM', 'F&B',    'Regular', '24'],
    ['P_002', 'U5678', '320,000',    'HN',  'Retail', 'Power',   '35'],
    ['P_003', 'U2345', '22,000',     'HCM', 'F&B',    'Casual',  '28'],
    ['P_004', 'U6789', '450,000',    'DN',  'Retail', 'Regular', '45'],
    ['P_005', 'U3456', '180,000',    'HN',  'Health', 'Regular', '52'],
    ['P_006', 'U7890', '28,000',     'HCM', 'F&B',    'Casual',  '19'],
    ['P_007', 'U4567', '150,000',    'HN',  'Health', 'Power',   '31'],
    ['P_008', 'U8901', '8,500,000',  'HCM', 'Retail', 'Power',   '38'],
    ['P_009', 'U1357', '55,000',     'DN',  'F&B',    'Casual',  '27'],
    ['P_010', 'U2468', '380,000',    'HN',  'Retail', 'Regular', '42'],
  ]
  const headers = ['payment_id', 'user_id', 'amount (VND)', 'province', 'category', 'user_segment', 'age']

  return (
    <div className="overflow-x-auto my-6 rounded-xl border border-outline-variant/30">
      <table className="w-full text-left border-collapse text-sm">
        <thead>
          <tr className="border-b border-outline-variant/30 bg-surface-container">
            {headers.map((h) => (
              <th key={h} className="font-code text-[0.75rem] text-secondary px-4 py-3 whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={`border-b border-outline-variant/20 ${row[0] === 'P_008' ? 'bg-secondary/5' : ''}`}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`font-code text-[0.8rem] px-4 py-2.5 whitespace-nowrap ${
                    row[0] === 'P_008' && j === 2 ? 'text-secondary font-semibold' : 'text-on-surface-variant'
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ── Main component ───────────────────────────────────────────────────────── */

export function EDAContent() {
  return (
    <article className="max-w-[720px] py-8 lg:py-10 lg:pr-8">

      {/* ── Header ── */}
      <p className="font-ui-label text-ui-label text-secondary uppercase tracking-widest mb-4">Module 1</p>
      <h1 className="font-display text-display text-on-surface mb-6 leading-[1.05]">
        Exploratory Data Analysis
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
        Kỹ năng số một của mọi Data Analyst giỏi không phải Machine Learning, không phải SQL phức tạp —
        mà là khả năng nhìn vào một tập dữ liệu và biết nó đang cố nói với bạn điều gì.
      </p>

      {/* ── Learning Objectives ── */}
      <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-6 mb-16">
        <p className="font-ui-label text-[0.625rem] text-secondary uppercase tracking-widest mb-4">
          Sau module này, bạn sẽ có thể
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            'Nhận một dataset mới và biết phải hỏi gì đầu tiên',
            'Phân biệt khi nào dùng Mean, khi nào dùng Median',
            'Phát hiện outlier và biết cách xử lý đúng',
            'Đọc được phân phối dữ liệu từ histogram',
            'Tránh bẫy "Correlation ≠ Causation" khi phân tích',
            'Trình bày 3 insights từ EDA với leader trong 5 phút',
          ].map((obj) => (
            <div key={obj} className="flex gap-3 items-start">
              <span className="text-secondary shrink-0 mt-0.5 font-semibold">✓</span>
              <p className="font-body-md text-body-md text-on-surface-variant">{obj}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          SECTION 1 — EDA là gì?
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="eda-la-gi" className="mb-16">
        <SectionTitle id="eda-la-gi">1. EDA là gì?</SectionTitle>

        <ScenarioBlock>
          <p>
            Tuần đầu tiên tại SnowTech. Analytics Lead Tuấn gửi cho bạn một task lúc 9 giờ sáng:
          </p>
          <div className="space-y-2 mt-1">
            {[
              { from: 'Analytics Lead', msg: '"QR TPV giảm 12% so với tháng trước. Trước khi ai đó đưa ra kết luận — hãy hiểu dữ liệu trước đã."' },
              { from: 'Growth Manager', msg: '"Acquisition campaign tháng này vẫn đang chạy bình thường. Nghĩa là vấn đề ở phía retention hay transaction?"' },
              { from: 'Merchant BU', msg: '"Merchant mới onboard tháng trước có vẻ ổn. Vậy tại sao TPV lại giảm?"' },
            ].map((q) => (
              <div key={q.from} className="flex gap-3 items-start">
                <span className="font-ui-label text-[0.6875rem] text-secondary uppercase tracking-wider shrink-0 pt-0.5 w-24">
                  {q.from}
                </span>
                <p className="font-body-md text-body-md text-on-surface italic">{q.msg}</p>
              </div>
            ))}
          </div>
          <p className="mt-2 text-on-surface-variant">
            Bạn có data trong tay. Nhưng chưa thực sự <strong className="text-on-surface">hiểu</strong> data.
            Đây là lúc EDA xuất hiện.
          </p>
        </ScenarioBlock>

        <div className="font-body-lg text-body-lg text-on-surface-variant space-y-5">
          <p>
            <strong className="text-on-surface">EDA — Exploratory Data Analysis</strong> là quá trình bạn
            "nhìn, sờ, ngửi" dữ liệu trước khi đưa ra bất kỳ kết luận hay đề xuất nào.
            Mục tiêu không phải chứng minh một giả thuyết — mà là{' '}
            <strong className="text-on-surface">hiểu dữ liệu đang cố nói với bạn điều gì.</strong>
          </p>
        </div>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4 mt-6">
          Dataset chúng ta dùng <strong className="text-on-surface">xuyên suốt module</strong> — 10 giao dịch
          QR Payment từ <IC>mart.fct_qr_payments</IC> join với <IC>mart.dim_user</IC>. Mỗi concept
          sẽ được minh họa trên chính dataset này:
        </p>

        <TxTable />

        <Code>{`import pandas as pd

data = {
    'payment_id':   ['P_001','P_002','P_003','P_004','P_005',
                     'P_006','P_007','P_008','P_009','P_010'],
    'user_id':      ['U1234','U5678','U2345','U6789','U3456',
                     'U7890','U4567','U8901','U1357','U2468'],
    'amount':       [45000, 320000, 22000, 450000, 180000,
                     28000, 150000, 8500000, 55000, 380000],
    'province':     ['HCM','HN','HCM','DN','HN','HCM','HN','HCM','DN','HN'],
    'category':     ['F&B','Retail','F&B','Retail','Health',
                     'F&B','Health','Retail','F&B','Retail'],
    'user_segment': ['Regular','Power','Casual','Regular','Regular',
                     'Casual','Power','Power','Casual','Regular'],
    'age':          [24, 35, 28, 45, 52, 19, 31, 38, 27, 42],
}

df = pd.DataFrame(data)
print(df.shape)
print(df.head())`}
        </Code>
        <Output>{`(10, 7)
  payment_id user_id   amount province category user_segment  age
0      P_001   U1234    45000      HCM      F&B      Regular   24
1      P_002   U5678   320000       HN   Retail        Power   35
2      P_003   U2345    22000      HCM      F&B       Casual   28
3      P_004   U6789   450000       DN   Retail      Regular   45
4      P_005   U3456   180000       HN   Health      Regular   52`}
        </Output>

        <div className="border border-outline-variant/30 bg-surface-container-low rounded-xl px-5 py-4 my-6">
          <p className="font-ui-label text-[0.625rem] text-secondary/70 uppercase tracking-widest mb-2">
            Về dataset này
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            10 dòng — nhỏ hơn rất nhiều so với thực tế SnowTech (~100 triệu giao dịch/tháng).
            Nhưng câu hỏi và kỹ thuật EDA hoàn toàn giống nhau.
            "10 dòng này có đại diện cho toàn bộ user không?" — đó là chủ đề của{' '}
            <strong className="text-on-surface">Module 2: Sampling</strong>.
          </p>
        </div>
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 2 — EDA Workflow
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="eda-workflow" className="mb-16">
        <SectionTitle id="eda-workflow">2. EDA Workflow — 5 bước thực chiến</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
          Trước khi đi vào từng concept chi tiết, hãy nhìn toàn bộ bản đồ. Mọi kỹ thuật
          trong module này phục vụ một trong 5 bước sau:
        </p>

        <div className="space-y-3">
          {[
            {
              step: '01',
              title: 'Hiểu Business Question',
              body: 'Bạn đang cố trả lời câu hỏi gì? "QR TPV giảm ở nhóm nào?" hay "User segment nào đang churn?" — câu hỏi quyết định bạn nhìn vào cột nào, nhóm nào.',
              tags: ['Trước khi code'],
            },
            {
              step: '02',
              title: 'Kiểm tra Data Types & Missing Values',
              body: 'Mỗi cột chứa loại dữ liệu gì? Có thiếu dữ liệu không? Đây là bước "kiểm tra sức khỏe" của dataset — không thể bỏ qua trước khi phân tích.',
              tags: ['df.info()', 'df.isnull()', 'df.dtypes'],
            },
            {
              step: '03',
              title: 'Khám phá Distribution & Central Tendency',
              body: 'Dữ liệu phân bố như thế nào? Giá trị trung tâm là bao nhiêu? Với QR transaction, phần lớn là nhỏ (F&B), nhưng một số rất lớn (Retail) — và sự bất đối xứng đó có ý nghĩa kinh doanh.',
              tags: ['Distribution', 'Mean', 'Median', 'Std Dev'],
            },
            {
              step: '04',
              title: 'Phát hiện Outliers',
              body: 'Có giao dịch nào bất thường không? Outlier có thể là lỗi data, hoặc là một merchant đặc biệt quan trọng cần điều tra riêng.',
              tags: ['IQR Method', 'Box Plot'],
            },
            {
              step: '05',
              title: 'Tìm Relationships & Tóm tắt Insights',
              body: 'TPV cao hơn ở nhóm nào? User segment nào giao dịch nhiều nhất? Province nào đang giảm? Correlation và groupby giúp trả lời những câu hỏi này.',
              tags: ['Correlation', 'groupby', 'Visualization'],
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex gap-5 border border-outline-variant/30 rounded-xl p-5 hover:border-secondary/30 motion-safe:transition-colors"
            >
              <div className="shrink-0">
                <span className="font-code text-[0.875rem] text-secondary/50 font-semibold">{item.step}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{item.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-3">{item.body}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="font-code text-[0.6875rem] text-secondary bg-secondary/8 border border-secondary/15 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Note>
          Module này đi sâu vào từng bước. Dataset QR payment là sợi chỉ đỏ xuyên suốt —
          mỗi concept được minh họa trên cùng một dữ liệu để bạn thấy bức tranh toàn cảnh.
        </Note>
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 3 — Data Types
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="data-types" className="mb-16">
        <SectionTitle id="data-types">3. Data Types</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Bước đầu tiên khi nhận dataset: biết mình đang làm việc với loại dữ liệu gì.
          Không phải vì học thuật — mà vì sai data type dẫn đến sai phân tích.
          Tính mean của cột <IC>province</IC> là vô nghĩa. Tính mode của cột <IC>amount</IC> thì thường không hữu ích.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
          {[
            {
              type: 'Numerical — Continuous',
              icon: '123',
              desc: 'Giá trị số, có thể nhận vô hạn giá trị trong một khoảng.',
              examples: 'amount, age',
              analysis: 'Mean, Median, Std, Histogram, Scatter plot',
            },
            {
              type: 'Numerical — Discrete',
              icon: '#',
              desc: 'Giá trị số nguyên đếm được.',
              examples: 'txn_count, overdue_days',
              analysis: 'Count, Mode, Bar chart',
            },
            {
              type: 'Categorical — Nominal',
              icon: 'Aa',
              desc: 'Nhãn phân loại, không có thứ tự.',
              examples: 'province, category, user_segment',
              analysis: 'Mode, Value counts, Bar chart',
            },
            {
              type: 'Categorical — Ordinal',
              icon: '↑',
              desc: 'Nhãn có thứ tự có ý nghĩa.',
              examples: 'kyc_status (pending/verified), merchant_segment',
              analysis: 'Median, Ordered bar chart',
            },
          ].map((d) => (
            <div key={d.type} className="border border-outline-variant/30 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-code text-[0.75rem] text-secondary bg-secondary/10 px-2 py-0.5 rounded">
                  {d.icon}
                </span>
                <p className="font-ui-label text-ui-label text-on-surface">{d.type}</p>
              </div>
              <p className="font-body-md text-[0.8rem] text-on-surface-variant mb-2">{d.desc}</p>
              <p className="font-body-md text-[0.75rem] text-on-surface-variant/70">
                <span className="text-on-surface font-medium">SnowTech: </span>{d.examples}
              </p>
              <p className="font-body-md text-[0.75rem] text-on-surface-variant/70 mt-0.5">
                <span className="text-on-surface font-medium">Dùng: </span>{d.analysis}
              </p>
            </div>
          ))}
        </div>

        <Code>{`# Bước đầu tiên với mọi dataset mới
print(df.dtypes)
print()
print(df.isnull().sum())
print()
print(df.describe())`}
        </Code>
        <Output>{`payment_id      object   ← categorical (ID)
user_id         object   ← categorical (ID)
amount           int64   ← numerical continuous ✓
province        object   ← categorical nominal
category        object   ← categorical nominal
user_segment    object   ← categorical nominal
age              int64   ← numerical discrete ✓

# Missing values:
payment_id      0
user_id         0
amount          0
province        0
category        0
user_segment    0
age             0
dtype: int64`}
        </Output>

        <Mistakes items={[
          'Đọc amount là "object" thay vì "int64" — xảy ra khi data có dấu phẩy ("45,000") → không tính được mean.',
          'Bỏ qua isnull().sum() — missing values trong cột amount hoặc user_segment sẽ làm lệch mọi thống kê sau đó.',
          'Treat user_id như numerical — tính mean của user_id là vô nghĩa, user_id chỉ là identifier.',
        ]} />

        <QuickSummary items={[
          'Numerical (amount, age): dùng mean, median, std, histogram.',
          'Categorical (province, category, segment): dùng value_counts(), mode, bar chart.',
          'Luôn chạy df.info() và df.isnull().sum() trước khi bất kỳ phân tích nào khác.',
        ]} />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 4 — Distribution
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="distribution" className="mb-16">
        <SectionTitle id="distribution">4. Distribution</SectionTitle>

        <ScenarioBlock>
          <p>
            Analytics Lead Tuấn hỏi: <em>"QR transaction amount phân bổ như thế nào?
            Đa số user đang chi bao nhiêu một lần?"</em>
          </p>
          <p>
            Trước khi trả lời, bạn cần hiểu <em>hình dạng</em> của dữ liệu — không chỉ mỗi con số trung bình.
          </p>
        </ScenarioBlock>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          <strong className="text-on-surface">Distribution</strong> mô tả dữ liệu của bạn phân bổ
          như thế nào — giá trị nào xuất hiện nhiều, giá trị nào hiếm, và hình dạng tổng thể là gì.
        </p>

        <Code>{`print(df['amount'].describe())

# Phân bổ theo category
print(df.groupby('category')['amount'].agg(['count', 'mean', 'median']))`}
        </Code>
        <Output>{`count         10.000000
mean     1,013,000.000000   ← bị kéo cao bởi P_008
std      2,598,441.000000
min         22,000.000000
25%         36,500.000000
50%        165,000.000000   ← median ổn định hơn
75%        357,500.000000
max      8,500,000.000000

         count      mean  median
category
F&B          4    37,500  40,000   ← nhỏ, thanh toán hàng ngày
Health       2   165,000 165,000
Retail       4 2,412,500 385,000   ← mean bị kéo cao bởi P_008`}
        </Output>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Đây là phân phối <strong className="text-on-surface">lệch phải (right-skewed)</strong>:
          phần lớn giao dịch là nhỏ (F&B dưới 100K), nhưng một số giao dịch Retail rất lớn
          kéo đuôi phân phối về phía phải. Hình dạng này phổ biến trong mọi Fintech — không phải ngoại lệ.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
          {[
            {
              shape: 'Symmetric (Normal)',
              icon: '⌃',
              desc: 'Mean ≈ Median. Phân phối đều hai phía.',
              fintech: 'Hiếm gặp trong transaction data. Có thể thấy ở age distribution.',
            },
            {
              shape: 'Right-Skewed',
              icon: '⌃→',
              desc: 'Mean > Median. Đuôi dài về phía phải.',
              fintech: 'QR payment amount, wallet balance, loan amount — phổ biến nhất.',
            },
            {
              shape: 'Left-Skewed',
              icon: '←⌃',
              desc: 'Mean < Median. Đuôi dài về phía trái.',
              fintech: 'Credit score (nhiều user score cao, ít user score rất thấp).',
            },
          ].map((s) => (
            <div key={s.shape} className={`border rounded-xl p-4 ${s.shape === 'Right-Skewed' ? 'border-secondary/40 bg-secondary/5' : 'border-outline-variant/30'}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-code text-base text-secondary">{s.icon}</span>
                <p className="font-ui-label text-ui-label text-on-surface">{s.shape}</p>
              </div>
              <p className="font-body-md text-[0.8rem] text-on-surface-variant mb-2">{s.desc}</p>
              <p className="font-body-md text-[0.75rem] text-on-surface-variant/70 italic">{s.fintech}</p>
            </div>
          ))}
        </div>

        <Note>
          Khi phân phối lệch phải, <strong>Mean bị kéo cao hơn thực tế đa số user</strong>.
          Median mô tả "user điển hình" tốt hơn. Đây là lý do tại sao Section 5 quan trọng với Fintech DA.
        </Note>

        <QuickSummary items={[
          'Distribution cho bạn thấy hình dạng dữ liệu — không chỉ một con số tóm tắt.',
          'Transaction amount trong Fintech luôn right-skewed: nhiều giao dịch nhỏ, ít giao dịch rất lớn.',
          'Khi thấy right-skewed: Mean bị inflate bởi outlier. Dùng Median để mô tả user điển hình.',
        ]} />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 5 — Mean, Median, Mode
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="mean-median-mode" className="mb-16">
        <SectionTitle id="mean-median-mode">5. Mean, Median, Mode</SectionTitle>

        <ScenarioBlock>
          <p>
            Growth Manager hỏi: <em>"Average QR transaction amount của chúng ta là bao nhiêu?"</em>
          </p>
          <p>
            Bạn tính nhanh: <strong>1,013,000 VND</strong>. Growth Manager gật đầu và chuẩn bị
            đưa con số này vào slide monthly review.
          </p>
          <p>
            Analytics Lead Tuấn nhìn qua: <em>"P_008 là giao dịch gì vậy?"</em>
          </p>
        </ScenarioBlock>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          P_008 là một giao dịch 8.5 triệu đồng — một Power User mua thiết bị điện tử qua QR.
          Một giao dịch đó đang kéo <em>average</em> của toàn bộ dataset lên gấp 6 lần giá trị điển hình.
        </p>

        <Code>{`# So sánh Mean vs Median
print("=== Toàn bộ dataset (n=10) ===")
print(f"Mean:   {df['amount'].mean():>12,.0f} VND")
print(f"Median: {df['amount'].median():>12,.0f} VND")

# Loại bỏ outlier P_008
df_no_outlier = df[df['payment_id'] != 'P_008']
print()
print("=== Bỏ P_008 (n=9) ===")
print(f"Mean:   {df_no_outlier['amount'].mean():>12,.0f} VND")
print(f"Median: {df_no_outlier['amount'].median():>12,.0f} VND")`}
        </Code>
        <Output>{`=== Toàn bộ dataset (n=10) ===
Mean:      1,013,000 VND   ← bị P_008 kéo lên
Median:      165,000 VND   ← ổn định hơn

=== Bỏ P_008 (n=9) ===
Mean:        181,111 VND   ← gần Median hơn nhiều
Median:      150,000 VND   ← hầu như không đổi`}
        </Output>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Median chỉ thay đổi từ 165K → 150K khi bỏ P_008. Mean thay đổi từ 1.013M → 181K.
          Đây không phải bug — đây là đặc tính toán học:
        </p>

        <div className="border border-outline-variant/30 bg-surface-container rounded-xl divide-y divide-outline-variant/20 my-6">
          {[
            {
              measure: 'Mean',
              formula: 'Tổng tất cả giá trị / số lượng',
              strength: 'Tính được expected value, dùng trong tính toán tài chính',
              weakness: 'Bị kéo mạnh bởi outlier — phản ánh kém "user điển hình"',
              use: 'Khi muốn tính tổng: "Nếu user giao dịch n lần, tổng bao nhiêu?"',
            },
            {
              measure: 'Median',
              formula: 'Giá trị giữa sau khi sắp xếp',
              strength: 'Kháng outlier — mô tả đúng user điển hình',
              weakness: 'Không dùng trực tiếp trong tính tổng',
              use: 'Khi muốn biết "user trung bình trải nghiệm gì?" — dùng Median',
            },
            {
              measure: 'Mode',
              formula: 'Giá trị xuất hiện nhiều nhất',
              strength: 'Tốt nhất cho categorical data',
              weakness: 'Kém có ý nghĩa với continuous data (amount)',
              use: 'Province phổ biến nhất, category phổ biến nhất — categorical columns',
            },
          ].map((m) => (
            <div key={m.measure} className="px-5 py-4">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-ui-label text-ui-label text-secondary min-w-[60px]">{m.measure}</span>
                <span className="font-code text-[0.75rem] text-on-surface-variant/60">{m.formula}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[0.75rem]">
                <p className="font-body-md text-on-surface-variant"><span className="text-secondary">+</span> {m.strength}</p>
                <p className="font-body-md text-on-surface-variant"><span className="text-error/70">−</span> {m.weakness}</p>
                <p className="font-body-md text-on-surface-variant italic">{m.use}</p>
              </div>
            </div>
          ))}
        </div>

        <Code>{`# Mode cho categorical columns
print("Province phổ biến nhất:", df['province'].mode()[0])
print("Category phổ biến nhất:", df['category'].mode()[0])
print("Segment phổ biến nhất:", df['user_segment'].mode()[0])

# Median cho amount theo segment
print()
print(df.groupby('user_segment')['amount'].median().sort_values(ascending=False))`}
        </Code>
        <Output>{`Province phổ biến nhất: HCM
Category phổ biến nhất: F&B
Segment phổ biến nhất: Regular

user_segment
Power      320,000   ← median Power user cao hơn hẳn
Regular    250,000
Casual      40,000   ← median Casual user rất thấp (F&B chủ yếu)`}
        </Output>

        <Mistakes items={[
          'Báo cáo "average QR transaction 1,013,000 VND" — con số bị inflate bởi outlier, không phản ánh đại đa số user.',
          'Dùng Mean khi distribution bị skew mạnh — Growth Manager sẽ hiểu sai hành vi user thực tế.',
          'Tính Mode của cột amount — với continuous data có hàng triệu giá trị, mode không có ý nghĩa thực tế.',
        ]} />

        <QuickSummary items={[
          'Mean bị kéo bởi outlier → dùng Median khi data right-skewed (transaction amount, wallet balance).',
          'Median mô tả "user điển hình". Mean mô tả "expected value cho tính toán tổng".',
          'Mode dùng cho categorical: province, category, user_segment — không dùng cho amount.',
        ]} />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 6 — Variability
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="variability" className="mb-16">
        <SectionTitle id="variability">6. Variability</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Hai nhóm user có thể có cùng Median nhưng hành vi hoàn toàn khác nhau.
          Bạn cần đo thêm <strong className="text-on-surface">mức độ phân tán</strong> của dữ liệu.
        </p>

        <ScenarioBlock>
          <p>
            Risk Team hỏi: <em>"Loan amount của hai nhóm user trẻ (dưới 30) và trung niên (30+) có khác nhau không?"</em>
          </p>
          <p>
            Nếu chỉ nhìn median, câu trả lời có thể là "giống nhau." Nhưng nếu nhìn variability —
            bức tranh hoàn toàn khác.
          </p>
        </ScenarioBlock>

        <Code>{`# Variability của amount theo age group
df['age_group'] = df['age'].apply(lambda x: 'Dưới 30' if x < 30 else '30+')

stats = df.groupby('age_group')['amount'].agg([
    ('median', 'median'),
    ('std',    'std'),
    ('min',    'min'),
    ('max',    'max'),
    ('iqr',    lambda x: x.quantile(0.75) - x.quantile(0.25)),
])
print(stats)`}
        </Code>
        <Output>{`          median          std     min       max       iqr
age_group
30+       250,000  2,950,000  22,000  8,500,000  292,500
Dưới 30    40,000     13,000  22,000     55,000   26,500`}
        </Output>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Nhóm 30+ có median 250K, nhóm dưới 30 chỉ 40K — chênh nhau hơn 6 lần về "user điển hình."
          Nhưng điều đáng chú ý hơn: std của nhóm 30+ là 2.95 triệu — cho thấy trong nhóm này có cả user giao dịch rất nhỏ
          lẫn rất lớn (8.5M). Một nhóm vừa có median cao vừa có variability lớn — đây là thông tin quan trọng cho Risk Team khi đánh giá khả năng vay.
        </p>

        <div className="border border-outline-variant/30 bg-surface-container rounded-xl divide-y divide-outline-variant/20 my-6">
          {[
            {
              measure: 'Standard Deviation (Std)',
              desc: 'Mức độ phân tán trung bình quanh Mean.',
              fintech: 'Std của loan amount cao → portfolio đa dạng, risk phân tán',
              warning: 'Bị ảnh hưởng mạnh bởi outlier vì tính từ Mean',
            },
            {
              measure: 'IQR (Interquartile Range)',
              desc: 'Q3 − Q1. Khoảng chứa 50% user ở giữa.',
              fintech: 'IQR của wallet balance → hiểu hành vi 50% user mainstream',
              warning: 'Kháng outlier — dùng khi data có extreme values',
            },
            {
              measure: 'Variance',
              desc: 'Bình phương của Std. Đơn vị = VND².',
              fintech: 'Ít dùng trực tiếp trong business reporting — dùng Std thay thế',
              warning: 'Đơn vị bình phương khiến khó diễn giải trực quan',
            },
          ].map((v) => (
            <div key={v.measure} className="px-5 py-4">
              <p className="font-ui-label text-ui-label text-secondary mb-1">{v.measure}</p>
              <p className="font-body-md text-[0.8rem] text-on-surface-variant mb-1">{v.desc}</p>
              <p className="font-body-md text-[0.75rem] text-on-surface-variant/70">
                <span className="text-on-surface font-medium">SnowTech: </span>{v.fintech}
              </p>
              <p className="font-body-md text-[0.75rem] text-on-surface-variant/70 mt-0.5">
                <span className="text-error/60 font-medium">Lưu ý: </span>{v.warning}
              </p>
            </div>
          ))}
        </div>

        <Note>
          Rule of thumb: nếu <strong>Std &gt; Mean</strong>, data có outlier hoặc distribution rất skewed.
          Dataset này: Std = 2.6M, Mean = 1.013M → Std &gt; Mean → dấu hiệu rõ ràng của outlier.
        </Note>

        <QuickSummary items={[
          'Std đo mức phân tán quanh Mean. IQR đo mức phân tán của 50% user giữa.',
          'Data có outlier: IQR ổn định hơn Std để mô tả variability thực tế.',
          'Std > Mean là warning sign: nên kiểm tra outlier và distribution shape trước khi kết luận.',
        ]} />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 7 — Percentiles
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="percentiles" className="mb-16">
        <SectionTitle id="percentiles">7. Percentiles</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          CRM Manager Linh hỏi: <em>"Tôi muốn nhắm vào top 25% user chi tiêu nhiều nhất
          để gửi voucher Savings. Ngưỡng nào tôi cần dùng?"</em>
        </p>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Câu hỏi này không có câu trả lời từ Mean hay Median. Cần <strong className="text-on-surface">Percentile</strong> —
          giá trị chia dataset thành các phần theo tỷ lệ.
        </p>

        <Code>{`import numpy as np

# Percentile breakdown của transaction amount
percentiles = [10, 25, 50, 75, 90, 95, 99]
values = np.percentile(df['amount'], percentiles)

for p, v in zip(percentiles, values):
    print(f"P{p:2d}: {v:>10,.0f} VND")`}
        </Code>
        <Output>{`P10:     25,300 VND   ← 10% user chi dưới mức này
P25:     36,500 VND   ← Q1: 25% user chi dưới mức này
P50:    165,000 VND   ← Median
P75:    357,500 VND   ← Q3: 75% user chi dưới mức này
P90:    783,000 VND
P95:  4,327,500 VND   ← bắt đầu vùng "Power User heavy"
P99:  8,245,000 VND`}
        </Output>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Câu trả lời cho CRM Manager: ngưỡng P75 = 357,500 VND. User có transaction amount trên
          mức này thuộc top 25% theo chi tiêu.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
          {[
            {
              name: 'Q1 (P25) = 36,500 VND',
              desc: '25% giao dịch có amount dưới ngưỡng này. Chủ yếu là F&B Casual users.',
            },
            {
              name: 'Q2 (P50) = 165,000 VND',
              desc: 'Median — user điển hình của SnowTech chi khoảng này mỗi giao dịch QR.',
            },
            {
              name: 'Q3 (P75) = 357,500 VND',
              desc: 'Ngưỡng top 25% user chi tiêu nhiều. Dùng để target segment CRM.',
            },
            {
              name: 'IQR = Q3 − Q1 = 321,000 VND',
              desc: '50% user "mainstream" chi trong khoảng 36,500 – 357,500 VND.',
            },
          ].map((q) => (
            <div key={q.name} className="border border-outline-variant/30 rounded-xl p-4">
              <p className="font-code text-[0.8rem] text-secondary mb-1">{q.name}</p>
              <p className="font-body-md text-[0.8rem] text-on-surface-variant">{q.desc}</p>
            </div>
          ))}
        </div>

        <Note>
          Trong Fintech, percentile thường được dùng để định nghĩa user segment: Power Users là P90+,
          Heavy Users P75–P90, Regular Users P25–P75, Light Users dưới P25.
          Mỗi segment nhận chiến lược CRM khác nhau.
        </Note>

        <QuickSummary items={[
          'Percentile Pn: n% data nằm dưới giá trị này. P50 = Median.',
          'Q1/Q2/Q3 là P25/P50/P75. IQR = Q3 – Q1: khoảng chứa 50% user giữa.',
          'Fintech dùng percentile để define user segment, set threshold campaign, flag unusual transactions.',
        ]} />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 8 — Outliers
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="outliers" className="mb-16">
        <SectionTitle id="outliers">8. Outliers</SectionTitle>

        <ScenarioBlock>
          <p>
            P_008 đã xuất hiện nhiều lần trong module này — giao dịch 8.5 triệu đồng làm lệch
            mọi thống kê tổng hợp. Nhưng trước khi quyết định xử lý nó, cần biết:
            <em> P_008 là lỗi data, hay là thông tin quan trọng nhất trong dataset?</em>
          </p>
        </ScenarioBlock>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          <strong className="text-on-surface">Outlier</strong> là giá trị nằm xa phần lớn dữ liệu còn lại.
          Trong Fintech, outlier có thể là ba loại rất khác nhau về ý nghĩa:
        </p>

        <div className="space-y-3 my-6">
          {[
            {
              type: 'Data Error',
              icon: '✕',
              variant: 'error' as const,
              desc: 'Lỗi nhập liệu, lỗi pipeline, duplicate transaction bị count đôi.',
              action: 'Điều tra nguồn gốc → sửa hoặc xóa.',
              example: 'Amount = 0 VND, amount = 999999999 VND (test record)',
            },
            {
              type: 'Fraud / Anomaly',
              icon: '⚠',
              variant: 'warn' as const,
              desc: 'Hành vi bất thường: tần suất giao dịch đột biến, amount không hợp lệ.',
              action: 'Flag cho Risk Team, giữ trong dataset nhưng phân tích riêng.',
              example: 'User bình thường 50K/giao dịch, đột nhiên 50M VND — potential fraud.',
            },
            {
              type: 'Legitimate Extreme',
              icon: '→',
              variant: 'ok' as const,
              desc: 'Giao dịch hợp lệ nhưng ở extreme. Power user thực sự chi tiêu lớn.',
              action: 'Giữ trong dataset. Phân tích riêng cho segment này.',
              example: 'P_008: Power user mua thiết bị điện tử 8.5M — hoàn toàn hợp lệ.',
            },
          ].map((t) => {
            const borderCls = t.variant === 'error'
              ? 'border-error-container' : t.variant === 'warn'
              ? 'border-outline-variant/30' : 'border-secondary/30'
            const bgCls = t.variant === 'error'
              ? 'bg-error-container/20' : t.variant === 'warn'
              ? 'bg-surface-container' : 'bg-secondary/5'
            const iconCls = t.variant === 'error'
              ? 'text-on-error-container' : t.variant === 'warn'
              ? 'text-on-surface-variant' : 'text-secondary'
            return (
              <div key={t.type} className={`border rounded-xl overflow-hidden ${borderCls}`}>
                <div className={`px-5 py-3 flex items-center gap-2 ${bgCls}`}>
                  <span className={`text-sm font-semibold ${iconCls}`}>{t.icon}</span>
                  <p className={`font-ui-label text-ui-label ${iconCls}`}>{t.type}</p>
                </div>
                <div className="px-5 py-3 space-y-1">
                  <p className="font-body-md text-[0.8rem] text-on-surface-variant">{t.desc}</p>
                  <p className="font-body-md text-[0.75rem] text-on-surface">
                    <span className="font-medium">Xử lý: </span>{t.action}
                  </p>
                  <p className="font-body-md text-[0.75rem] text-on-surface-variant/60 italic">{t.example}</p>
                </div>
              </div>
            )
          })}
        </div>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Để phát hiện outlier một cách có hệ thống, dùng IQR Method:
        </p>

        <Code>{`Q1  = df['amount'].quantile(0.25)   # 36,500
Q3  = df['amount'].quantile(0.75)   # 357,500
IQR = Q3 - Q1                       # 321,000

lower_fence = Q1 - 1.5 * IQR       # 36,500 - 481,500 = -445,000 → không có outlier phía dưới
upper_fence = Q3 + 1.5 * IQR       # 357,500 + 481,500 = 839,000

outliers = df[df['amount'] > upper_fence]
print(f"Upper fence: {upper_fence:,.0f} VND")
print()
print(outliers[['payment_id', 'user_id', 'amount', 'category', 'user_segment']])`}
        </Code>
        <Output>{`Upper fence: 839,000 VND

  payment_id user_id    amount category user_segment
7      P_008   U8901  8500000   Retail        Power`}
        </Output>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          P_008 vượt ngưỡng 839,000 VND — là outlier theo IQR method.
          Bước tiếp theo: điều tra xem đây là loại outlier nào.
        </p>

        <Code>{`# Điều tra P_008
p008 = df[df['payment_id'] == 'P_008'].iloc[0]
print(f"User segment: {p008['user_segment']}")    # Power
print(f"Category:     {p008['category']}")         # Retail
print(f"Province:     {p008['province']}")         # HCM
print(f"Amount:       {p008['amount']:,.0f} VND")  # 8,500,000`}
        </Code>
        <Output>{`User segment: Power
Category:     Retail
Province:     HCM
Amount:       8,500,000 VND

→ Power user, HCM, mua Retail. Hợp lệ — không phải lỗi data, không phải fraud.
→ Quyết định: giữ trong dataset chính, nhưng phân tích tổng hợp dùng Median thay Mean.`}
        </Output>

        <WarningBlock title="⚠ Không được tự ý xóa outlier">
          <p>
            Xóa outlier mà không điều tra là một trong những sai lầm tệ nhất trong data analysis.
            P_008 là Power User hợp lệ — xóa đi sẽ làm lệch mọi phân tích về segment này.
          </p>
          <p>
            <strong>Quy tắc:</strong> Điều tra trước. Xóa chỉ khi xác định đó là data error.
            Nếu là legitimate extreme → giữ lại, phân tích riêng, và ghi chú trong báo cáo.
          </p>
        </WarningBlock>

        <QuickSummary items={[
          'IQR Method: outlier nằm ngoài [Q1 − 1.5×IQR, Q3 + 1.5×IQR]. Bước đầu phát hiện.',
          'Ba loại outlier: data error (sửa/xóa), fraud/anomaly (flag cho Risk), legitimate extreme (giữ, phân tích riêng).',
          'Không bao giờ xóa outlier mà không điều tra. Trong Fintech, outlier thường là user quan trọng nhất.',
        ]} />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 9 — Data Visualization
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="visualization" className="mb-16">
        <SectionTitle id="visualization">9. Data Visualization</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Số liệu thống kê giúp bạn hiểu dữ liệu. Visualization giúp bạn{' '}
          <em>communicate</em> điều đó với Growth Manager, CRM Manager và Analytics Lead
          trong 30 giây thay vì 5 phút đọc bảng số.
        </p>

        <div className="space-y-4 my-6">
          {[
            {
              chart: 'Histogram',
              use: 'Phân phối của một biến numerical',
              when: 'Muốn thấy shape của distribution (skewed? bimodal?)',
              code: "df['amount'].plot(kind='hist', bins=20)",
              example: 'Histogram của QR amount → thấy ngay right-skewed, phần lớn <200K',
            },
            {
              chart: 'Box Plot',
              use: 'Q1, Median, Q3, outlier trong một hình',
              when: 'So sánh distribution giữa các nhóm',
              code: "df.boxplot(column='amount', by='user_segment')",
              example: 'Box plot amount theo user_segment → Power user có IQR rộng hơn Casual',
            },
            {
              chart: 'Bar Chart',
              use: 'So sánh giá trị giữa các category',
              when: 'Categorical column: province, category, user_segment',
              code: "df['province'].value_counts().plot(kind='bar')",
              example: 'Bar chart theo province → HCM + HN chiếm 80% giao dịch',
            },
            {
              chart: 'Scatter Plot',
              use: 'Mối quan hệ giữa hai biến numerical',
              when: 'Kiểm tra correlation, phát hiện pattern',
              code: "df.plot(kind='scatter', x='txn_count', y='total_amount')",
              example: 'txn_count vs total_amount → linear relationship rõ ràng',
            },
          ].map((v) => (
            <div key={v.chart} className="border border-outline-variant/30 rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <p className="font-ui-label text-ui-label text-secondary">{v.chart}</p>
                <span className="font-body-md text-[0.75rem] text-on-surface-variant/60 italic">{v.when}</span>
              </div>
              <p className="font-body-md text-[0.8rem] text-on-surface-variant mb-2">{v.use}</p>
              <code className="font-code text-[0.75rem] text-on-surface bg-surface-container px-3 py-1.5 rounded-lg block mb-2">{v.code}</code>
              <p className="font-body-md text-[0.75rem] text-secondary/80 italic">→ {v.example}</p>
            </div>
          ))}
        </div>

        <Note>
          Trong Fintech, hầu hết visualization được build trên dashboard (Metabase, Looker, Tableau) —
          không phải Python matplotlib. Nhưng hiểu <em>loại chart nào cho loại câu hỏi nào</em>
          là kỹ năng DA cần trước khi request BI team build chart.
        </Note>

        <QuickSummary items={[
          'Histogram → shape của distribution. Bar chart → so sánh categorical. Box plot → outlier + quartile.',
          'Scatter plot → relationship giữa 2 numerical variables.',
          'Chọn chart từ câu hỏi kinh doanh, không phải từ loại data. "Tôi muốn show gì cho ai?"',
        ]} />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 10 — Correlation
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="correlation" className="mb-16">
        <SectionTitle id="correlation">10. Correlation</SectionTitle>

        <ScenarioBlock>
          <p>
            Product Manager hỏi: <em>"User giao dịch nhiều hơn có chi tiêu tổng nhiều hơn không?
            Nếu có, mình nên push feature nào để tăng transaction frequency?"</em>
          </p>
          <p>
            Đây là câu hỏi về <strong>mối quan hệ</strong> giữa hai biến — không phải về từng biến riêng lẻ.
          </p>
        </ScenarioBlock>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          <strong className="text-on-surface">Correlation</strong> đo mức độ và hướng của mối quan hệ
          tuyến tính giữa hai biến numerical. Giá trị từ −1 đến +1:
        </p>

        <Code>{`# Tạo user-level aggregation từ transaction data
import pandas as pd

# Giả lập user stats từ full dataset (12M MAU)
user_stats = df.groupby('user_id').agg(
    txn_count=('payment_id', 'count'),
    total_amount=('amount', 'sum'),
    avg_amount=('amount', 'mean'),
).reset_index()

# Correlation matrix
corr = user_stats[['txn_count', 'total_amount', 'avg_amount']].corr()
print(corr.round(2))`}
        </Code>
        <Output>{`              txn_count  total_amount  avg_amount
txn_count          1.00          0.84        0.12
total_amount       0.84          1.00        0.61
avg_amount         0.12          0.61        1.00

→ txn_count vs total_amount: r = 0.84 (correlation cao)
→ txn_count vs avg_amount:   r = 0.12 (gần như không có correlation)`}
        </Output>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Kết quả: user giao dịch nhiều hơn có tổng chi tiêu nhiều hơn (r=0.84 — strong positive).
          Nhưng giao dịch nhiều hơn <em>không</em> có nghĩa là mỗi giao dịch lớn hơn (r=0.12 — gần zero).
          Product Manager cần hiểu sự khác biệt này trước khi thiết kế feature.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
          {[
            { range: '0.7 – 1.0', label: 'Strong Positive', color: 'text-secondary', example: 'txn_count vs total_amount (0.84)' },
            { range: '0.3 – 0.7', label: 'Moderate', color: 'text-on-surface-variant', example: 'total_amount vs avg_amount (0.61)' },
            { range: '0.0 – 0.3', label: 'Weak / No linear', color: 'text-on-surface-variant/50', example: 'txn_count vs avg_amount (0.12)' },
          ].map((c) => (
            <div key={c.range} className="border border-outline-variant/30 rounded-xl p-4 text-center">
              <p className={`font-code text-[0.875rem] font-semibold mb-1 ${c.color}`}>{c.range}</p>
              <p className="font-ui-label text-[0.75rem] text-on-surface mb-1">{c.label}</p>
              <p className="font-body-md text-[0.7rem] text-on-surface-variant/60 italic">{c.example}</p>
            </div>
          ))}
        </div>

        <WarningBlock title="⚠ Correlation ≠ Causation — Lỗi phổ biến nhất trong phân tích">
          <p>
            r=0.84 giữa txn_count và total_amount <strong>không có nghĩa là</strong>{' '}
            "tăng transaction frequency sẽ tăng tổng chi tiêu."
          </p>
          <p>
            Có thể cả hai đều bị ảnh hưởng bởi một biến thứ ba: <em>user engagement level</em>.
            User engaged hơn thì vừa giao dịch nhiều hơn, vừa chi tiêu nhiều hơn — nhưng chỉ push
            thêm notification không nhất thiết tạo ra engagement.
          </p>
          <p>
            Để xác nhận nhân quả, cần <strong>A/B Test</strong> — đó là Module 4.
          </p>
        </WarningBlock>

        <Mistakes items={[
          'Kết luận "feature X làm tăng retention" chỉ từ correlation — cần A/B test để xác nhận nhân quả.',
          'Pearson correlation chỉ đo linear relationship — nếu relationship là phi tuyến, r gần 0 nhưng vẫn có pattern.',
          'Báo cáo correlation cao là "good news" mà không hỏi "third variable nào có thể giải thích cả hai?"',
        ]} />

        <QuickSummary items={[
          'Correlation r: −1 (nghịch chiều), 0 (không tuyến tính), +1 (cùng chiều). |r| > 0.7 là strong.',
          'Pearson correlation chỉ đo linear relationship với numerical variables.',
          'Correlation ≠ Causation. Để kết luận nhân quả: cần A/B test hoặc causal inference.',
        ]} />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ══════════════════════════════════════════════════════════════
          SECTION 11 — Case Study
      ══════════════════════════════════════════════════════════════ */}
      <section aria-labelledby="case-study" className="mb-16">
        <SectionTitle id="case-study">11. Case Study: QR TPV giảm 12% — tìm nguyên nhân</SectionTitle>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          Cuối tuần đầu tiên tại SnowTech. Bạn tổng hợp lại toàn bộ EDA và chuẩn bị trình bày
          với Analytics Lead Tuấn. Đây là những gì data nói:
        </p>

        <div className="space-y-3 my-6">
          {[
            {
              finding: 'Distribution: right-skewed',
              detail: 'Median QR transaction = 165K VND. Mean = 1.013M — bị inflate bởi Power Users. F&B là category phổ biến nhất (40% giao dịch) nhưng amount thấp nhất.',
              implication: 'Nếu F&B transactions giảm, TPV giảm ít nhưng giao dịch count giảm nhiều. Nếu Retail giảm, TPV giảm nhiều hơn.',
            },
            {
              finding: 'Outlier: P_008 (8.5M VND)',
              detail: 'Một giao dịch Retail của Power User. Sau điều tra: hợp lệ, không phải fraud. Giữ trong dataset nhưng không đại diện cho "user điển hình".',
              implication: 'Power Users có hành vi rất khác Casual Users — cần phân tích theo segment, không thể dùng overall mean.',
            },
            {
              finding: 'Phân bổ địa lý: HCM + HN = 80%',
              detail: 'HCM: 40%, HN: 40%, DN: 20%. Không có outlier địa lý bất thường.',
              implication: 'Nếu TPV giảm đều cả HCM lẫn HN → vấn đề toàn quốc. Nếu giảm tập trung ở một tỉnh → vấn đề local.',
            },
            {
              finding: 'Correlation: txn_count vs total_amount = 0.84',
              detail: 'User giao dịch thường xuyên hơn → tổng chi tiêu cao hơn. Nhưng tần suất không liên quan đến size mỗi giao dịch.',
              implication: 'Nếu TPV giảm do Casual Users giảm tần suất F&B → chiến lược CRM: re-engage Casual Users, không phải upsell.',
            },
          ].map((f, i) => (
            <div key={i} className="border border-outline-variant/30 rounded-xl p-5">
              <p className="font-ui-label text-ui-label text-secondary mb-2">{f.finding}</p>
              <p className="font-body-md text-[0.8rem] text-on-surface-variant mb-2">{f.detail}</p>
              <div className="flex gap-2 pt-2 border-t border-outline-variant/20">
                <span className="text-secondary shrink-0 text-sm mt-0.5">→</span>
                <p className="font-body-md text-[0.8rem] text-on-surface">{f.implication}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-outline-variant/30 bg-surface-container rounded-xl p-5 my-6 space-y-4">
          <p className="font-ui-label text-[0.625rem] text-on-surface-variant/50 uppercase tracking-widest">
            Template — EDA Summary cho Analytics Lead
          </p>
          <div>
            <p className="font-ui-label text-ui-label text-on-surface mb-1">3 Insights chính</p>
            <ul className="space-y-1">
              {[
                'QR transactions tập trung ở F&B (frequency cao, amount thấp). Power Users chiếm số ít nhưng đóng góp TPV không cân xứng.',
                'Casual Users là nhóm có F&B transaction nhiều nhất — nếu nhóm này giảm frequency, TPV count giảm mạnh dù revenue impact nhỏ hơn.',
                'Correlation txn_count–total_amount cao (0.84) → re-engagement là đòn bẩy quan trọng hơn upsell để recover TPV.',
              ].map((item, i) => (
                <li key={i} className="flex gap-2 font-body-md text-body-md text-on-surface-variant">
                  <span className="text-secondary shrink-0">{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-outline-variant/20 pt-3">
            <p className="font-ui-label text-ui-label text-on-surface mb-1">Next Step đề xuất</p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Phân tích chi tiết theo user_segment × province cho tháng giảm vs tháng trước.
              Cần Sampling design để survey Casual Users về lý do giảm giao dịch — đó là Module 2.
            </p>
          </div>
        </div>

        <Note>
          EDA không kết thúc bằng một kết luận dứt khoát — nó kết thúc bằng những câu hỏi tốt hơn.
          "QR TPV giảm 12%" → sau EDA → "Cần hiểu tại sao Casual Users giảm F&B transaction.
          Cần survey — và cần Sampling để survey đúng cách." Đó là lý do Module 2 tồn tại.
        </Note>
      </section>

      {/* ── Sign-off ── */}
      <div className="border-t border-outline-variant/20 pt-10">
        <p className="font-body-md text-body-md text-on-surface-variant">
          Tiếp theo:{' '}
          <a href="/modules/sampling" className="text-secondary hover:underline">
            Module 2 — Data Sampling: Khi không thể survey toàn bộ 12 triệu user,
            làm sao chọn đúng 2,000 người đại diện? →
          </a>
        </p>
      </div>

    </article>
  )
}
