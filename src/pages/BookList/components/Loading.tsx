
import ShimmerCard from '../../../components/Shimmer'
import generateUniqueKey from '../../../utils/uniqueKey'
const LoadingAnimation = () => {
    return <>{[... new Array(12)].map(() => (
        <ShimmerCard key={generateUniqueKey()} />
    ))}</>
}


export default LoadingAnimation;