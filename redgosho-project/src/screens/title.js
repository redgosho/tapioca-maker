import React from 'react';
import '../css/Title.css';

function Title() {
  return (
    <div className="Title">
        {/* タピオカジュース全体ここから  */}
        <div class="cup">
            {/* カップの蓋 */}
            <div class="cup__top"></div>
            {/* ストロー */}
            <div class="straw"></div>
            <div class="straw--bottom"></div>
            {/* カップの中身 */}
            <div class="cup__inner-wrap">
            <div class="cup__inner-top"></div>
            <div class="cup__inner">
                <div class="tapioka tsubu-1"></div>
                <div class="tapioka tsubu-2"></div>
                <div class="tapioka tsubu-3"></div>
                <div class="tapioka tsubu-4"></div>
                <div class="tapioka tsubu-5"></div>
                <div class="tapioka tsubu-6"></div>
                <div class="tapioka tsubu-7"></div>
                <div class="tapioka tsubu-8"></div>
            </div>
            <div class="cup__inner-bottom"></div>
            </div>
            {/* カップの底 */}
            <div class="cup__bottom"></div>
        </div>
        {/* タピオカジュース全体ここまで */}
    </div>
  );
}

export default Title;
