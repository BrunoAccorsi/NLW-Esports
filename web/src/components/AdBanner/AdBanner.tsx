import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';

export function AdBanner() {
    return (
        <div className="pt-1 bg-nlw-gradiant self-stretch rounded-lg overflow-hidden mt-8">
            <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
            <div>
                <strong className="text-2xl text-white font-black block">Didn't found yor duo?</strong>
                <span className="text-zinc-400">Publish a ad to find new players!</span>
            </div>
            <Dialog.Trigger>
                <button className='py-3 px-4 bg-violet-500 text-white rounded-md hover:bg-violet-600 flex items-center gap-3'>
                    <MagnifyingGlassPlus size={24}/>
                    Publish Ad
                </button>
            </Dialog.Trigger>
            </div>
        </div>
    )
}