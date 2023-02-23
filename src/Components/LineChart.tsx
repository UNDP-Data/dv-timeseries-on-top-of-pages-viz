import { useEffect, useRef, useState } from 'react';
import { format } from 'd3-format';
import { LineChartGraph } from './LineChartGraph';

interface Props {
  data: {
    year: number;
    value: number;
  }[];
  lineColor: string;
  graphTitle: string;
  strokeWidth: number;
  suffix?: string;
  prefix?: string;
  labelFormat?: string;
}

export function LineChart(props: Props) {
  const {
    data,
    lineColor,
    graphTitle,
    strokeWidth,
    suffix,
    labelFormat,
    prefix,
  } = props;
  const [mouseOverData, setMouseOverData] = useState<any>(
    data[data.length - 1],
  );

  const [svgWidth, setSvgWidth] = useState(0);
  const [svgHeight, setSvgHeight] = useState(0);

  const graphDiv = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (graphDiv.current) {
      setSvgHeight(graphDiv.current.clientHeight);
      setSvgWidth(graphDiv.current.clientWidth);
    }
  }, [graphDiv?.current]);
  return (
    <div
      className='flex-div gap-02'
      style={{
        flexGrow: 1,
        flexDirection: 'column',
        minHeight: '15rem',
      }}
    >
      <p className='undp-typography margin-bottom-00'>{graphTitle}</p>
      <div
        style={{
          flexGrow: 1,
          flexDirection: 'column',
          display: 'flex',
        }}
      >
        <h2 className='undp-typography bold margin-bottom-00'>
          {prefix || ''}{' '}
          {Math.abs(mouseOverData.value) < 1
            ? mouseOverData.value
            : format(labelFormat || '.3s')(mouseOverData.value).replace(
                'G',
                'B',
              )}
          {suffix || ''}{' '}
          <span style={{ color: 'var(--gray-500)', fontSize: '1.5rem' }}>
            ({mouseOverData.year})
          </span>
        </h2>
        <div
          style={{ flexGrow: 1, width: '100%', display: 'flex' }}
          ref={graphDiv}
        >
          {svgWidth && svgHeight ? (
            <LineChartGraph
              data={data}
              lineColor={lineColor}
              svgWidth={svgWidth}
              svgHeight={svgHeight}
              strokeWidth={strokeWidth}
              setMouseOverData={setMouseOverData}
              mouseOverData={mouseOverData}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
