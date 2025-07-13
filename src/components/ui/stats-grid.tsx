interface StatItem {
  value: string
  label: string
}

interface StatsGridProps {
  stats: StatItem[]
  className?: string
}

export function StatsGrid({ stats, className }: StatsGridProps) {
  return (
    <div className={`flex flex-wrap justify-center gap-8 max-w-5xl mx-auto ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center min-w-[120px]">
          <div className="text-3xl font-bold text-teal-400">{stat.value}</div>
          <div className="text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
