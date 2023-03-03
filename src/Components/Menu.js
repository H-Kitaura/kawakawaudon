import React from 'react'

const Menu = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className='text-center text-3xl bg-title-back h-28'>MENU</div>
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-6 md:w-1/3 sm:mb-0 mb-6 shadow-lg rounded-3xl">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full " src="bukkake.png" />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">ぶっかけうどん</h2>
            <p className="text-base leading-relaxed mt-2">至ってシンプル！故にうまい！是非一杯！</p>
          </div>
          <div className="p-6 md:w-1/3 sm:mb-0 mb-6 shadow-lg rounded-3xl">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src="ki-ma-curry.png" />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">キーマカレーうどん</h2>
            <p className="text-base leading-relaxed mt-2">弟アイデアの創作うどんの代名詞！当店看板メニュー！ご飯を合わせるとまた美味しい。</p>
          </div>
          <div className="p-6 md:w-1/3 sm:mb-0 mb-6 shadow-lg rounded-3xl">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1205x505" />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">The 400 Blows</h2>
            <p className="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
          </div>
          <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
            <button className='border bg-blue-500 text-white p-2 m-4 shadow-lg rounded-3xl'>メニューはこちらから</button>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Menu