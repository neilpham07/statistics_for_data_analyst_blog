export function WhatIsStatisticsSection() {
  const steps = [
    {
      label: 'Tổng thể',
      sublabel: 'Population',
      description: '100 triệu người dùng, 10 năm giao dịch, toàn bộ dữ liệu — không thể đo hết.',
      size: 'large',
    },
    {
      label: 'Mẫu',
      sublabel: 'Sample',
      description:
        'Chọn 1,000 người đại diện theo phương pháp khoa học. Đây là điểm bắt đầu thực tế.',
      size: 'medium',
    },
    {
      label: 'Kết luận',
      sublabel: 'Conclusion',
      description: 'Với độ tin cậy 95%, bạn có thể suy ra sự thật về toàn bộ tổng thể.',
      size: 'small',
    },
  ]

  return (
    <section
      aria-labelledby="what-stats-heading"
      className="py-20 px-gutter"
    >
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <span className="inline-block font-ui-label text-ui-label text-secondary tracking-widest uppercase mb-4">
              Thống kê thực sự là gì?
            </span>
            <h2
              id="what-stats-heading"
              className="font-headline-lg text-headline-lg text-on-surface mb-6"
            >
              Thống kê là khoa học của sự không chắc chắn.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
              Bạn không bao giờ có đủ dữ liệu. Nhưng bạn có thể đưa ra quyết định đúng từ dữ liệu
              đủ tốt — nếu bạn biết cách.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Thống kê không dạy bạn chắc chắn. Nó dạy bạn cách định lượng sự không chắc chắn —
              và hành động dựa trên đó một cách có căn cứ.
            </p>
          </div>

          {/* Right: Population → Sample → Conclusion */}
          <div
            aria-label="Mô hình từ tổng thể đến kết luận"
            className="flex flex-col gap-4"
          >
            {steps.map((step, i) => (
              <div key={step.label} className="flex items-start gap-6">
                {/* Width indicator */}
                <div className="shrink-0 flex flex-col items-center gap-2 pt-1">
                  <div
                    className={`rounded h-8 bg-secondary/20 border border-secondary/30 ${
                      step.size === 'large'
                        ? 'w-20'
                        : step.size === 'medium'
                          ? 'w-14'
                          : 'w-8'
                    }`}
                    aria-hidden="true"
                  />
                  {i < steps.length - 1 && (
                    <div className="w-px h-4 bg-outline-variant/40" aria-hidden="true" />
                  )}
                </div>

                {/* Text */}
                <div className="flex-1 pb-2">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-ui-label text-ui-label text-on-surface">
                      {step.label}
                    </span>
                    <span className="font-code text-[0.75rem] text-secondary/70">
                      {step.sublabel}
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
