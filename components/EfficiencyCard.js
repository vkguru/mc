import PropTypes from 'prop-types';
import LineChart from '../components/chart/LineChart'

const EfficiencyCard = ({
    title, 
    percentage, 
    priority, 
    priorityColour, 
    topCard,
    bottomCard,
    topCardData,
    bottomCardData,
    chartData,
    chartColour
  }) => {
  return (
    <>
      <section className='card'>
          <div className='graph-card'>
            <header>
              <div className='chart-title'>
                <h2>{title}</h2>
                <span>{percentage}%</span>
              </div>

              <div className='chart-filter'>
                <h3><span style={{backgroundColor: priorityColour}}></span>{priority}</h3>
                <div className='select'>
                  This Month
                  <span>
                    <img src="/img/calendar.png" alt='' />
                  </span>
                </div>
              </div>
            </header>

            <LineChart lineData={chartData} borderColor={chartColour} />

          </div>
          <div className='duration-card'>
            <div className='_inner'>
              <p>{topCard}</p>
              <h3>{topCardData}</h3>
            </div>

            <div className='_inner'>
              <p>{bottomCard}</p>
              <h3>{bottomCardData}</h3>
            </div>
          </div>
      </section>

      {/* jsx style */} 

      <style jsx>
        {`
          .card {
            display: flex;
            margin: 0 30px 30px;
            height: 400px;
            border: 1px solid var(--meta-border);
            border-radius: 10px;
          }

          .graph-card {
            width: 70%;
            height: 370px;
            padding: 30px;
            border-right: 1px solid var(--meta-border);
          }

          .graph-card header {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .chart-title {
            display: flex;
          }

          .chart-title h2 {
            font-size: 18px;
            font-family: "Gelion Semi Bold";
            color: var(--meta-black);
            padding-right: 16px;
          }

          .chart-title span {
            background-color: var(--meta-light-green);
            color: var(--meta-green-font);
            padding: 4px 12px;
            border-radius: 4px;
          }

          .chart-filter {
            display: flex;
            align-items: center;
          }

          .chart-filter h3 {
            display: flex;
            font-size: 16px;
            margin-right: 10px;
            padding-right: 10px;
            border-right: 1px solid var(--meta-border);
          }

          .chart-filter h3 span {
            display: block;
            height: 13px;
            width: 13px;
            border-radius: 2px;
            margin-top: 3px;
            margin-right: 3px;
          }

          .select {
            width: 150px;
            color: var(--meta-black);
            font-weight: 600;
            padding: 8px 12px 5px;
            border: 1px solid var(--meta-border);
            border-radius: 8px;
            cursor: pointer;
          }

          .select span {
            margin-top: 2px;
            float: right;
          }

          .duration-card {
            width: 30%;
          }

          .duration-card ._inner {
            width: 90%;
            padding: 50px 20px;
            margin: 30px auto;
            background-color: #FAFAFA;
            border: 1px solid var(--meta-border);
            border-radius: 10px;
          }

          ._inner p {
            color: var(--meta-grey);
            margin-bottom: 15px;
          }
        `}
      </style>
    </>
  )
}

EfficiencyCard.propTypes = {
  title: PropTypes.string,
  percentage: PropTypes.string,
  priority: PropTypes.string,
  priorityColour: PropTypes.string,
  topCard: PropTypes.string,
  topCardData: PropTypes.string,
  bottomCard: PropTypes.string,
  bottomCardData: PropTypes.string,
  chartData: PropTypes.array,
  chartColour: PropTypes.string
}

export default EfficiencyCard;
