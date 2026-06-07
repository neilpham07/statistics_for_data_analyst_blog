import type { TocItem } from '@/components/layout/TableOfContents'

export const edaTocItems: TocItem[] = [
  { id: 'eda-la-gi', label: '1. EDA là gì?' },
  { id: 'eda-workflow', label: '2. EDA Workflow' },
  { id: 'data-types', label: '3. Data Types' },
  { id: 'distribution', label: '4. Distribution' },
  { id: 'mean-median-mode', label: '5. Mean, Median, Mode' },
  { id: 'variability', label: '6. Variability' },
  { id: 'percentiles', label: '7. Percentiles' },
  { id: 'outliers', label: '8. Outliers' },
  { id: 'data-visualization', label: '9. Data Visualization' },
  { id: 'correlation', label: '10. Correlation' },
  { id: 'case-study', label: '11. Case Study' },
]

/* ── Helpers ─────────────────────────────────────────────── */

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
      <p className="font-ui-label text-[0.625rem] text-secondary/80 uppercase tracking-widest mb-2">
        Output
      </p>
      <code className="font-code text-[0.8rem] text-inverse-on-surface/90 whitespace-pre leading-relaxed">
        {children}
      </code>
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

function DataTable() {
  const rows = [
    ['1001', '201', '24', 'F', 'HCM', '150,000', '2', 'Thời trang'],
    ['1002', '202', '35', 'M', 'HN',  '320,000', '5', 'Điện tử'],
    ['1003', '203', '28', 'F', 'HCM',  '85,000', '1', 'Thời trang'],
    ['1004', '204', '45', 'M', 'DN',  '450,000', '7', 'Điện tử'],
    ['1005', '205', '52', 'F', 'HN',  '200,000', '3', 'Sức khỏe'],
    ['1006', '206', '19', 'M', 'HCM',  '95,000', '2', 'Thời trang'],
    ['1007', '207', '31', 'F', 'HN',  '180,000', '3', 'Sức khỏe'],
    ['1008', '208', '38', 'M', 'HCM','2,500,000','15', 'Điện tử'],
    ['1009', '209', '27', 'F', 'DN',  '130,000', '2', 'Thời trang'],
    ['1010', '210', '42', 'M', 'HN',  '410,000', '6', 'Điện tử'],
  ]
  const headers = ['order_id','customer_id','age','gender','city','revenue (VND)','items','category']

  return (
    <div className="overflow-x-auto my-6 rounded-xl border border-outline-variant/30">
      <table className="w-full text-left border-collapse text-sm">
        <thead>
          <tr className="border-b border-outline-variant/30 bg-surface-container">
            {headers.map((h) => (
              <th key={h} className="font-code text-[0.75rem] text-secondary px-4 py-3 whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-b border-outline-variant/20 ${row[5] === '2,500,000' ? 'bg-secondary/5' : ''}`}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`font-code text-[0.8rem] px-4 py-2.5 whitespace-nowrap ${
                    row[5] === '2,500,000' && j === 5
                      ? 'text-secondary font-semibold'
                      : 'text-on-surface-variant'
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

/* ── Main component ──────────────────────────────────────── */

export function EDAContent() {
  return (
    <article className="max-w-[720px] py-8 lg:py-10 lg:pr-8">

      {/* ── Header ── */}
      <p className="font-ui-label text-ui-label text-secondary uppercase tracking-widest mb-4">
        Module 1
      </p>
      <h1 className="font-display text-display text-on-surface mb-6 leading-[1.05]">
        Exploratory Data Analysis
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
        Kỹ năng số một của mọi Data Analyst giỏi không phải Machine Learning, không phải SQL phức
        tạp — mà là khả năng nhìn vào một file dữ liệu và biết nó đang cố nói với bạn điều gì.
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
            'Đọc được phân phối dữ liệu từ biểu đồ histogram',
            'Tránh bẫy "Correlation ≠ Causation" khi phân tích',
            'Trình bày 3 insights từ EDA với sếp trong 5 phút',
          ].map((obj) => (
            <div key={obj} className="flex gap-3 items-start">
              <span className="text-secondary shrink-0 mt-0.5 font-semibold">✓</span>
              <p className="font-body-md text-body-md text-on-surface-variant">{obj}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 1. EDA là gì? ── */}
      <section aria-labelledby="eda-la-gi" className="mb-16">
        <SectionTitle id="eda-la-gi">1. EDA là gì?</SectionTitle>

        <ScenarioBlock>
          <p>
            Bạn vừa nhận được file dữ liệu đơn hàng từ hệ thống của một sàn thương mại điện tử. Trong
            buổi chiều hôm đó, ba người nhắn tin cho bạn:
          </p>
          <div className="space-y-2 mt-1">
            {[
              { from: 'Marketing', msg: '"Khách hàng của chúng ta thực sự là ai? Họ ở đâu, mua gì, bao nhiêu tuổi?"' },
              { from: 'CEO', msg: '"Vì sao doanh thu tháng này thấp hơn tháng trước 20%? Nhóm nào đang kéo xuống?"' },
              { from: 'Product', msg: '"Nhóm người dùng nào có giá trị đơn hàng cao nhất để chúng ta tập trung?"' },
            ].map((q) => (
              <div key={q.from} className="flex gap-3 items-start">
                <span className="font-ui-label text-[0.6875rem] text-secondary uppercase tracking-wider shrink-0 pt-0.5 w-20">
                  {q.from}
                </span>
                <p className="font-body-md text-body-md text-on-surface italic">{q.msg}</p>
              </div>
            ))}
          </div>
          <p className="mt-2 text-on-surface-variant">
            Bạn có dữ liệu trong tay. Nhưng bạn chưa thực sự <strong className="text-on-surface">hiểu</strong> dữ liệu. Đây là lúc EDA xuất hiện.
          </p>
        </ScenarioBlock>

        <div className="font-body-lg text-body-lg text-on-surface-variant space-y-5">
          <p>
            <strong className="text-on-surface">EDA — Exploratory Data Analysis</strong> (Phân tích dữ liệu
            khám phá) là quá trình bạn &quot;nhìn, sờ, ngửi&quot; dữ liệu trước khi đưa ra bất kỳ kết
            luận hay quyết định kinh doanh nào. Mục tiêu không phải là chứng minh một định lý toán học,
            mà là: <strong className="text-on-surface">hiểu dữ liệu đang cố nói với bạn điều gì.</strong>
          </p>
        </div>

        <Note>
          <strong>Ẩn dụ thám tử:</strong> EDA giống như thám tử đến hiện trường vụ án. Trước khi chỉ
          tay kết tội ai, thám tử phải quan sát từng góc, tìm dấu vết bất thường, đặt câu hỏi. Bạn
          chính là thám tử đó — và file dữ liệu thô là hiện trường.
        </Note>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
          Đây là dataset chúng ta sẽ dùng <strong className="text-on-surface">xuyên suốt toàn bộ module</strong> —
          10 đơn hàng mẫu từ một sàn TMĐT Việt Nam. Mỗi concept sẽ được minh họa trên chính dataset này:
        </p>
        <DataTable />

        <Code>{`import pandas as pd

data = {
    'order_id':    [1001,1002,1003,1004,1005,1006,1007,1008,1009,1010],
    'customer_id': [201, 202, 203, 204, 205, 206, 207, 208, 209, 210],
    'age':         [24,  35,  28,  45,  52,  19,  31,  38,  27,  42],
    'gender':      ['F', 'M', 'F', 'M', 'F', 'M', 'F', 'M', 'F', 'M'],
    'city':        ['HCM','HN','HCM','DN','HN','HCM','HN','HCM','DN','HN'],
    'revenue':     [150000,320000,85000,450000,200000,
                    95000,180000,2500000,130000,410000],
    'items_count': [2, 5, 1, 7, 3, 2, 3, 15, 2, 6],
    'category':    ['Thời trang','Điện tử','Thời trang','Điện tử','Sức khỏe',
                    'Thời trang','Sức khỏe','Điện tử','Thời trang','Điện tử'],
}

df = pd.DataFrame(data)
print(df.shape)
print(df.head())`}</Code>
        <Output>{`(10, 8)
   order_id  customer_id  age gender city  revenue  items_count    category
0      1001          201   24      F  HCM   150000            2  Thời trang
1      1002          202   35      M   HN   320000            5    Điện tử
2      1003          203   28      F  HCM    85000            1  Thời trang
3      1004          204   45      M   DN   450000            7    Điện tử
4      1005          205   52      F   HN   200000            3   Sức khỏe`}</Output>

        <div className="border border-outline-variant/30 bg-surface-container-low rounded-xl px-5 py-4 my-6">
          <p className="font-ui-label text-[0.625rem] text-secondary/70 uppercase tracking-widest mb-2">
            Lưu ý về dataset
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Dataset này có <strong className="text-on-surface">10 dòng</strong> — nhỏ hơn nhiều so với
            dữ liệu thực tế (thường hàng triệu đơn hàng). Nhưng các câu hỏi và kỹ thuật EDA hoàn toàn
            giống nhau. Câu hỏi &quot;Dataset nhỏ 10 dòng này có đại diện cho toàn bộ khách hàng không?&quot;
            — đó là chủ đề của <strong className="text-on-surface">Module 2: Sampling</strong>.
          </p>
        </div>
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ── 2. EDA Workflow ── */}
      <section aria-labelledby="eda-workflow" className="mb-16">
        <SectionTitle id="eda-workflow">2. EDA Workflow — 5 bước thực chiến</SectionTitle>

        <div className="font-body-lg text-body-lg text-on-surface-variant space-y-4 mb-8">
          <p>
            Trước khi đi vào từng concept chi tiết, hãy nhìn toàn bộ bản đồ. Một Data Analyst làm EDA
            theo 5 bước — và mọi kỹ thuật chúng ta học đều phục vụ cho một trong những bước này.
          </p>
        </div>

        <div className="space-y-3">
          {[
            {
              step: '01',
              title: 'Hiểu Business Question',
              body: 'Bạn đang cố trả lời câu hỏi gì? "Khách hàng nào có giá trị cao nhất?" hay "Tại sao doanh thu giảm?" — câu hỏi quyết định bạn nhìn vào cột nào, nhóm nào.',
              tags: ['Trước khi code'],
            },
            {
              step: '02',
              title: 'Kiểm tra Data Types & Missing Values',
              body: 'Mỗi cột chứa loại dữ liệu gì? Có dữ liệu bị thiếu không? Đây là bước "kiểm tra sức khỏe" của dataset — không thể bỏ qua.',
              tags: ['Data Types', 'df.info()', 'df.isnull()'],
            },
            {
              step: '03',
              title: 'Khám phá Distribution & Central Tendency',
              body: 'Dữ liệu phân bố như thế nào? Giá trị trung tâm là bao nhiêu? Có bất đối xứng không? Đây là nơi Mean, Median, Distribution và Std Dev phát huy tác dụng.',
              tags: ['Distribution', 'Mean', 'Median', 'Std Dev'],
            },
            {
              step: '04',
              title: 'Phát hiện Outliers',
              body: 'Có giá trị nào bất thường không? Outlier có thể là lỗi dữ liệu, hoặc insight quan trọng nhất của toàn bộ phân tích.',
              tags: ['IQR Method', 'Box Plot'],
            },
            {
              step: '05',
              title: 'Tìm Relationships & Tóm tắt Insights',
              body: 'Các biến liên quan đến nhau như thế nào? Revenue cao hơn ở nhóm tuổi nào, thành phố nào, category nào? Correlation giúp trả lời những câu hỏi này.',
              tags: ['Correlation', 'groupby', 'Visualization'],
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex gap-5 border border-outline-variant/30 rounded-xl p-5 hover:border-secondary/30 motion-safe:transition-colors"
            >
              <div className="shrink-0">
                <span className="font-code text-[0.875rem] text-secondary/50 font-semibold">
                  {item.step}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
                  {item.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-3">{item.body}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-code text-[0.6875rem] text-secondary bg-secondary/8 border border-secondary/15 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Note>
          Phần còn lại của module sẽ đi sâu vào từng bước. Dataset ecommerce của chúng ta sẽ là sợi
          chỉ đỏ xuyên suốt — mỗi concept được minh họa trên cùng một dữ liệu để bạn thấy bức tranh
          hoàn chỉnh, không phải các mảnh ghép rời rạc.
        </Note>
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ── 3. Data Types ── */}
      <section aria-labelledby="data-types" className="mb-16">
        <SectionTitle id="data-types">3. Data Types</SectionTitle>

        <ScenarioBlock>
          <p>
            Bạn nhận được yêu cầu từ Marketing: <em>&quot;Tính revenue trung bình theo từng thành phố, và
            cho tôi biết gender trung bình của khách hàng ở mỗi thành phố.&quot;</em>
          </p>
          <p className="text-on-surface-variant mt-2">
            Bạn gõ <IC>df.groupby(&apos;city&apos;)[&apos;gender&apos;].mean()</IC> — Python báo lỗi. Tại sao? Vì{' '}
            <IC>gender</IC> không phải là số — không thể tính trung bình. Đây là lý do bạn phải hiểu
            Data Types trước khi làm bất kỳ phép tính nào.
          </p>
        </ScenarioBlock>

        <div className="font-body-lg text-body-lg text-on-surface-variant space-y-4 mb-6">
          <p>
            Kiểu dữ liệu quyết định <strong className="text-on-surface">bạn được phép làm gì</strong> với
            từng cột. Dùng sai kiểu dữ liệu → kết quả vô nghĩa hoặc lỗi. Có 4 loại chính:
          </p>
        </div>

        <div className="space-y-3 mb-8">
          {[
            {
              type: 'Numerical — Continuous',
              desc: 'Giá trị số liên tục, có thể chia nhỏ vô hạn. Phép tính số học hoàn toàn có ý nghĩa.',
              examples: 'revenue, tỉ lệ chuyển đổi, thời gian session',
              ops: 'mean(), median(), std(), histogram',
              color: 'bg-secondary/8 border-secondary/25',
            },
            {
              type: 'Numerical — Discrete',
              desc: 'Giá trị nguyên, đếm được. Không thể có "2.5 sản phẩm".',
              examples: 'items_count, số lượt mua, số sản phẩm tồn kho',
              ops: 'mean(), value_counts(), bar chart',
              color: 'bg-secondary/8 border-secondary/25',
            },
            {
              type: 'Categorical — Nominal',
              desc: 'Không có thứ tự, chỉ là nhãn phân loại. Không thể cộng hay so sánh lớn/nhỏ.',
              examples: 'gender, city, category, payment_method',
              ops: 'value_counts(), mode(), bar chart, groupby',
              color: 'bg-surface-container border-outline-variant/40',
            },
            {
              type: 'Categorical — Ordinal',
              desc: 'Có thứ tự rõ ràng (1 < 2 < 3...) nhưng khoảng cách giữa các bậc không đều.',
              examples: 'rating (1–5 sao), mức VIP (Bronze/Silver/Gold)',
              ops: 'value_counts(), median (cẩn thận), bar chart',
              color: 'bg-surface-container border-outline-variant/40',
            },
          ].map((item) => (
            <div key={item.type} className={`border rounded-xl p-5 ${item.color}`}>
              <p className="font-ui-label text-ui-label text-on-surface mb-1">{item.type}</p>
              <p className="font-body-md text-body-md text-on-surface-variant mb-2">{item.desc}</p>
              <p className="font-code text-[0.75rem] text-secondary/80 mb-1">
                Ví dụ trong dataset: {item.examples}
              </p>
              <p className="font-code text-[0.75rem] text-on-surface-variant/60">
                Dùng được: {item.ops}
              </p>
            </div>
          ))}
        </div>

        <Code>{`# Bước đầu tiên của mọi EDA: kiểm tra kiểu dữ liệu
print(df.dtypes)
print()
# describe() chỉ tóm tắt numerical columns — categorical bị bỏ qua
print(df.describe())`}</Code>
        <Output>{`order_id        int64
customer_id     int64
age             int64
gender         object   ← categorical (nominal)
city           object   ← categorical (nominal)
revenue         int64   ← numerical (continuous)
items_count     int64   ← numerical (discrete)
category       object   ← categorical (nominal)

       age      revenue  items_count
count   10.00     10.00        10.00
mean    34.10  452000.00         4.60
std     10.28  726124.55         4.22
min     19.00   85000.00         1.00
25%     27.25  135000.00         2.00
50%     33.50  190000.00         3.00
75%     42.75  387500.00         6.00
max     52.00  2500000.00       15.00`}</Output>

        <Mistakes
          items={[
            'Tính mean() của cột categorical (gender, city) — kết quả vô nghĩa hoặc lỗi.',
            'Dùng bar chart cho continuous data thay vì histogram — che giấu phân phối thật.',
            'Nhầm Ordinal với Nominal: rating 5 sao không phải gấp 5 lần rating 1 sao về "chất lượng".',
            'Không kiểm tra dtypes trước khi phân tích — lãng phí giờ đồng hồ debug sau đó.',
          ]}
        />

        <QuickSummary
          items={[
            'Numerical: có thể cộng, trừ, tính trung bình. Continuous = liên tục, Discrete = đếm được.',
            'Categorical: chỉ là nhãn. Nominal = không có thứ tự, Ordinal = có thứ tự.',
            'df.dtypes là dòng code đầu tiên bạn chạy với bất kỳ dataset nào.',
          ]}
        />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ── 4. Distribution ── */}
      <section aria-labelledby="distribution" className="mb-16">
        <SectionTitle id="distribution">4. Distribution</SectionTitle>

        <ScenarioBlock>
          <p>
            Bạn tính được: revenue trung bình = <strong>452,000 VND</strong>. Sếp hỏi: &quot;Vậy nếu
            tôi muốn chạy khuyến mãi cho khách hàng &apos;trung bình&apos;, tôi đặt mức giảm giá cho
            đơn hàng bao nhiêu VND?&quot;
          </p>
          <p className="text-on-surface-variant">
            Bạn trả lời &quot;khoảng 452k&quot; — và đó có thể là câu trả lời sai hoàn toàn. Vì{' '}
            <strong className="text-on-surface">con số trung bình không nói lên hình dạng của dữ liệu</strong>.
            Bạn cần hiểu Distribution trước khi tin vào bất kỳ con số tóm tắt nào.
          </p>
        </ScenarioBlock>

        <div className="font-body-lg text-body-lg text-on-surface-variant space-y-5 mb-6">
          <p>
            <strong className="text-on-surface">Distribution (Phân phối)</strong> mô tả hình dạng của
            dữ liệu — giá trị tập trung ở đâu, trải rộng như thế nào, có lệch sang một bên không.
            Đây là điều đầu tiên bạn cần &quot;nhìn&quot; trước khi tính bất kỳ con số tóm tắt nào.
          </p>
        </div>

        <Code>{`import matplotlib.pyplot as plt

fig, axes = plt.subplots(1, 2, figsize=(12, 4))

# Revenue: right-skewed do outlier 2.5M
axes[0].hist(df['revenue'], bins=8, color='#4e45d5', alpha=0.7, edgecolor='white')
axes[0].axvline(df['revenue'].mean(),   color='red',    ls='--', lw=2,
                label=f"Mean: {df['revenue'].mean()/1000:.0f}k")
axes[0].axvline(df['revenue'].median(), color='orange', ls='--', lw=2,
                label=f"Median: {df['revenue'].median()/1000:.0f}k")
axes[0].set_title('Revenue — Right-Skewed')
axes[0].legend()

# Age: roughly normal
axes[1].hist(df['age'], bins=6, color='#4e45d5', alpha=0.7, edgecolor='white')
axes[1].axvline(df['age'].mean(), color='red', ls='--', lw=2,
                label=f"Mean: {df['age'].mean():.1f}")
axes[1].set_title('Age — Roughly Normal')
axes[1].legend()

plt.tight_layout()
plt.savefig('distributions.png', dpi=150)`}</Code>

        <div className="bg-surface-container rounded-xl p-5 my-4">
          <p className="font-ui-label text-[0.625rem] text-secondary/80 uppercase tracking-widest mb-4">
            Kết quả trực quan
          </p>
          <div className="grid grid-cols-2 gap-6">
            {/* Revenue: right-skewed — bars decreasing from left to right with long right tail */}
            <div>
              <div
                className="h-28 rounded-lg flex items-end gap-0.5 px-3 pb-2 mb-3"
                style={{ background: 'linear-gradient(to top, #eeedf7, #f4f2fd)' }}
                aria-hidden="true"
              >
                {[82, 68, 42, 22, 10, 5, 2, 1].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-secondary rounded-sm opacity-75"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <p className="font-ui-label text-ui-label text-on-surface mb-1">
                Revenue — Right-Skewed
              </p>
              <p className="font-body-md text-[0.8125rem] text-on-surface-variant">
                Phần lớn đơn hàng ở mức thấp (85k–450k). Đuôi dài kéo sang phải do đơn 2.5M.{' '}
                <span className="text-red-500">Mean (452k)</span> nằm xa về phải so với{' '}
                <span className="text-amber-600">Median (190k)</span>.
              </p>
            </div>
            {/* Age: roughly normal */}
            <div>
              <div
                className="h-28 rounded-lg flex items-end gap-0.5 px-3 pb-2 mb-3"
                style={{ background: 'linear-gradient(to top, #eeedf7, #f4f2fd)' }}
                aria-hidden="true"
              >
                {[20, 45, 75, 80, 70, 40].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-secondary rounded-sm opacity-75"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <p className="font-ui-label text-ui-label text-on-surface mb-1">
                Age — Roughly Normal
              </p>
              <p className="font-body-md text-[0.8125rem] text-on-surface-variant">
                Phân phối gần đối xứng, tập trung ở 30–40 tuổi. Mean ≈ Median ≈ 34 tuổi. Không
                có outlier đáng kể.
              </p>
            </div>
          </div>
        </div>

        <div className="my-6">
          <p className="font-headline-md text-headline-md text-on-surface mb-4">
            3 hình dạng phân phối phổ biến nhất
          </p>
          <div className="grid grid-cols-3 gap-3">
            {[
              {
                name: 'Normal (Chuẩn)',
                desc: 'Đối xứng. Mean = Median. Phổ biến trong: chiều cao, điểm thi.',
                when: 'Mean và Median đều đáng tin cậy',
              },
              {
                name: 'Right-Skewed (Lệch phải)',
                desc: 'Đuôi dài bên phải. Mean > Median. Phổ biến trong: revenue, thu nhập.',
                when: 'Dùng Median thay vì Mean',
              },
              {
                name: 'Left-Skewed (Lệch trái)',
                desc: 'Đuôi dài bên trái. Mean < Median. Phổ biến trong: điểm thi dễ.',
                when: 'Dùng Median thay vì Mean',
              },
            ].map((item) => (
              <div key={item.name} className="border border-outline-variant/30 rounded-xl p-4">
                <p className="font-ui-label text-ui-label text-on-surface mb-2">{item.name}</p>
                <p className="font-body-md text-[0.8125rem] text-on-surface-variant mb-3">{item.desc}</p>
                <p className="font-code text-[0.6875rem] text-secondary/80">→ {item.when}</p>
              </div>
            ))}
          </div>
        </div>

        <Mistakes
          items={[
            'Báo cáo Mean mà không kiểm tra distribution trước — Mean vô nghĩa với right-skewed data.',
            'Nhìn vào Mean và Median giống nhau rồi bỏ qua distribution — có thể là bimodal (2 đỉnh).',
            'Dùng histogram với bins quá ít hoặc quá nhiều — che giấu hình dạng thật của dữ liệu.',
          ]}
        />

        <QuickSummary
          items={[
            'Nhìn histogram trước khi tin vào bất kỳ con số tóm tắt nào.',
            'Right-skewed (phổ biến trong revenue, thu nhập): Mean bị kéo lên bởi outlier → dùng Median.',
            'Khoảng cách giữa Mean và Median là dấu hiệu đầu tiên của skewed distribution hoặc outlier.',
          ]}
        />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ── 5. Mean, Median, Mode ── */}
      <section aria-labelledby="mean-median-mode" className="mb-16">
        <SectionTitle id="mean-median-mode">5. Mean, Median, Mode</SectionTitle>

        <ScenarioBlock label="Tình huống thực tế">
          <p>
            Thứ Hai sáng, bạn nhận email từ CEO: &quot;Cho tôi biết revenue trung bình mỗi đơn hàng
            của chúng ta.&quot; Bạn mở Python, gõ <IC>df[&apos;revenue&apos;].mean()</IC>, thấy{' '}
            <strong>452,000 VND</strong>, và gửi email trả lời.
          </p>
          <p className="text-on-surface-variant">
            Buổi chiều, CEO dùng con số đó để lên kế hoạch khuyến mãi cho &quot;khách hàng trung
            bình&quot; với mức giảm giá 50k cho đơn từ 400k. Chiến dịch thất bại vì 70% khách hàng
            thực tế chỉ chi tiêu 85k–200k — không ai đặt đơn 400k cả.
          </p>
          <p>
            <strong className="text-on-surface">Vấn đề:</strong> bạn dùng đúng hàm, nhưng sai thước
            đo. Mean = 452k bị kéo lên bởi một đơn hàng 2,500,000 VND duy nhất.
          </p>
        </ScenarioBlock>

        <div className="font-body-lg text-body-lg text-on-surface-variant space-y-4 mb-6">
          <p>
            Có 3 cách đo &quot;giá trị đại diện&quot; của một tập dữ liệu. Chọn sai thước đo là một
            trong những sai lầm phổ biến nhất của Junior DA.
          </p>
        </div>

        <Code>{`# ── Mean: Trung bình cộng ──────────────────────────────────
# Tổng tất cả giá trị / số lượng phần tử
mean_rev = df['revenue'].mean()
print(f"Mean revenue:   {mean_rev:>12,.0f} VND")

# ── Median: Giá trị chính giữa khi sắp xếp ─────────────────
# Không bị ảnh hưởng bởi outlier
median_rev = df['revenue'].median()
print(f"Median revenue: {median_rev:>12,.0f} VND")

# ── Mode: Giá trị xuất hiện nhiều nhất ─────────────────────
# Hữu ích cho categorical data
mode_city = df['city'].mode()[0]
print(f"Mode city:      {mode_city}")
print()

# Khoảng cách Mean - Median tiết lộ mức độ lệch
gap = mean_rev - median_rev
print(f"Khoảng cách Mean-Median: {gap:,.0f} VND ({gap/median_rev*100:.0f}% của Median)")`}</Code>
        <Output>{`Mean revenue:      452,000 VND
Median revenue:    190,000 VND
Mode city:         HCM

Khoảng cách Mean-Median: 262,000 VND (138% của Median)`}</Output>

        <div className="bg-secondary/5 border border-secondary/25 rounded-xl p-5 my-6">
          <p className="font-ui-label text-[0.625rem] text-secondary uppercase tracking-widest mb-3">
            Tại sao khoảng cách 138% lại quan trọng?
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Khi Mean lớn hơn Median đến 138%, đó là tín hiệu rõ ràng của{' '}
            <strong className="text-on-surface">right-skewed distribution</strong> với outlier
            nghiêm trọng. Mọi báo cáo dùng Mean trong trường hợp này đều đang &quot;nói dối&quot;
            — không phải cố ý, nhưng sai về mặt thống kê.
          </p>
        </div>

        <div className="overflow-x-auto my-6 rounded-xl border border-outline-variant/30">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-surface-container border-b border-outline-variant/30">
                {['Thước đo', 'Khi nào nên dùng', 'Khi nào KHÔNG dùng', 'Dataset của chúng ta'].map((h) => (
                  <th key={h} className="font-ui-label text-ui-label px-4 py-3 whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="font-body-md text-body-md text-on-surface-variant">
              {[
                [
                  'Mean',
                  'Phân phối chuẩn (normal), không có outlier',
                  'Có outlier cực đoan — revenue, lương, giá nhà',
                  '❌ Không phù hợp cho revenue (bị kéo bởi 2.5M)',
                ],
                [
                  'Median',
                  'Có outlier, phân phối lệch (skewed)',
                  'Khi cần tính toán tiếp (cộng hai median không có nghĩa)',
                  '✓ Đúng cho revenue — 190k đại diện khách hàng thật',
                ],
                [
                  'Mode',
                  'Categorical data — thành phố phổ biến nhất, category bán chạy',
                  'Continuous data — revenue, age (hiếm khi có hai đơn hàng cùng giá)',
                  '✓ Dùng cho city (HCM), category (Điện tử)',
                ],
              ].map(([m, yes, no, context]) => (
                <tr key={m} className="border-b border-outline-variant/20">
                  <td className="font-code text-[0.875rem] text-secondary px-4 py-3 whitespace-nowrap">{m}</td>
                  <td className="px-4 py-3">{yes}</td>
                  <td className="px-4 py-3 text-on-surface-variant/70">{no}</td>
                  <td className="px-4 py-3 text-[0.8125rem]">{context}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Mistakes
          items={[
            'Dùng Mean cho dữ liệu revenue, lương, giá nhà — đây đều là right-skewed, outlier kéo Mean lên.',
            'Báo cáo Mean mà không kiểm tra histogram trước — không biết mình dùng sai thước đo.',
            'Nghĩ rằng Median "ít chính xác hơn" Mean — sai. Median chính xác hơn khi có outlier.',
            'Dùng Mode cho numerical continuous data — hiếm khi có ý nghĩa vì giá trị ít lặp lại.',
          ]}
        />

        <QuickSummary
          items={[
            'Khoảng cách Mean-Median lớn → distribution lệch → dùng Median để báo cáo.',
            'Mean = công cụ mặc định của người mới. Median = công cụ của người biết dữ liệu.',
            'Mode hữu ích nhất cho categorical data: city nào phổ biến nhất, category nào bán chạy.',
          ]}
        />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ── 6. Variability ── */}
      <section aria-labelledby="variability" className="mb-16">
        <SectionTitle id="variability">6. Variability</SectionTitle>

        <ScenarioBlock>
          <p>
            Sếp nhận được báo cáo từ hai Data Analyst về hai nhóm khách hàng:
          </p>
          <div className="grid grid-cols-2 gap-3 mt-2">
            <div className="bg-background border border-outline-variant/30 rounded-lg p-3">
              <p className="font-ui-label text-ui-label text-on-surface mb-1">Nhóm A</p>
              <p className="font-body-md text-body-md text-on-surface-variant">Revenue trung bình: 200,000 VND</p>
              <p className="font-code text-[0.75rem] text-secondary/70 mt-1">180k / 195k / 200k / 205k / 220k</p>
            </div>
            <div className="bg-background border border-outline-variant/30 rounded-lg p-3">
              <p className="font-ui-label text-ui-label text-on-surface mb-1">Nhóm B</p>
              <p className="font-body-md text-body-md text-on-surface-variant">Revenue trung bình: 200,000 VND</p>
              <p className="font-code text-[0.75rem] text-secondary/70 mt-1">50k / 80k / 150k / 320k / 2,500k</p>
            </div>
          </div>
          <p className="text-on-surface-variant mt-3">
            Hai nhóm cùng Mean. Nhưng chiến lược marketing, phân khúc sản phẩm, và ngưỡng voucher
            phải hoàn toàn khác nhau. Chỉ biết Mean là chưa đủ — bạn cần biết dữ liệu{' '}
            <strong className="text-on-surface">phân tán</strong> như thế nào.
          </p>
        </ScenarioBlock>

        <div className="font-body-lg text-body-lg text-on-surface-variant space-y-4 mb-6">
          <p>
            <strong className="text-on-surface">Variability (Độ phân tán)</strong> đo mức độ các
            giá trị trong dataset trải rộng hay tập trung xung quanh giá trị trung tâm.
          </p>
        </div>

        <div className="space-y-6 mb-6">
          <div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
              Từ Range đến Standard Deviation
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              Tại sao cần 3 thước đo khác nhau? Vì mỗi thước đo giải quyết một vấn đề của thước
              đo trước:
            </p>
            <div className="space-y-3">
              {[
                {
                  step: 'Range',
                  formula: 'Max − Min',
                  problem: 'Chỉ dùng 2 điểm dữ liệu, hoàn toàn bị ảnh hưởng bởi outlier.',
                  use: 'Cái nhìn sơ bộ nhanh',
                },
                {
                  step: 'Variance',
                  formula: 'Trung bình của bình phương khoảng cách từ mỗi điểm đến Mean',
                  problem: 'Đơn vị bình phương (VND²) → không thể diễn giải trực tiếp.',
                  use: 'Cơ sở toán học cho nhiều phép tính',
                },
                {
                  step: 'Std Dev',
                  formula: '√Variance',
                  problem: 'Cùng đơn vị với dữ liệu gốc (VND) → có thể diễn giải được.',
                  use: 'Thước đo phân tán chính trong thực tế',
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 border border-outline-variant/20 rounded-lg p-4">
                  <div className="shrink-0 w-20">
                    <span className="font-code text-[0.875rem] text-secondary font-semibold">{item.step}</span>
                  </div>
                  <div>
                    <p className="font-code text-[0.8125rem] text-on-surface mb-1">= {item.formula}</p>
                    <p className="font-body-md text-[0.8125rem] text-on-surface-variant/70 mb-1">
                      Hạn chế: {item.problem}
                    </p>
                    <p className="font-body-md text-[0.8125rem] text-secondary/80">
                      Dùng khi: {item.use}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Code>{`# Range
revenue_range = df['revenue'].max() - df['revenue'].min()
print(f"Range:    {revenue_range:>12,.0f} VND")

# Variance — đơn vị VND², không diễn giải được trực tiếp
variance = df['revenue'].var()
print(f"Variance: {variance:>12,.0f}   ← VND² — con số này vô nghĩa trong báo cáo")

# Standard Deviation — cùng đơn vị VND, có thể diễn giải
std_dev = df['revenue'].std()
print(f"Std Dev:  {std_dev:>12,.0f} VND")
print()

# Ý nghĩa: so sánh Std Dev với Mean
mean_rev = df['revenue'].mean()
print(f"Mean:    {mean_rev:,.0f} VND")
print(f"Std Dev: {std_dev:,.0f} VND")
print(f"Std Dev / Mean = {std_dev/mean_rev:.1%}  → Độ biến thiên cực kỳ cao!")`}</Code>
        <Output>{`Range:    2,415,000 VND
Variance: 527,256,666,667   ← VND² — con số này vô nghĩa trong báo cáo
Std Dev:    726,125 VND

Mean:    452,000 VND
Std Dev: 726,125 VND
Std Dev / Mean = 160.6%  → Độ biến thiên cực kỳ cao!`}</Output>

        <Note>
          <strong>Quy tắc ngón tay cái:</strong> Khi Std Dev &gt; 50% Mean, dữ liệu phân tán rất cao —
          thường là dấu hiệu của outlier nghiêm trọng. Khi Std Dev &gt; Mean (như dataset này: 726k
          &gt; 452k), bạn gần như chắc chắn có outlier cần điều tra.
        </Note>

        <Mistakes
          items={[
            'Báo cáo Variance cho non-technical audience — đơn vị bình phương không ai hiểu được.',
            'Bỏ qua Std Dev sau khi biết Mean — hai nhóm cùng Mean nhưng Std Dev khác → chiến lược hoàn toàn khác.',
            'Không so sánh Std Dev với Mean — Std Dev 100k với dữ liệu 1M thì nhỏ, nhưng với dữ liệu 80k thì rất lớn.',
          ]}
        />

        <QuickSummary
          items={[
            'Range: nhanh nhưng nhạy cảm với outlier. Variance: cơ sở toán học. Std Dev: dùng trong báo cáo.',
            'Std Dev cùng đơn vị với dữ liệu (VND) → có thể nói "revenue phân tán ±726k quanh mean".',
            'Std Dev > Mean là tín hiệu đỏ: dataset có outlier nghiêm trọng, cần điều tra ngay.',
          ]}
        />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ── 7. Percentiles ── */}
      <section aria-labelledby="percentiles" className="mb-16">
        <SectionTitle id="percentiles">7. Percentiles</SectionTitle>

        <ScenarioBlock>
          <p>
            Marketing đề xuất: &quot;Chúng ta tặng voucher VIP 200k cho top 10% khách hàng có
            revenue cao nhất. Để tránh lãng phí ngân sách, chỉ những đơn hàng từ ngưỡng X VND
            trở lên mới được nhận.&quot;
          </p>
          <p className="text-on-surface-variant">
            Câu hỏi: X = bao nhiêu? Đây chính xác là câu hỏi mà Percentile trả lời.
          </p>
        </ScenarioBlock>

        <div className="font-body-lg text-body-lg text-on-surface-variant space-y-4 mb-6">
          <p>
            <strong className="text-on-surface">Percentile (Phân vị)</strong> cho bạn biết một giá
            trị đứng ở vị trí nào so với toàn bộ dữ liệu. P90 = 400,000 VND có nghĩa là 90% đơn
            hàng có revenue dưới 400,000 VND — hay ngược lại, chỉ 10% đơn hàng đạt từ 400,000 VND
            trở lên.
          </p>
          <p>
            Ba phân vị quan trọng nhất là <strong className="text-on-surface">Q1 (25%),
            Q2 (50%), Q3 (75%)</strong> — chia dataset thành 4 phần bằng nhau. Khoảng cách Q3 − Q1
            gọi là <strong className="text-on-surface">IQR (Interquartile Range)</strong> — thước
            đo phân tán không bị ảnh hưởng bởi outlier, vì nó bỏ qua 25% thấp nhất và 25% cao nhất.
          </p>
        </div>

        <Code>{`# Quartiles và IQR
q1  = df['revenue'].quantile(0.25)
q2  = df['revenue'].quantile(0.50)   # = median
q3  = df['revenue'].quantile(0.75)
iqr = q3 - q1

print(f"Q1  (25%): {q1:>10,.0f} VND  — 25% đơn hàng chi ít hơn mức này")
print(f"Q2  (50%): {q2:>10,.0f} VND  — Median: nửa trên / nửa dưới")
print(f"Q3  (75%): {q3:>10,.0f} VND  — 75% đơn hàng chi ít hơn mức này")
print(f"IQR:       {iqr:>10,.0f} VND  — phạm vi của 50% khách hàng giữa")
print()

# Trả lời câu hỏi Marketing: top 10% là từ ngưỡng nào?
p90 = df['revenue'].quantile(0.90)
print(f"P90 (90%): {p90:>10,.0f} VND  — top 10% đặt đơn từ đây trở lên")`}</Code>
        <Output>{`Q1  (25%):    135,000 VND  — 25% đơn hàng chi ít hơn mức này
Q2  (50%):    190,000 VND  — Median: nửa trên / nửa dưới
Q3  (75%):    387,500 VND  — 75% đơn hàng chi ít hơn mức này
IQR:          252,500 VND  — phạm vi của 50% khách hàng giữa

P90 (90%):    430,000 VND  — top 10% đặt đơn từ đây trở lên`}</Output>

        <div className="grid grid-cols-2 gap-4 my-6">
          <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5">
            <p className="font-ui-label text-ui-label text-on-surface mb-3">Ý nghĩa kinh doanh</p>
            <ul className="space-y-2">
              {[
                '50% khách hàng đặt đơn từ 135k–387k (vùng "mainstream")',
                'Top 10% bắt đầu từ 430k trở lên → voucher VIP nhắm vào đây',
                'IQR = 252k → dữ liệu của khách hàng giữa không quá phân tán',
              ].map((item) => (
                <li key={item} className="font-body-md text-[0.8125rem] text-on-surface-variant flex gap-2">
                  <span className="text-secondary shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5">
            <p className="font-ui-label text-ui-label text-on-surface mb-3">IQR vs Std Dev</p>
            <ul className="space-y-2">
              {[
                'IQR = 252k — phạm vi của 50% khách hàng "bình thường"',
                'Std Dev = 726k — bị kéo lên bởi outlier 2.5M',
                'IQR robust hơn Std Dev khi có outlier',
              ].map((item) => (
                <li key={item} className="font-body-md text-[0.8125rem] text-on-surface-variant flex gap-2">
                  <span className="text-secondary shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Mistakes
          items={[
            'Nhầm P90 với "top 10%" — P90 là ngưỡng mà 90% nằm dưới, không phải giá trị trung bình của top 10%.',
            'Dùng Std Dev thay IQR khi có outlier — Std Dev bị kéo lên, không đại diện cho vùng "bình thường".',
            'Không dùng Percentile khi phân khúc khách hàng — "khách hàng trung bình" không phải Mean mà nên là Q2.',
          ]}
        />

        <QuickSummary
          items={[
            'Percentile trả lời: "X% dữ liệu nằm dưới ngưỡng này" — công cụ phân khúc khách hàng cực mạnh.',
            'Q1/Q2/Q3 chia dataset thành 4 phần bằng nhau.',
            'IQR = Q3 − Q1: phạm vi của 50% giữa — không bị ảnh hưởng bởi outlier, dùng thay Std Dev khi cần.',
          ]}
        />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ── 8. Outliers ── */}
      <section aria-labelledby="outliers" className="mb-16">
        <SectionTitle id="outliers">8. Outliers</SectionTitle>

        <ScenarioBlock>
          <p>
            Sáng thứ Hai bạn vào làm, mở dashboard, thấy một thứ lạ: revenue của một đơn hàng hôm
            qua là <strong>2,500,000 VND</strong> — gấp 13 lần trung bình của 9 đơn còn lại.
          </p>
          <p className="text-on-surface-variant">
            Bạn có 3 giả thuyết: (1) Đây là khách VIP mua số lượng lớn để kinh doanh. (2) Lỗi hệ
            thống nhân đôi giá. (3) Test data ai đó quên xóa trước khi deploy. Cả 3 giả thuyết đều
            cần điều tra — không giả thuyết nào cho phép bạn xóa dữ liệu này ngay lập tức.
          </p>
        </ScenarioBlock>

        <div className="font-body-lg text-body-lg text-on-surface-variant space-y-4 mb-6">
          <p>
            <strong className="text-on-surface">Outlier (Ngoại lệ)</strong> là giá trị nằm rất xa
            so với phần còn lại của dữ liệu. Phương pháp phổ biến nhất để phát hiện outlier là{' '}
            <strong className="text-on-surface">IQR Method</strong>: bất kỳ giá trị nào nằm ngoài
            khoảng <IC>[Q1 − 1.5×IQR, Q3 + 1.5×IQR]</IC> được coi là outlier.
          </p>
          <p>
            Tại sao 1.5×IQR? Đây là quy tắc được John Tukey đề xuất — nó bắt được ~99.3% dữ liệu
            của một phân phối chuẩn. Với dữ liệu skewed như revenue, nó vẫn là điểm khởi đầu tốt,
            nhưng cần kết hợp với phán đoán nghiệp vụ.
          </p>
        </div>

        <Code>{`# IQR Method — phát hiện outlier
Q1  = df['revenue'].quantile(0.25)    # 135,000
Q3  = df['revenue'].quantile(0.75)    # 387,500
IQR = Q3 - Q1                         # 252,500

lower = Q1 - 1.5 * IQR                # -243,750 → âm, không áp dụng cho revenue
upper = Q3 + 1.5 * IQR                # 766,250

print(f"Ngưỡng dưới: {lower:,.0f} VND  (âm → không áp dụng)")
print(f"Ngưỡng trên: {upper:,.0f} VND")
print()

outliers = df[df['revenue'] > upper]
print(f"Số outlier phát hiện: {len(outliers)}")
print(outliers[['order_id', 'customer_id', 'revenue', 'items_count', 'city', 'category']])`}</Code>
        <Output>{`Ngưỡng dưới:    -243,750 VND  (âm → không áp dụng)
Ngưỡng trên:     766,250 VND

Số outlier phát hiện: 1
   order_id  customer_id  revenue  items_count city category
7      1008          208  2500000           15  HCM  Điện tử`}</Output>

        <div className="my-6">
          <p className="font-headline-md text-headline-md text-on-surface mb-4">
            Sau khi phát hiện outlier — phải làm gì?
          </p>
          <div className="space-y-3">
            {[
              {
                action: 'Điều tra nghiệp vụ trước',
                desc: 'Hỏi team vận hành: đơn hàng này có thật không? Khách hàng 208 là ai? Có lịch sử mua hàng trước đó không?',
                type: 'Bước bắt buộc',
                color: 'border-secondary/30 bg-secondary/5',
              },
              {
                action: 'Giữ nguyên nếu dữ liệu thật',
                desc: 'Nếu xác nhận là khách VIP mua sỉ, đây là insight quan trọng — có thể đây là phân khúc B2B đang bị bỏ sót.',
                type: 'Scenario 1',
                color: 'border-outline-variant/30 bg-surface-container',
              },
              {
                action: 'Xử lý riêng biệt nếu lỗi',
                desc: 'Nếu là lỗi hệ thống, ghi nhận và loại khỏi báo cáo — nhưng không xóa hoàn toàn, vì còn cần audit trail.',
                type: 'Scenario 2',
                color: 'border-outline-variant/30 bg-surface-container',
              },
              {
                action: 'Phân tích với và không có outlier',
                desc: 'Luôn báo cáo kết quả cả hai trường hợp để người ra quyết định có đủ thông tin.',
                type: 'Best practice',
                color: 'border-outline-variant/30 bg-surface-container',
              },
            ].map((item) => (
              <div key={item.action} className={`border rounded-xl p-4 flex gap-4 ${item.color}`}>
                <span className="font-ui-label text-[0.6875rem] text-secondary uppercase tracking-wider shrink-0 w-24 pt-0.5">
                  {item.type}
                </span>
                <div>
                  <p className="font-headline-md text-headline-md text-on-surface mb-1">{item.action}</p>
                  <p className="font-body-md text-body-md text-on-surface-variant">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Mistakes
          items={[
            'Xóa outlier chỉ vì "nó trông kỳ lạ" — đây có thể là dữ liệu thật và là insight quan trọng nhất.',
            'Không báo cáo việc có outlier trong dataset — người ra quyết định cần biết để đánh giá kết quả.',
            'Dùng mean() sau khi phát hiện outlier mà không xử lý — sẽ cho kết quả lệch nghiêm trọng.',
            'Chỉ dùng IQR method mà không kết hợp domain knowledge — ngưỡng thống kê không thay thế được phán đoán nghiệp vụ.',
          ]}
        />

        <QuickSummary
          items={[
            'IQR Method: bất kỳ giá trị nào ngoài [Q1 − 1.5×IQR, Q3 + 1.5×IQR] là outlier.',
            'Phát hiện outlier chỉ là bước đầu — điều tra nghiệp vụ mới là bước quan trọng hơn.',
            'Luôn phân tích cả với và không có outlier, báo cáo cả hai kết quả.',
          ]}
        />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ── 9. Data Visualization ── */}
      <section aria-labelledby="data-visualization" className="mb-16">
        <SectionTitle id="data-visualization">9. Data Visualization</SectionTitle>

        <ScenarioBlock>
          <p>
            Bạn đã có đống số: Mean 452k, Median 190k, Std Dev 726k, outlier ở 2.5M. Bạn trình bày
            bảng số liệu đó với Marketing team. Mắt họ bắt đầu nhìn ra cửa sổ.
          </p>
          <p className="text-on-surface-variant">
            Insight đúng mà không được hiểu thì không có giá trị gì. Đây là lúc Visualization
            biến những con số thành câu chuyện mà mọi người có thể đọc trong 5 giây.
          </p>
        </ScenarioBlock>

        <div className="font-body-lg text-body-lg text-on-surface-variant space-y-4 mb-6">
          <p>
            Chọn đúng loại biểu đồ không phải vì thẩm mỹ — mà vì mỗi biểu đồ trả lời một loại câu
            hỏi khác nhau. Dùng sai biểu đồ có thể che giấu outlier, tạo ảo tưởng về pattern, hoặc
            làm người xem hiểu sai kết quả.
          </p>
        </div>

        <div className="overflow-x-auto my-6 rounded-xl border border-outline-variant/30">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-surface-container border-b border-outline-variant/30">
                {['Biểu đồ', 'Câu hỏi trả lời', 'Ví dụ trong dataset'].map((h) => (
                  <th key={h} className="font-ui-label text-ui-label px-4 py-3 whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="font-body-md text-body-md text-on-surface-variant">
              {[
                ['Histogram', 'Phân phối của một biến numerical trông như thế nào?', 'Phân phối revenue — thấy ngay right-skewed'],
                ['Bar Chart', 'So sánh giá trị giữa các nhóm categorical', 'Tổng revenue theo category'],
                ['Box Plot', 'Tóm tắt distribution + outlier trong một hình', 'Revenue theo từng city — thấy HCM có outlier'],
                ['Scatter Plot', 'Quan hệ giữa 2 biến numerical', 'items_count vs revenue — tìm correlation'],
                ['Heatmap', 'Correlation matrix của nhiều biến cùng lúc', 'Tương quan giữa age, revenue, items_count'],
              ].map(([chart, question, example]) => (
                <tr key={chart} className="border-b border-outline-variant/20">
                  <td className="font-code text-[0.875rem] text-secondary px-4 py-3 whitespace-nowrap">{chart}</td>
                  <td className="px-4 py-3">{question}</td>
                  <td className="px-4 py-3 text-on-surface-variant/70">{example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Code>{`import matplotlib.pyplot as plt

fig, axes = plt.subplots(2, 2, figsize=(12, 8))

# 1. Histogram: phân phối revenue
axes[0,0].hist(df['revenue'], bins=8, color='#4e45d5', alpha=0.75, edgecolor='white')
axes[0,0].axvline(df['revenue'].median(), color='orange', ls='--', lw=2,
                  label=f"Median: {df['revenue'].median()/1000:.0f}k")
axes[0,0].set_title('Distribution of Revenue')
axes[0,0].legend()

# 2. Bar chart: revenue trung bình theo category (loại outlier)
df_clean = df[df['revenue'] <= df['revenue'].quantile(0.75) + 1.5 * (
    df['revenue'].quantile(0.75) - df['revenue'].quantile(0.25))]
cat_mean = df_clean.groupby('category')['revenue'].mean()
axes[0,1].bar(cat_mean.index, cat_mean.values, color='#4e45d5', alpha=0.75)
axes[0,1].set_title('Avg Revenue by Category (excl. outlier)')
axes[0,1].tick_params(axis='x', rotation=10)

# 3. Box plot: revenue theo city — thấy ngay outlier
df.boxplot(column='revenue', by='city', ax=axes[1,0])
axes[1,0].set_title('Revenue by City')
plt.sca(axes[1,0])
plt.title('Revenue by City')

# 4. Scatter: items_count vs revenue
axes[1,1].scatter(df['items_count'], df['revenue'],
                  color='#4e45d5', alpha=0.7, s=80)
for _, row in df.iterrows():
    axes[1,1].annotate(row['order_id'],
                       (row['items_count'], row['revenue']),
                       textcoords='offset points', xytext=(5, 2), fontsize=8)
axes[1,1].set_title('items_count vs revenue')
axes[1,1].set_xlabel('Items Count')
axes[1,1].set_ylabel('Revenue (VND)')

plt.tight_layout()
plt.savefig('eda_visualization.png', dpi=150)`}</Code>
        <Output>{`→ Histogram: right-skewed rõ ràng, đuôi dài phải do đơn 2.5M
→ Bar chart: Điện tử 385k/đơn, Thời trang 115k/đơn (sau khi loại outlier)
→ Box plot: HCM có outlier cực đoan, DN và HN tập trung hơn
→ Scatter: 9/10 điểm tập trung góc dưới trái, 1 điểm (order 1008) cách xa nhóm`}</Output>

        <Mistakes
          items={[
            'Dùng Bar chart cho continuous data thay vì Histogram — che giấu distribution, không thấy outlier.',
            'Dùng Pie chart khi có hơn 5 category — mắt người không phân biệt được các lát mỏng.',
            'Không đánh nhãn trục (axis labels) — người xem không biết đơn vị là gì.',
            'Dùng Line chart cho categorical data — gây ảo giác về trend không có thật.',
          ]}
        />

        <QuickSummary
          items={[
            'Mỗi biểu đồ trả lời một loại câu hỏi — chọn biểu đồ dựa trên câu hỏi, không phải thẩm mỹ.',
            'Box plot là công cụ tốt nhất để xem distribution + outlier cùng lúc.',
            'Scatter plot + annotation là cách nhanh nhất để tìm giá trị bất thường.',
          ]}
        />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ── 10. Correlation ── */}
      <section aria-labelledby="correlation" className="mb-16">
        <SectionTitle id="correlation">10. Correlation</SectionTitle>

        <ScenarioBlock>
          <p>
            Marketing hỏi: <em>&quot;Khách mua nhiều sản phẩm hơn thì có chi tiêu nhiều hơn không?
            Nếu có, chúng ta có thể dùng điều này để dự đoán revenue từ số lượng items.&quot;</em>
          </p>
          <p className="text-on-surface-variant">
            Đây là câu hỏi về <strong className="text-on-surface">mối quan hệ giữa hai biến</strong>.
            Công cụ để trả lời là Correlation.
          </p>
        </ScenarioBlock>

        <div className="font-body-lg text-body-lg text-on-surface-variant space-y-4 mb-6">
          <p>
            <strong className="text-on-surface">Correlation (Tương quan)</strong> đo mức độ hai biến
            số thay đổi cùng nhau. Hệ số tương quan Pearson r chạy từ{' '}
            <strong className="text-on-surface">−1 đến +1</strong>:
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 my-6">
          {[
            {
              value: '+1',
              label: 'Tương quan dương hoàn hảo',
              desc: 'A tăng → B cũng tăng, đều đặn',
              example: 'Học nhiều hơn → điểm cao hơn',
              color: 'bg-secondary/10 border-secondary/30',
            },
            {
              value: '0',
              label: 'Không tương quan',
              desc: 'A tăng → B không đổi hoặc ngẫu nhiên',
              example: 'Số giày → IQ',
              color: 'bg-surface-container border-outline-variant/30',
            },
            {
              value: '−1',
              label: 'Tương quan âm hoàn hảo',
              desc: 'A tăng → B giảm, đều đặn',
              example: 'Giá cao → cầu thấp',
              color: 'bg-surface-container border-outline-variant/30',
            },
          ].map((item) => (
            <div key={item.value} className={`border rounded-xl p-4 text-center ${item.color}`}>
              <p className="font-display text-[2.25rem] leading-none text-secondary mb-2">{item.value}</p>
              <p className="font-ui-label text-[0.6875rem] text-on-surface mb-1">{item.label}</p>
              <p className="font-body-md text-[0.8125rem] text-on-surface-variant mb-2">{item.desc}</p>
              <p className="font-code text-[0.6875rem] text-secondary/70 italic">{item.example}</p>
            </div>
          ))}
        </div>

        <Code>{`# Correlation matrix của tất cả numerical columns
numeric_cols = ['age', 'revenue', 'items_count']
corr = df[numeric_cols].corr()
print(corr.round(2))
print()

# Tập trung vào cặp quan trọng nhất
r = df['items_count'].corr(df['revenue'])
print(f"items_count ↔ revenue: r = {r:.2f}")
print()

# So sánh với/không có outlier
df_no_outlier = df[df['revenue'] < 766250]
r_clean = df_no_outlier['items_count'].corr(df_no_outlier['revenue'])
print(f"items_count ↔ revenue (không outlier): r = {r_clean:.2f}")
print(f"Thay đổi: {r:.2f} → {r_clean:.2f}  ← outlier thay đổi hoàn toàn kết quả!")`}</Code>
        <Output>{`             age  revenue  items_count
age         1.00    -0.11         0.01
revenue    -0.11     1.00         0.97
items_count 0.01     0.97         1.00

items_count ↔ revenue: r = 0.97

items_count ↔ revenue (không outlier): r = 0.48
Thay đổi: 0.97 → 0.48  ← outlier thay đổi hoàn toàn kết quả!`}</Output>

        <Note>
          r = 0.97 trông rất ấn tượng — nhưng 95% của con số đó đến từ MỘT điểm dữ liệu (order
          1008: 15 sản phẩm, 2.5M VND). Sau khi loại outlier, correlation thật sự chỉ là 0.48 —
          không đủ mạnh để ra quyết định. Luôn kiểm tra correlation trước và sau khi xử lý outlier.
        </Note>

        {/* ⚠️ Correlation ≠ Causation */}
        <WarningBlock title="⚠ Correlation ≠ Causation — Sai lầm phổ biến nhất trong phân tích dữ liệu">
          <p>
            Khi hai biến tương quan với nhau, điều đó <strong>không có nghĩa</strong> là một biến
            gây ra (cause) biến kia. Đây là bẫy mà cả experienced analyst cũng dễ rơi vào.
          </p>
          <div className="bg-background border border-outline-variant/20 rounded-lg p-4 my-3">
            <p className="font-ui-label text-[0.6875rem] text-on-surface/60 uppercase tracking-wider mb-2">
              Ví dụ kinh điển
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Số lượng kem bán ra và số vụ đuối nước có <strong className="text-on-surface">tương quan dương rất cao</strong> (r ≈ 0.85) theo từng tháng.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Kết luận sai: &quot;Ăn kem gây chết đuối.&quot;
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Giải thích thật: Cả hai đều tăng vào <strong className="text-on-surface">mùa hè</strong> — đây
              là biến thứ ba (confounding variable) mà bạn chưa đo.
            </p>
          </div>
          <p>
            Trong công việc: nếu bạn thấy &quot;khách hàng dùng app nhiều hơn có revenue cao hơn&quot;,
            đó có thể vì cả hai cùng tăng vì họ là nhóm khách hàng engaged — không phải vì dùng
            app làm họ chi tiêu nhiều hơn. Muốn chứng minh nhân quả, bạn cần A/B Test (Module 4).
          </p>
        </WarningBlock>

        <Mistakes
          items={[
            'Kết luận nhân quả từ tương quan — "A tương quan với B" không có nghĩa là "A gây ra B".',
            'Báo cáo correlation mà không kiểm tra outlier — một điểm dữ liệu có thể tạo ra r cao giả tạo.',
            'Nghĩ r = 0.5 là "không tương quan" — 0.5 là medium correlation, đủ để điều tra thêm.',
            'Dùng Pearson correlation cho dữ liệu categorical — không có ý nghĩa toán học.',
          ]}
        />

        <QuickSummary
          items={[
            'r gần ±1: tương quan mạnh. r gần 0: không tương quan. Quy tắc ngón tay cái: |r| > 0.7 là mạnh.',
            'Luôn plot scatter plot trước khi tin vào r — outlier có thể tạo r cao giả tạo.',
            'Correlation ≠ Causation. Muốn chứng minh nhân quả → cần A/B Test, không phải correlation.',
          ]}
        />
      </section>

      <hr className="border-outline-variant/20 mb-16" />

      {/* ── 11. Case Study ── */}
      <section aria-labelledby="case-study" className="mb-16">
        <SectionTitle id="case-study">11. Case Study: EDA hoàn chỉnh</SectionTitle>

        <div className="font-body-lg text-body-lg text-on-surface-variant space-y-4 mb-8">
          <p>
            Đây là phần tổng hợp toàn bộ kiến thức của module. Chúng ta sẽ chạy một EDA hoàn chỉnh
            theo đúng 5 bước workflow — trên dataset ecommerce đã đồng hành xuyên suốt bài học.
          </p>
          <p>
            <strong className="text-on-surface">Scenario:</strong> Trưởng phòng Marketing nhờ bạn
            phân tích dataset đơn hàng và chuẩn bị một slide ngắn với 3 insights thực chiến trước
            buổi họp chiều — bạn có 30 phút.
          </p>
        </div>

        <div className="font-headline-md text-headline-md text-on-surface mb-3">
          Bước 1 — Hiểu dữ liệu tổng quan
        </div>
        <Code>{`import pandas as pd

# Nhìn tổng quan: shape, dtypes, missing values
print(f"Shape: {df.shape}  →  {df.shape[0]} đơn hàng, {df.shape[1]} cột")
print()
print("Missing values:")
print(df.isnull().sum())
print()
print("Kiểu dữ liệu:")
print(df.dtypes)`}</Code>
        <Output>{`Shape: (10, 8)  →  10 đơn hàng, 8 cột

Missing values:
order_id       0
customer_id    0
age            0
gender         0
city           0
revenue        0
items_count    0
category       0
dtype: int64

Kiểu dữ liệu:
age             int64   ← numerical
revenue         int64   ← numerical (continuous)
items_count     int64   ← numerical (discrete)
gender         object   ← categorical (nominal)
city           object   ← categorical (nominal)
category       object   ← categorical (nominal)`}</Output>

        <div className="font-headline-md text-headline-md text-on-surface mb-3 mt-8">
          Bước 2 — Khám phá Distribution & Central Tendency
        </div>
        <Code>{`print("=== REVENUE ===")
print(f"Mean:    {df['revenue'].mean():>10,.0f} VND  ← bị kéo lên bởi outlier")
print(f"Median:  {df['revenue'].median():>10,.0f} VND  ← đại diện thực tế hơn")
print(f"Std Dev: {df['revenue'].std():>10,.0f} VND")
print(f"Std/Mean = {df['revenue'].std()/df['revenue'].mean():.0%}  → phân tán cực cao, cần điều tra")
print()

print("=== DISTRIBUTION CHECK ===")
q1, q3 = df['revenue'].quantile(0.25), df['revenue'].quantile(0.75)
print(f"Q1:  {q1:>10,.0f} VND")
print(f"Q2:  {df['revenue'].median():>10,.0f} VND")
print(f"Q3:  {q3:>10,.0f} VND")
print(f"IQR: {q3-q1:>10,.0f} VND  — phạm vi của 50% khách hàng giữa")`}</Code>
        <Output>{`=== REVENUE ===
Mean:       452,000 VND  ← bị kéo lên bởi outlier
Median:     190,000 VND  ← đại diện thực tế hơn
Std Dev:    726,125 VND
Std/Mean = 161%  → phân tán cực cao, cần điều tra

=== DISTRIBUTION CHECK ===
Q1:     135,000 VND
Q2:     190,000 VND
Q3:     387,500 VND
IQR:    252,500 VND  — phạm vi của 50% khách hàng giữa`}</Output>

        <div className="font-headline-md text-headline-md text-on-surface mb-3 mt-8">
          Bước 3 — Phát hiện & Điều tra Outlier
        </div>
        <Code>{`# IQR Method
iqr = q3 - q1
upper = q3 + 1.5 * iqr

outliers = df[df['revenue'] > upper]
print(f"Outlier threshold: {upper:,.0f} VND")
print(f"Số outlier: {len(outliers)}")
print()
print(outliers[['order_id','customer_id','revenue','items_count','city','category']])
print()

# Tác động của outlier lên metrics
df_clean = df[df['revenue'] <= upper]
print(f"Revenue Median toàn bộ:     {df['revenue'].median():>10,.0f} VND")
print(f"Revenue Median (no outlier): {df_clean['revenue'].median():>10,.0f} VND")
print(f"→ Outlier không ảnh hưởng Median (đây là lý do Median robust hơn Mean)")`}</Code>
        <Output>{`Outlier threshold: 766,250 VND
Số outlier: 1

   order_id  customer_id  revenue  items_count city category
7      1008          208  2500000           15  HCM  Điện tử

Revenue Median toàn bộ:        190,000 VND
Revenue Median (no outlier):   180,000 VND
→ Outlier không ảnh hưởng Median (đây là lý do Median robust hơn Mean)`}</Output>

        <div className="font-headline-md text-headline-md text-on-surface mb-3 mt-8">
          Bước 4 — Phân tích theo nhóm & tìm Relationships
        </div>
        <Code>{`# Revenue theo Category (loại outlier để phân tích khách hàng "bình thường")
print("=== REVENUE THEO CATEGORY (loại outlier) ===")
cat_stats = df_clean.groupby('category')['revenue'].agg(['median','mean','count'])
cat_stats.columns = ['Median', 'Mean', 'Đơn hàng']
print(cat_stats.sort_values('Median', ascending=False).round(0))
print()

# Phân bố địa lý
print("=== PHÂN BỐ ĐỊA LÝ ===")
city_dist = df['city'].value_counts()
for city, count in city_dist.items():
    print(f"  {city}: {count} đơn ({count/len(df):.0%})")
print()

# Correlation: items vs revenue (sau khi loại outlier)
r = df_clean['items_count'].corr(df_clean['revenue'])
print(f"Correlation items_count ↔ revenue (no outlier): r = {r:.2f}")`}</Code>
        <Output>{`=== REVENUE THEO CATEGORY (loại outlier) ===
                Median     Mean  Đơn hàng
category
Điện tử        385000   390000         2
Sức khỏe       190000   190000         2
Thời trang     112500   115000         5

=== PHÂN BỐ ĐỊA LÝ ===
  HCM: 4 đơn (40%)
  HN:  4 đơn (40%)
  DN:  2 đơn (20%)

Correlation items_count ↔ revenue (no outlier): r = 0.48`}</Output>

        {/* 3 Insights Card */}
        <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-6 mt-8">
          <p className="font-ui-label text-ui-label text-secondary mb-5 uppercase tracking-widest">
            3 Insights trình bày với sếp
          </p>
          <div className="space-y-5">
            {[
              {
                n: '01',
                title: 'Có đơn hàng bất thường — cần xác minh trước khi báo cáo',
                body: 'Đơn hàng 1008 (2,500,000 VND, 15 sản phẩm tại HCM) là outlier với IQR method. Revenue trung bình thực của khách đại trà là 190,000 VND (Median), không phải 452,000 VND (Mean). Cần xác minh đơn 1008 là khách VIP thật hay lỗi hệ thống trước khi đưa con số vào báo cáo chính thức.',
              },
              {
                n: '02',
                title: 'Điện tử: revenue cao nhất — ưu tiên marketing ở đây',
                body: 'Sau khi loại outlier, Điện tử có Median 385k/đơn — gấp 3.4 lần Thời trang (112k). Tuy nhiên số lượng đơn Thời trang chiếm 50% dataset. Đây là trade-off giữa volume (Thời trang) và value (Điện tử) — cần chiến lược riêng cho từng nhóm.',
              },
              {
                n: '03',
                title: 'HCM + HN chiếm 80% — tập trung ngân sách ở đây trước',
                body: 'Nếu ngân sách khuyến mãi có hạn, HCM và HN là hai thị trường ưu tiên rõ ràng. DN chỉ chiếm 20% và có revenue thấp hơn. Correlation items-revenue = 0.48 sau outlier — đủ để test: nếu encourage khách mua thêm items, revenue có thể tăng.',
              },
            ].map((insight) => (
              <div key={insight.n} className="flex gap-4">
                <span className="font-code text-[0.75rem] text-secondary/50 shrink-0 mt-1 font-semibold">
                  {insight.n}
                </span>
                <div>
                  <p className="font-headline-md text-headline-md text-on-surface mb-2">
                    {insight.title}
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant">{insight.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-outline-variant/30 rounded-xl p-5 mt-6">
          <p className="font-ui-label text-[0.625rem] text-secondary uppercase tracking-widest mb-3">
            EDA chỉ là bước đầu
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            EDA cho bạn <strong className="text-on-surface">câu hỏi để hỏi tiếp</strong> — không
            phải câu trả lời cuối cùng. &quot;Outlier 1008 là VIP hay lỗi?&quot; → cần nghiệp vụ.
            &quot;HCM và HN có revenue cao hơn vì lý do gì?&quot; → cần thêm dữ liệu. &quot;Khuyến
            mãi items có làm revenue tăng thật không?&quot; → cần A/B Test (Module 4).
          </p>
        </div>
      </section>

      {/* Sign-off */}
      <div className="border-t border-outline-variant/20 pt-10">
        <p className="font-body-md text-body-md text-on-surface-variant">
          Tiếp theo:{' '}
          <a href="/modules/sampling" className="text-secondary hover:underline">
            Module 2 — Sampling: Dataset 10 dòng này có thực sự đại diện cho toàn bộ khách hàng
            không? →
          </a>
        </p>
      </div>
    </article>
  )
}
