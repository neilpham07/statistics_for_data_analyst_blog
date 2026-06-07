export function PhilosophySection() {
  const principles = [
    {
      title: 'Câu chuyện trước công thức',
      body: 'Mỗi khái niệm được giới thiệu qua tình huống thực tế trước khi đi vào toán học. Bạn hiểu tại sao trước khi học cách làm.',
    },
    {
      title: 'Thực hành trên dữ liệu thật',
      body: 'Không có dataset nhân tạo. Mọi ví dụ đều lấy từ business thực — e-commerce, fintech, marketing, product analytics.',
    },
    {
      title: 'Đủ sâu, không quá phức tạp',
      body: 'Chúng tôi không dạy bạn trở thành statistician. Chúng tôi dạy bạn đủ để ra quyết định đúng và không bị đánh lừa bởi dữ liệu.',
    },
  ]

  return (
    <section
      aria-labelledby="philosophy-heading"
      className="py-24 px-gutter bg-inverse-surface"
    >
      <div className="max-w-container-max mx-auto">
        {/* Quote */}
        <div className="max-w-3xl mb-20">
          <blockquote>
            <p className="font-display text-[2rem] sm:text-display text-inverse-on-surface leading-[1.1] tracking-tight">
              &ldquo;In God we trust. All others must bring data.&rdquo;
            </p>
            <footer className="mt-6 flex items-center gap-3">
              <div className="w-10 h-px bg-secondary" aria-hidden="true" />
              <cite className="not-italic font-ui-label text-ui-label text-secondary">
                W. Edwards Deming
              </cite>
            </footer>
          </blockquote>
        </div>

        {/* Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((p) => (
            <div key={p.title}>
              <h3 className="font-headline-md text-headline-md text-inverse-on-surface mb-3">
                {p.title}
              </h3>
              <p className="font-body-md text-body-md text-inverse-on-surface/70 leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
