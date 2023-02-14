interface Props {
  value: number;
  size: number;
  graphTitle: string;
}

export function DotPlot(props: Props) {
  const { value, size, graphTitle } = props;
  const margin = {
    top: 5,
    bottom: 20,
    left: 10,
    right: 10,
  };
  const gridSize = (size - margin.left - margin.right) / 10;
  const radius = (gridSize - 6) / 2;

  return (
    <div
      className='padding-left-09 padding-right-09 padding-top-00 padding-bottom-07 flex-div'
      style={{
        flexGrow: 1,
        flexDirection: 'column',
      }}
    >
      <h6 className='undp-typography bold margin-bottom-03'>{graphTitle}</h6>
      <div>
        <h2 className='undp-typography bold margin-bottom-00'>
          {value} out of 100
        </h2>
        <svg width='100%' viewBox={`0 0 ${size} ${size}`}>
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
                }}
                r={radius}
              />
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}
