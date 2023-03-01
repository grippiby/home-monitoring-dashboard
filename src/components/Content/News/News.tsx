import { useState, useRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import style from './News.module.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper'

const News = (props) => {
	return (
		<div className={style.container}>
			<>
				<Swiper
					loop={true}
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					effect={'coverflow'}
					grabCursor={true}
					slidesPerView={'auto'}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true,
					}}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Autoplay, Pagination, Navigation]}
					className={style.mySwiper}
				>
					<SwiperSlide>
						<img src="https://swiperjs.com/demos/images/nature-1.jpg" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="https://swiperjs.com/demos/images/nature-2.jpg" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="https://swiperjs.com/demos/images/nature-3.jpg" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="https://swiperjs.com/demos/images/nature-4.jpg" />
					</SwiperSlide>
					<SwiperSlide>
						<img src="https://swiperjs.com/demos/images/nature-5.jpg" />
					</SwiperSlide>
				</Swiper>
			</>
		</div>
	)
}

export default News
