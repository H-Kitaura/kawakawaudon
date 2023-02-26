import React from 'react'

const Title = () => {
  return (
//     <div className='d-flex text-center'>
//       <a href="/">川川うどん</a>

//     <div>
//     <div>
//         <ul>
//             <h5><li>営業時間</li></h5>
//             <h6>11:00~14:00<br />※休みは火曜日、水曜日</h6>
//             <li>玉切れ・臨時休業の場合あり。</li>
//             <li>柔らかめの細麺。茹で置きしないため提供にお時間がかかります。ご了承ください。</li>
//             <li>食器の返却や天ぷらがセルフです。</li>
//             <li>各メニューなくなり次第終了です</li>
//         </ul>
//     </div>
//   </div>
// </div>


<header className="text-gray-600 body-font bg-slate-300">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-xl">川川うどん</span>
    </div>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <div className="mr-5 hover:text-gray-900">川川うどんについて</div>
        <div className="mr-5 hover:text-gray-900">メニュー</div>
        <div className="mr-5 hover:text-gray-900">アクセス</div>
        <div className="mr-5 hover:text-gray-900">問い合わせ</div>
      </nav>
  </div>
</header>
  )
}

export default Title