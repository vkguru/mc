import EfficiencyCard from "../components/EfficiencyCard";

export default function Home() {
  return (
    <>
      <div className="page">
        <EfficiencyCard 
          title="Average response Time"
          percentage="+4.14"
          priority="High Priority"
          priorityColour="#F05D23" 
          topCard="Average Response Time"
          topCardData="30 Mins"
          bottomCard="Response Time"
          bottomCardData="1 Hour 30 Mins"
          chartData={[11, 18, 45, 15, 42, 38, 50, 21]}
          chartColour="#F05D23"
        />

        <EfficiencyCard 
          title="Replies per resolution" 
          percentage="+4.14"
          priority="High Priority"
          priorityColour="#3E68FF" 
          topCard="Average Replies"
          topCardData="30 Mins"
          bottomCard="Response Time"
          bottomCardData="1 Hour 30 Mins"
          chartData={[11, 18, 45, 15, 42, 38, 50, 21]}
          chartColour="#3E68FF"
        />

        <EfficiencyCard 
          title="Average resolution time" 
          percentage="+4.14"
          priority="High Priority"
          priorityColour="#FB6491" 
          topCard="Average Resolution Rate"
          topCardData="30 Mins"
          bottomCard="Response Time"
          bottomCardData="1 Hour 30 Mins"
          chartData={[11, 18, 45, 15, 42, 38, 50, 21]}
          chartColour="#FB6491"
        />

        <EfficiencyCard 
          title="First contact resolution rate" 
          percentage="+4.14"
          priority="High Priority"
          priorityColour="#07C9E2" 
          topCard="Average Contact Rate"
          topCardData="30 Mins"
          bottomCard="Response Time"
          bottomCardData="1 Hour 30 Mins"
          chartData={[11, 18, 45, 15, 42, 38, 50, 21]}
          chartColour="#07C9E2"
        />
      </div>
    </>
  )
}
