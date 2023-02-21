interface Props {
  value: number;
  size: number;
  graphTitle: string;
}

export function DotPlot(props: Props) {
  const { value, size, graphTitle } = props;
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
      className='flex-div'
      style={{
        flexGrow: 1,
        flexDirection: 'column',
      }}
    >
      <h2
        className='undp-typography bold margin-bottom-00'
        style={{ textAlign: 'center' }}
      >
        {value} out of 100
      </h2>
      <svg
        style={{ maxWidth: '15rem', margin: '0 auto' }}
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
                    ? 'var(--dark-green)'
                    : 'var(--white)',
                stroke:
                  d + 1 <= Math.round(value)
                    ? 'var(--dark-green)'
                    : 'var(--gray-500)',
                strokeWidth: 1,
              }}
              r={radius}
            />
          ))}
        </g>
      </svg>
      <h6
        className='undp-typography bold margin-top-03'
        style={{ textAlign: 'center' }}
      >
        {graphTitle}
      </h6>
    </div>
  );
}
