import foto1 from '~/assets/img/login_images/1.jpg';
import foto2 from '~/assets/img/login_images/2.jpg';
import foto3 from '~/assets/img/login_images/3.jpg';
import foto4 from '~/assets/img/login_images/4.jpg';
import foto5 from '~/assets/img/login_images/5.jpg';
import foto6 from '~/assets/img/login_images/6.jpg';
import foto7 from '~/assets/img/login_images/7.jpg';
import foto8 from '~/assets/img/login_images/8.jpg';
import foto9 from '~/assets/img/login_images/9.jpg';
import foto10 from '~/assets/img/login_images/10.jpg';
import foto11 from '~/assets/img/login_images/11.jpg';
import foto12 from '~/assets/img/login_images/12.jpg';
import foto13 from '~/assets/img/login_images/13.jpg';
import foto14 from '~/assets/img/login_images/14.jpg';
import foto15 from '~/assets/img/login_images/15.jpg';

export const imagesToMap: string[] = [
	foto1,
	foto2,
	foto3,
	foto4,
	foto5,
	foto6,
	foto7,
	foto8,
	foto9,
	foto10,
	foto11,
	foto12,
	foto13,
	foto14,
	foto15,
];

export const uptodown = {
	dots: false,
	infinite: true,
	vertical: true,
	speed: 2500,
	slidesToShow: 1,
	autoplay: true,
	autoplaySpeed: 500,
	arrows: false,
	pauseOnHover: false,
	accessibility: false,
	pauseOnFocus: false,
	swipe: false,
	cssEase: 'linear',
};

export const downtoup = {
	...uptodown,
	rtl: true,
};
