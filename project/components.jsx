// Shared atoms

const Eyebrow = ({ children, className = '' }) => (
  <span className={`eyebrow ${className}`}>{children}</span>
);

const SectionHead = ({ num, eyebrow, title, children }) => (
  <div className="sec-head">
    <div className="sec-head__meta">
      {num && <span className="sec-head__num">{num}</span>}
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    </div>
    <div>
      <h2 className="sec-head__title" dangerouslySetInnerHTML={{ __html: title }} />
      {children}
    </div>
  </div>
);

const ArrowIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PlusIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

// IntersectionObserver-driven reveal
const useReveal = () => {
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
};

Object.assign(window, {
  Eyebrow, SectionHead, ArrowIcon, PlusIcon, useReveal,
});
