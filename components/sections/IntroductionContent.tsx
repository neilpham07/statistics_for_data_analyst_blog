import type { TocItem } from '@/components/layout/TableOfContents'

export const introTocItems: TocItem[] = [
  { id: 'thu-vien-tri-thuc', label: 'Mục đích của Blog là gì?' },
  { id: 'danh-cho-ai', label: 'Blog này dành cho ai?' },
  { id: 'thong-ke-cuoc-song', label: 'Thống kê trong cuộc sống' },
  { id: 'analyst-va-thong-ke', label: 'Data Analyst và thống kê' },
  { id: 'bat-dau-tu-dau', label: 'Bắt đầu từ đâu?' },
]

export function IntroductionContent() {
  return (
    <article className="max-w-[720px] py-8 lg:py-10 lg:pr-8">
      {/* Eyebrow */}
      <p className="font-ui-label text-ui-label text-secondary uppercase tracking-widest mb-4">
        Giới thiệu
      </p>

      {/* Title */}
      <h1 className="font-display text-display text-on-surface mb-6 leading-[1.1]">
        Học thống kê để hiểu câu chuyện đằng sau những con số.
      </h1>

      <p className="font-body-lg text-body-lg text-on-surface-variant mb-16 max-w-prose">
        Không phải để giải phương trình. Không phải để vượt qua kỳ thi. Mà để bạn có thể nhìn vào
        một bảng số liệu và biết nó đang nói với bạn điều gì.
      </p>

      {/* ── Section 1 ── */}
      <section aria-labelledby="thu-vien-tri-thuc" className="mb-14">
        <h2
          id="thu-vien-tri-thuc"
          className="font-headline-lg text-headline-lg text-on-surface mb-6 scroll-mt-24"
        >
          Mục đích của Blog là gì?
        </h2>

        <div className="font-body-lg text-body-lg text-on-surface-variant space-y-5">
          <p>
            Đã bao giờ bạn nghe về thuật ngữ Thống kê (Statistics), hay thậm chí đã từng "vật lộn"
            với môn Xác suất Thống kê trên giảng đường đại học nhưng vẫn mơ hồ không biết học xong
            để làm gì?
          </p>
          <p>
            Hay bạn đã là một Data Analyst/Business Analyst đang hằng ngày làm việc với SQL, vẽ
            những chiếc Dashboard bóng bẩy cho công ty, nhưng chợt nhận ra mình đang bị "kẹt" lại:
            Ngoài việc lôi dữ liệu ra và trực quan hóa nó, mình cần trau dồi thêm kỹ năng sâu sắc nào
            để có thể thăng tiến, để thực sự hiểu câu chuyện đằng sau những con số và đưa ra những
            tư vấn có trọng lượng cho sếp?
          </p>
          <p>
            Blog này ra đời không phải để đưa cho bạn thêm một cuốn giáo trình đại học.
            Không có chứng minh toán học phức tạp, không có những định lý khô khan.
          </p>
          <p>
            Đây là cuốn nhật ký hệ thống hóa Thống kê dưới góc nhìn Thực Chiến. Mỗi khái niệm – từ
            số Trung vị, Độ lệch chuẩn cho đến Kiểm định giả thuyết – sẽ luôn bắt đầu bằng một bài
            toán thực tế: Một chiến dịch Marketing đang chạy trên Shopee,
            hay một bài toán tối ưu nút bấm trên App.
          </p>
          <p>
            Mục tiêu chỉ có một:{' '}
            <strong className="text-on-surface font-semibold">
              giúp bạn dùng thống kê để đưa ra quyết định tốt hơn
            </strong>
            .
          </p>
        </div>
      </section>

      <hr className="border-outline-variant/20 mb-14" />

      {/* ── Section 2 ── */}
      <section aria-labelledby="danh-cho-ai" className="mb-14">
        <h2
          id="danh-cho-ai"
          className="font-headline-lg text-headline-lg text-on-surface mb-6 scroll-mt-24"
        >
          Blog này dành cho ai?
        </h2>

        <div className="font-body-lg text-body-lg text-on-surface-variant space-y-5">
          <p>
            Bạn biết SQL. Bạn viết được Python ở mức cơ bản — <code className="font-code text-code text-secondary bg-surface-container px-1.5 py-0.5 rounded">groupby</code>,{' '}
            <code className="font-code text-code text-secondary bg-surface-container px-1.5 py-0.5 rounded">merge</code>, vẽ biểu đồ với{' '}
            <code className="font-code text-code text-secondary bg-surface-container px-1.5 py-0.5 rounded">matplotlib</code>. Bạn có thể xây dựng một
            dashboard và trình bày con số cho sếp.
          </p>

          <p>Nhưng khi ai đó hỏi những câu như thế này:</p>

          {/* Scenario cards */}
          <div className="space-y-3 my-8">
            {[
              {
                role: 'Sếp hỏi',
                question: '"Kết quả này có ý nghĩa thống kê không?"',
              },
              {
                role: 'Team Product hỏi',
                question: '"Variant B tốt hơn 3%, mình có nên deploy không?"',
              },
              {
                role: 'Báo cáo cho thấy',
                question: '"Doanh thu tháng này tăng 15%."',
              },
            ].map((s) => (
              <div
                key={s.role}
                className="flex items-start gap-4 bg-surface-container-low border border-outline-variant/30 rounded-xl px-5 py-4"
              >
                <span className="font-ui-label text-[0.6875rem] text-secondary uppercase tracking-wider shrink-0 pt-0.5">
                  {s.role}
                </span>
                <p className="font-body-md text-body-md text-on-surface italic">{s.question}</p>
              </div>
            ))}
          </div>

          <p>— và bạn không biết chắc phải trả lời gì.</p>

          <p>
            Nếu bạn nhận ra mình trong những tình huống đó — blog này viết cho bạn. Bạn không cần
            biết gì về thống kê trước khi bắt đầu. Chỉ cần tò mò và sẵn sàng đọc.
          </p>
        </div>
      </section>

      <hr className="border-outline-variant/20 mb-14" />

      {/* ── Section 3 ── */}
      <section aria-labelledby="thong-ke-cuoc-song" className="mb-14">
        <h2
          id="thong-ke-cuoc-song"
          className="font-headline-lg text-headline-lg text-on-surface mb-6 scroll-mt-24"
        >
          Thống kê có ý nghĩa gì trong cuộc sống?
        </h2>

        <div className="font-body-lg text-body-lg text-on-surface-variant space-y-5">
          <p>
            Thống kê, ở cốt lõi, là{' '}
            <strong className="text-on-surface font-semibold">
              nghệ thuật đưa ra quyết định khi thông tin không đầy đủ
            </strong>
            .
          </p>
          <p>
            Bác sĩ không có thời gian xét nghiệm toàn bộ mọi thứ trước khi kê đơn. Họ dựa vào
            triệu chứng, tiền sử bệnh, và kinh nghiệm lâm sàng — rồi đưa ra phán đoán xác suất
            tốt nhất có thể. Đó là thống kê trong y tế.
          </p>
          <p>
            Khi bản tin thời tiết nói "ngày mai có 70% khả năng mưa" — đây không phải là con số
            ngẫu nhiên. Đó là kết quả của hàng triệu điểm dữ liệu từ vệ tinh, lịch sử thời tiết,
            và mô hình tính toán. Đó là thống kê trong khí tượng học.
          </p>
          <p>
            Khi Netflix gợi ý một bộ phim và bạn xem hết — đó là thuật toán dựa trên hành vi của
            hàng triệu người xem tương tự bạn. Đó là thống kê trong công nghệ.
          </p>

          <blockquote className="border-l-2 border-secondary pl-6 py-1 my-8">
            <p className="font-body-lg text-body-lg text-on-surface italic">
              "Thống kê không phải là môn toán. Thống kê là cách con người đặt câu hỏi cho thế
              giới — và nhận được câu trả lời có căn cứ."
            </p>
          </blockquote>

          <p>
            Nói cách khác: bất cứ lúc nào bạn phải đưa ra quyết định mà không có đủ thông tin
            hoàn hảo — bạn đang làm thống kê. Vấn đề chỉ là làm có ý thức hay không có ý thức mà
            thôi.
          </p>
        </div>
      </section>

      <hr className="border-outline-variant/20 mb-14" />

      {/* ── Section 4 ── */}
      <section aria-labelledby="analyst-va-thong-ke" className="mb-14">
        <h2
          id="analyst-va-thong-ke"
          className="font-headline-lg text-headline-lg text-on-surface mb-6 scroll-mt-24"
        >
          Data Analyst sử dụng thống kê như thế nào?
        </h2>

        <div className="font-body-lg text-body-lg text-on-surface-variant space-y-5">
          <p>Trong công việc hàng ngày, thống kê xuất hiện ở mọi bước phân tích:</p>

          <div className="space-y-6 my-8">
            {[
              {
                step: 'EDA',
                title: 'Khi khám phá dữ liệu',
                body: 'Trước khi kết luận bất cứ điều gì, bạn cần hiểu dữ liệu đang có hình dạng như thế nào. Phân phối có bị lệch không? Có ngoại lệ nào không? Mean và median có xa nhau không? Đây là công việc của thống kê mô tả.',
              },
              {
                step: 'Inference',
                title: 'Khi hỏi về nguyên nhân',
                body: '"Doanh thu tháng này tăng có phải vì chiến dịch marketing không, hay chỉ là mùa vụ?" Để trả lời câu hỏi này, bạn cần kiểm định giả thuyết và thiết kế thí nghiệm.',
              },
              {
                step: 'A/B Test',
                title: 'Khi thử nghiệm thay đổi',
                body: 'Nút màu đỏ hay màu xanh có conversion tốt hơn? Flow checkout nào giữ chân người dùng lâu hơn? A/B testing là cách duy nhất để biết chắc — không phải đoán.',
              },
              {
                step: 'Prediction',
                title: 'Khi dự đoán tương lai',
                body: 'Regression, classification, clustering — đây đều là công cụ thống kê. Machine learning, ở nền tảng, là thống kê ứng dụng với dữ liệu lớn và tính toán mạnh hơn.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5">
                <div className="shrink-0 mt-1">
                  <span className="inline-block font-code text-[0.6875rem] text-secondary bg-secondary/10 border border-secondary/20 px-2 py-1 rounded leading-none">
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-body-md">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-outline-variant/20 mb-14" />

      {/* ── Section 5 ── */}
      <section aria-labelledby="bat-dau-tu-dau" className="mb-14">
        <h2
          id="bat-dau-tu-dau"
          className="font-headline-lg text-headline-lg text-on-surface mb-6 scroll-mt-24"
        >
          Bắt đầu từ đâu?
        </h2>

        <div className="font-body-lg text-body-lg text-on-surface-variant space-y-5">
          <p>
            Chương trình học được chia thành 9 module, từ nền tảng đến nâng cao. Bạn không cần đọc
            theo thứ tự nếu đã có kiến thức trước — nhưng nếu mới bắt đầu, thứ tự đó được thiết
            kế để mỗi module xây dựng trên nền tảng của module trước.
          </p>

          <div className="space-y-3 my-8">
            {[
              {
                profile: 'Hoàn toàn mới với thống kê',
                suggestion: 'Bắt đầu từ Module 0 → Module 1 (EDA)',
                href: '/modules/introduction',
              },
              {
                profile: 'Biết cơ bản, muốn làm phân tích sâu hơn',
                suggestion: 'Nhảy vào Module 3 (Statistical Inference)',
                href: '/modules/statistical-inference',
              },
              {
                profile: 'Đang làm việc với A/B test hoặc ML',
                suggestion: 'Thẳng vào Module 4 hoặc Module 6',
                href: '/modules/ab-testing',
              },
            ].map((row) => (
              <a
                key={row.profile}
                href={row.href}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 bg-background border border-outline-variant/30 rounded-xl px-5 py-4 hover:border-secondary/40 motion-safe:transition-colors group"
              >
                <span className="font-ui-label text-[0.6875rem] text-secondary uppercase tracking-wider shrink-0">
                  {row.profile}
                </span>
                <span className="font-body-md text-body-md text-on-surface group-hover:text-secondary motion-safe:transition-colors">
                  → {row.suggestion}
                </span>
              </a>
            ))}
          </div>

          <p>
            Không có con đường nào là sai. Điều duy nhất quan trọng là bắt đầu — rồi tiếp tục đọc
            đủ lâu để những khái niệm này trở thành một phần trong cách bạn suy nghĩ về dữ liệu.
          </p>
        </div>
      </section>

      {/* Sign-off */}
      <div className="border-t border-outline-variant/20 pt-10 mt-4">
        <p className="font-body-md text-body-md text-on-surface-variant">
          — Neil Pham, người viết blog này.
        </p>
      </div>
    </article>
  )
}
