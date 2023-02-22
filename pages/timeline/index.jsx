import PageLayout from "../../components/PageLayout";
import TimelineItem from "../../components/Timeline";
import {timelineDatas} from '../../constant'

const Timeline = () => {
  return (
    <PageLayout>
      {timelineDatas.length > 0 &&
      timelineDatas.map((item,index)=>(
        <TimelineItem key={index} avatar={item.avatar} userName={item.userName} date={item.date} text={item.text}/>
      ))
      }
    </PageLayout>
  )
}

export default Timeline;