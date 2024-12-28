import Header from '@/components/ui/Header'
import FoodFinder from './food-finder/FoodFinder'

const HomePageContent = () => {
	return (
		<div>
			<Header userLocation='Ukraine' />
			<FoodFinder />
		</div>
	)
}

export default HomePageContent
