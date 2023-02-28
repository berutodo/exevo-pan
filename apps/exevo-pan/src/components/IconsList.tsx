import clsx from 'clsx'
import * as Icons from 'assets/svgs'

const IconsList = ({ className, ...props }: JSX.IntrinsicElements['svg']) => (
  <div className="flex flex-wrap gap-4">
    {Object.values(Icons).map((Icon) => (
      <Icon
        className={clsx(className ?? 'fill-onSurface h-8 w-8')}
        {...props}
      />
    ))}
  </div>
)

export default IconsList
