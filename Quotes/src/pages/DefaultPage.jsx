
import { SVGMaskEffectDemo } from '../components/ui/SVGMaskEffectDemo'
function DefaultPage() {
  return (
    <>
        <div className=' w-full h-full flex justify-center items-center bg-white/30 backdrop-blur-sm'>
            <SVGMaskEffectDemo/>
        </div>
    </>
  )
}

export default DefaultPage