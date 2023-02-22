import PageLayout from '../../components/PageLayout/index'
import RatingStar from '../../components/RatingStar';
import {ratingDatas} from '../../constant'

const Rating = () => {
  console.log(ratingDatas)
  return (
    <PageLayout>
      <div >
        {ratingDatas.length > 0 &&
        ratingDatas.map((item,index) => (
          <RatingStar key={index} user={item.user} ratingStar={item.ratingStar} date={item.date} text={item.text}/>
        ))
        }
      </div>
    </PageLayout>
  )
};

export default Rating;