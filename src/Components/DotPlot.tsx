import { format } from 'd3-format';

interface Props {
  value: number;
  size: number;
  graphTitle: string;
  dotColor?: string;
  year: number;
  labelFormat?: string;
}

export function DotPlot(props: Props) {
  const { value, size, graphTitle, dotColor, year, labelFormat } = props;
  const margin = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };
  const gridSize = (size - margin.left - margin.right) / 10;
  const radius = (gridSize - 6) / 2;

  return (
    <div
      className='flex-div gap-03'
      style={{
        flexGrow: 1,
        flexDirection: 'column',
      }}
    >
      <p className='undp-typography margin-bottom-00'>{graphTitle}</p>
      <h2 className='undp-typography bold margin-bottom-00'>
        {Math.abs(value) < 1
          ? value
          : format(labelFormat || '.3s')(value).replace('G', 'B')}{' '}
        out of 100
        <span style={{ color: 'var(--gray-500)', fontSize: '1.5rem' }}>
          {' '}
          ({year})
        </span>
      </h2>
      <svg
        style={{ maxWidth: '15rem', margin: '0' }}
        width='100%'
        viewBox={`0 0 ${size} ${size}`}
      >
        <g transform={`translate(${margin.left},${margin.top})`}>
          {[...Array(100).keys()].map(d => (
            <circle
              key={d}
              cx={(d % 10) * gridSize + gridSize / 2}
              cy={Math.floor(d / 10) * gridSize + gridSize / 2}
              style={{
                fill:
                  d + 1 <= Math.round(value)
                    ? dotColor || 'var(--dark-green)'
                    : 'var(--white)',
                stroke:
                  d + 1 <= Math.round(value)
                    ? dotColor || 'var(--dark-green)'
                    : 'var(--gray-500)',
                strokeWidth: 1,
              }}
              r={radius}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
