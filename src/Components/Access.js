import React from 'react'

const Access = () => {
  return (
    <>
    <section class="text-gray-600 body-font ">
    <div className='text-center text-3xl bg-title-back h-28'>ACCESS</div>
      <div class="inset-0 bg-gray-300">
      {/* <iframe className='w-400 h-400 border-spacing-0' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.2406159942852!2d133.78707241527957!3d34.24240338055467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35517d8a8509d933%3A0xa1ce1c4c9e7b55b7!2z5bed5bed44GG44Gp44KT!5e0!3m2!1sja!2sjp!4v1664271492717!5m2!1sja!2sjp"></iframe> */}
      </div>
      <div class="container px-5 py-12 mx-auto flex">
        <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">ご案内</h2>
          <div class="mb-4">
            <p>住所</p>
            <p>〒765-0031 香川県善通寺市金蔵寺町442</p>
            <p><a href="tel:0877-55-7247">0877-55-7247</a></p>
            <p>営業時間</p>
            <p>11:00～14:00 (麵がなくなり次第終了)</p>
            <p> ※休みは火曜日、水曜日 </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Access