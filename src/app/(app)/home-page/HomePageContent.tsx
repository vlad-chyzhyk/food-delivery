import Header from '@/components/ui/Header'
import FoodFinder from './food-finder/FoodFinder'
import FoodSales from './food-sales/FoodSales'
import TutorialSection from './tutorial-section/TutorialSection'

const PRODUCTSFORSALE = [
	{
		id: 0,
		productName: 'Chill Salad',
		salesPer: '15',
		daysRemaining: '6',
		imageSrc: '/assets/common/product1.png',
	},
	{
		id: 1,
		productName: 'Chill Salad',
		salesPer: '10',
		daysRemaining: '6',
		imageSrc: '/assets/common/product2.png',
	},
	{
		id: 2,
		productName: 'Chill Salad',
		salesPer: '25',
		daysRemaining: '7',
		imageSrc: '/assets/common/product3.png',
	},
	{
		id: 3,
		productName: 'Chill Salad',
		salesPer: '20',
		daysRemaining: '8',
		imageSrc: '/assets/common/product4.png',
	},
]

const HomePageContent = () => {
	return (
		<div>
			<Header userLocation='Ukraine' />
			<FoodFinder />
			<FoodSales salesProducts={PRODUCTSFORSALE} />
			<TutorialSection />
		</div>
	)
}

export default HomePageContent
