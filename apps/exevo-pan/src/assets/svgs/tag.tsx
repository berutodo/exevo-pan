export const TagIcon = (args: JSX.IntrinsicElements['svg']) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 22"
    width="14"
    height="22"
    fill="#000000"
    {...args}
  >
    <defs>
      <linearGradient id="gradientFill" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#4C9B1E" />
        <stop offset="100%" stopColor="#2D6010" />
      </linearGradient>
    </defs>
    <path
      transform="rotate(46 12 12)"
      fill="none"
      d="m0,0l24,0l0,24l-24,0l0,-24z"
    />
    <path
      transform="rotate(45 6.99998 13.4766)"
      fill="url(#gradientFill)"
      d="m16.40996,13.05655l-9,-9c-0.36,-0.36 -0.86,-0.58 -1.41,-0.58l-7,0c-1.1,0 -2,0.9 -2,2l0,7c0,0.55 0.22,1.05 0.59,1.42l9,9c0.36,0.36 0.86,0.58 1.41,0.58s1.05,-0.22 1.41,-0.59l7,-7c0.37,-0.36 0.59,-0.86 0.59,-1.41s-0.23,-1.06 -0.59,-1.42zm-15.91,-4.58c-0.83,0 -1.5,-0.67 -1.5,-1.5s0.67,-1.5 1.5,-1.5s1.5,0.67 1.5,1.5s-0.67,1.5 -1.5,1.5z"
    />
  </svg>
)
