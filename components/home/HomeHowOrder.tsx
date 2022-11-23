import * as React from 'react'
import Image from 'next/image'
import HomeHowOrderCard from './HomeHowOrderCard'
import { HomeHowOrderList } from '../../types/interfaces'

import h_how_order_styles from '../../styles/components/HomeHowOrder.module.scss'
import h_how_order_flower from '../../public/main/home_h_order_flower.png'

const HomeHowOrder = () => {
  const list: HomeHowOrderList[] = [
    { id: 1, step: 1, text: 'Выберите какие цветы или подарки вы хотите купить' },
    { id: 2, step: 2, text: 'Оформите заказ, и мы отправим вам подтверждение на электронную почту, а так же менеджер свяжется с вами по телефону или в WhatsApp' },
    { id: 3, step: 3, text: 'Наши флористы бережно подойдут к созданию букета цветов в самом начале дня или накануне' },
    { id: 4, step: 4, text: 'Один из наших курьеров или партнёров доставит ваш заказ по указанному адресу. Мы отправим вам сообщение в Whats App как только заказ будет доставлен' },
    { id: 5, step: 5, text: 'Наслаждайтесь цветами , если вы заказали их для дома или любовью, которой поделились, если вы заказали для друга' },
  ]

  return(
    <div className={ h_how_order_styles.home_how_order }>
      <div className={ `container ${ h_how_order_styles.container }` }>
        <h2 className={ h_how_order_styles.home_how_order__title }>Как сделать<br />заказ</h2>
        <div className={ h_how_order_styles.home_how_order__content }>
          <div className={ h_how_order_styles.home_how_order__line_top }></div>
          <div className={ h_how_order_styles.home_how_order__list }>
            {
              list.map(item => <HomeHowOrderCard item={ item } />)
            }
          </div>
        </div>
        <div className={ h_how_order_styles.home_how_order__name }>
          <svg width="257" height="194" viewBox="0 0 257 194" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.9546 143.176C22.6415 143.242 22.485 143.275 22.1719 143.341C21.0431 143.417 20.5975 142.857 21.0249 141.785C21.5998 139.864 22.8671 138.124 24.3902 136.821C30.0463 131.863 36.3377 127.588 42.5387 123.659C43.6916 122.924 44.1521 122.009 44.7692 121.061C48.0351 115.627 50.7983 110.136 53.1491 104.242C56.0416 96.2704 58.7113 88.019 59.7163 79.6292C60.3452 74.0993 60.5045 68.6687 60.8203 63.2049C60.9796 57.7743 60.6361 52.2866 59.9465 46.7085C59.6634 43.8246 59.5368 40.9077 58.9075 37.9335C58.8744 37.777 58.8081 37.4639 58.775 37.3074C58.9556 36.615 58.4107 35.5855 59.1933 35.4199C59.8195 35.2874 59.9279 36.5728 60.0604 37.1989C60.7981 41.4585 61.3462 45.5946 61.6143 49.9535C61.8162 53.9994 62.0181 58.0452 61.8738 62.0008C61.7536 65.2971 61.7568 68.4037 61.6034 71.5435C61.3357 75.6887 60.7549 79.9001 60.141 83.955C59.3556 89.5181 57.6881 94.7772 55.8641 100.069C54.0402 105.362 52.0265 110.53 49.4439 115.329C48.6463 116.97 47.6258 118.33 46.7951 119.814C46.5483 120.194 46.1449 120.606 46.5573 121.01C46.7801 121.29 47.1835 120.877 47.4634 120.654C51.8613 118.252 56.2593 115.849 60.6903 113.604C65.4345 111.291 70.4014 109.259 75.1455 106.947C78.5471 105.246 81.8252 103.735 85.4496 102.314C91.3888 100.239 97.1955 97.5387 103.358 95.7442C105.203 95.1903 107.238 94.7597 108.984 93.7361C109.544 93.2905 110.706 93.3718 111.521 93.3627C111.834 93.2964 112.37 93.5101 112.437 93.8232C112.412 94.4825 112.066 94.3922 111.63 94.6481C103.556 96.6834 95.838 99.6249 87.9963 102.756C81.6537 105.243 75.4105 108.199 69.1341 110.999C65.6994 112.544 62.2648 114.088 58.8632 115.789C55.6513 117.613 52.4394 119.438 49.2275 121.262C47.7615 122.063 46.2955 122.864 45.0192 123.788C43.9897 124.333 43.3064 124.968 42.8459 125.883C40.9044 129.074 38.5173 131.706 35.9406 134.213C32.5572 137.546 29.1075 140.565 24.7668 142.465C24.4868 142.688 24.1738 142.754 23.8938 142.977C23.5807 143.043 23.2677 143.109 22.9546 143.176ZM23.3489 141.947C23.8185 141.848 24.5681 141.526 25.1611 141.237C28.5295 139.379 31.3621 137.308 34.0622 134.611C36.2024 132.359 38.3095 129.951 40.227 127.419C40.5069 127.196 40.9434 126.94 40.6875 126.504C40.3082 126.257 39.9048 126.669 39.6249 126.892C37.0391 128.584 34.4865 130.432 31.9338 132.281C28.8544 134.731 25.7087 136.869 23.2645 140.003C22.8612 140.415 22.4578 140.828 22.4337 141.487C22.3766 141.99 22.5994 142.27 23.3489 141.947ZM82.7929 80.634C81.6972 80.8658 80.0896 80.2247 79.5778 79.3517C79.0992 78.6353 79.0148 76.6907 79.5084 75.932C79.7553 75.5527 80.1917 75.2968 80.5711 75.5437C81.1069 75.7574 80.8601 76.1367 80.7698 76.4829C80.4658 77.3649 80.0715 78.5931 81.1763 79.1771C82.2811 79.761 83.0878 78.9361 83.9277 78.2678C84.4876 77.8223 84.8578 77.2533 85.2612 76.8409C85.6645 76.4284 85.5983 76.1154 84.939 76.0913C83.9998 76.29 82.9613 76.0192 82.606 75.1131C82.2507 74.207 83.0575 73.3821 83.7076 72.5904C85.3211 70.9407 87.1754 71.2025 88.3887 73.0718C88.6446 73.5083 88.9005 73.9448 89.3701 73.8454C91.3147 73.761 93.3166 73.1739 95.3515 72.7433C95.9777 72.6108 96.7272 72.2887 97.5099 72.1231C97.6664 72.09 98.1029 71.8341 98.2023 72.3037C98.2685 72.6168 97.9554 72.683 97.6755 72.9058C94.7676 73.8481 92.0824 75.0705 89.2889 75.0074C88.4731 75.0165 87.9463 75.6185 87.6092 76.344C86.7784 77.8282 85.6917 78.8758 84.4154 79.8C83.8555 80.2456 83.419 80.5015 82.7929 80.634ZM100.449 81.9679C97.9444 82.4979 95.9816 80.9507 96.2675 78.437C96.4962 76.4262 96.9145 74.5387 97.1763 72.6843C97.3569 71.9919 97.5706 71.4561 98.4195 71.6035C98.9554 71.8172 98.9313 72.4765 98.7176 73.0124C98.4889 75.0232 97.7906 77.1335 97.9082 79.2347C97.8932 80.7097 98.4621 81.08 100.027 80.7488C101.56 80.261 102.77 79.0237 104.013 77.943C105.536 76.6394 105.28 76.203 106.358 74.3395C106.728 73.7706 106.818 73.4244 106.06 72.9307C105.301 72.4371 105.136 71.6544 105.596 70.7392C106.09 69.9806 106.55 69.0655 107.011 68.1503C107.348 67.4248 107.908 66.9792 108.79 67.2832C109.795 67.3976 110.274 68.114 110.16 69.1195C110.259 69.5891 110.202 70.0918 109.955 70.4711C109.808 71.32 110.187 71.5668 110.78 71.2778C112.122 70.6667 113.498 70.212 114.997 69.5678C117.122 68.791 119.215 67.8577 121.34 67.0809C121.653 67.0147 122.089 66.7588 122.156 67.0718C122.445 67.6649 121.785 67.6408 121.629 67.6739C117.511 69.8536 113.393 72.0333 109.109 73.4303C108.327 73.5959 108.113 74.1317 107.743 74.7007C105.801 77.8917 105.16 79.4992 101.825 81.5133C101.545 81.7361 101.075 81.8354 100.449 81.9679ZM107.526 72.1299C108.152 71.9974 109.187 69.1617 108.931 68.7252C108.709 68.4452 108.552 68.4783 108.272 68.7011C107.622 69.4929 107.005 70.4411 106.734 71.4797C106.677 71.9824 107.056 72.2293 107.526 72.1299ZM141.47 62.985C137.921 65.5349 134.183 67.9614 130.378 70.0748C128.879 70.7191 127.569 71.4868 126.07 72.1311C124.694 72.5857 123.376 72.5376 121.991 72.1764C120.64 71.9718 120.095 70.9423 119.673 69.7232C119.607 69.4101 119.697 69.0639 119.821 68.8742C120.651 67.3901 121.639 65.8729 123.038 64.759C123.969 63.7445 125.254 63.636 126.112 64.5993C126.78 65.4391 126.666 66.4446 125.736 67.4591C124.773 68.3171 123.62 69.0517 122.467 69.7862C122.154 69.8525 121.684 69.9518 121.75 70.2649C121.85 70.7345 122.229 70.9813 122.575 71.0716C123.614 71.3425 124.709 71.1107 125.616 70.7554C128.49 69.6565 131.109 68.1211 133.885 66.5526C135.944 65.4628 138.126 64.1833 140.185 63.0934C140.622 62.8375 140.935 62.7713 141.437 62.8285L141.47 62.985ZM147.742 69.3446C146.456 69.453 145.294 69.3718 144.436 68.4086C143.545 67.2888 143.972 66.2171 144.556 65.1123C145.017 64.1971 145.444 63.1254 146.061 62.1771C146.152 61.831 146.275 61.6413 146.052 61.3614C145.706 61.2711 145.583 61.4607 145.459 61.6504C143.993 62.4512 142.527 63.252 141.028 63.8963C140.435 64.1853 139.966 64.2847 139.306 64.2606C137.798 64.0891 137.32 63.3727 137.837 61.9548C138.873 59.119 140.477 56.6535 142.428 54.2783C142.551 54.0886 142.831 53.8659 142.954 53.6762C143.514 53.2306 144.017 53.2878 144.742 53.6249C145.278 53.8386 145.254 54.4979 145.197 55.0006C144.869 56.5419 144.351 57.9598 143.834 59.3777C143.743 59.7239 143.34 60.1363 143.719 60.3831C143.942 60.6631 144.379 60.4072 144.658 60.1844C145.688 59.6395 146.684 58.938 147.714 58.3931C148.307 58.1041 148.933 57.9716 149.379 58.5315C149.981 59.0583 149.577 59.4707 149.207 60.0397C147.816 61.9693 146.649 64.179 145.794 66.3224C145.58 66.8582 145.333 67.2375 145.589 67.674C146.035 68.2339 146.661 68.1014 147.13 68.002C149.256 67.2253 151.092 65.8555 152.738 64.3623C154.262 63.0588 155.818 61.9118 156.929 60.2049C157.299 59.6359 157.925 59.5034 158.361 59.2475C158.674 59.1813 158.831 59.1481 158.864 59.3047C158.897 59.4612 158.93 59.6177 158.807 59.8074C155.803 63.3868 152.832 67.1227 148.491 69.0225C148.178 69.0887 147.865 69.1549 147.742 69.3446ZM139.791 62.6862C140.574 62.5206 140.565 61.7048 140.968 61.2924C142.268 59.7089 142.843 57.7883 143.608 55.9911C143.731 55.8014 143.821 55.4552 143.475 55.3649C143.286 55.2415 143.162 55.4312 143.039 55.6208C141.771 57.3609 140.438 58.7878 139.707 60.7415C139.46 61.1209 139.403 61.6236 139.345 62.1263C139.255 62.4725 139.478 62.7524 139.791 62.6862ZM115.127 176.252C113.998 176.327 112.902 176.559 111.93 176.601C107.291 177.092 104.66 174.705 104.639 169.967C104.693 166.357 105.629 163.052 107.224 159.771C110.044 153.777 113.434 148.154 117.771 143.147C122.759 137.349 128.539 132.201 134.318 127.053C138.328 123.588 142.717 120.37 147.139 117.308C147.855 116.83 148.382 116.228 148.373 115.412C148.731 110.92 149.245 106.396 149.29 101.971C149.371 100.809 149.296 99.6799 149.064 98.5841C148.998 98.2711 148.742 97.8346 149.212 97.7352C149.681 97.6359 149.904 97.9158 149.97 98.2289C150.359 99.2915 150.591 100.387 150.633 101.36C150.555 105.628 150.287 109.773 149.706 113.985C149.772 114.298 149.402 114.867 149.938 115.081C150.317 115.327 150.721 114.915 151.034 114.849C156.205 111.465 161.41 108.238 166.648 105.167C166.804 105.134 166.928 104.944 167.241 104.878C167.554 104.812 167.743 104.935 167.966 105.215C168.189 105.495 167.909 105.718 167.786 105.907C167.226 106.353 166.822 106.765 166.353 106.865C161.139 109.276 156.627 112.684 151.859 115.655C149.8 116.745 149.315 118.32 149.086 120.331C148.491 126.017 147.392 131.646 145.634 137.252C144.271 141.629 142.751 146.039 140.852 150.202C138.829 154.555 136.617 158.785 133.802 162.488C130.337 166.982 126.394 170.76 121.626 173.732C119.567 174.822 117.475 175.755 115.127 176.252ZM114.425 175.255C116.18 175.048 117.713 174.56 119.212 173.916C122.77 172.181 125.693 169.764 128.516 166.877C131.776 163.734 134.434 160.064 136.556 156.181C141.261 147.499 144.737 138.423 146.639 128.862C147.262 125.623 147.762 122.573 148.039 119.244C148.162 119.054 148.252 118.708 147.873 118.461C147.494 118.214 147.247 118.594 146.967 118.817C142.825 121.655 138.906 124.774 134.863 128.083C129.857 132.249 125.264 136.819 120.703 141.546C117.756 144.622 115.255 148.259 112.754 151.895C111.149 154.361 109.768 157.106 108.386 159.852C106.758 162.977 105.822 166.282 105.578 169.768C105.277 173.757 107.183 175.807 111.105 175.794C112.267 175.876 113.33 175.487 114.425 175.255ZM187.402 78.0429C187.839 77.787 188.218 78.0338 188.318 78.5034C188.574 78.9399 188.104 79.0393 187.667 79.2952C179.043 82.5919 170.386 85.7321 161.794 89.1853C156.671 91.2507 151.77 93.5959 146.68 95.8178C139.061 99.2288 131.698 103.076 124.558 107.204C115.638 112.198 106.909 117.316 98.5013 123.184C96.9119 124.174 95.5122 125.288 93.7 125.999C93.5766 126.188 93.2966 126.411 93.0739 126.131C92.8511 125.851 93.2876 125.595 93.411 125.406C93.9709 124.96 94.6542 124.325 95.3706 123.846C100.946 120.05 106.554 116.41 112.384 113.05C119.368 108.956 126.352 104.862 133.402 101.08C141.078 97.1667 148.977 93.5328 156.942 90.2121C165.31 86.4789 174.124 83.3056 182.592 80.042C184.248 79.3646 185.747 78.7203 187.402 78.0429ZM156.235 136.808C155.334 134.872 156.379 132.852 156.608 130.841C157.203 125.155 158.525 119.805 160.349 114.513C161.227 111.711 162.486 109.155 163.554 106.476C165.724 101.274 168.084 96.1951 170.411 90.9601C172.771 85.8816 175.444 80.7368 178.15 75.7486C180.148 72.0549 182.147 68.3611 184.492 64.7577C185.602 63.0508 186.557 61.377 187.89 59.95C188.137 59.5707 188.54 59.1583 188.944 58.7459C189.784 58.0775 190.566 57.9119 191.481 58.3725C192.24 58.8661 192.406 59.6488 192.415 60.4646C192.418 63.5712 191.572 66.5304 190.57 69.5227C189.634 72.828 188.508 76.01 187.036 79.1017C185.844 81.9705 184.685 84.996 183.147 87.7745C182.07 89.638 181.215 91.7814 180.204 93.9579C178.732 97.0495 177.103 100.174 175.664 103.422C172.36 110.991 167.95 117.975 163.73 125.082C162.035 127.894 160.307 130.549 158.266 133.271C157.369 134.442 157.306 137.235 158.231 138.511C158.866 139.195 159.525 139.219 160.275 138.897C161.65 138.442 162.737 137.394 163.667 136.38C165.931 133.938 168.005 131.374 170.235 128.776C170.359 128.586 170.572 128.05 170.952 128.297C171.331 128.544 170.928 128.956 170.648 129.179C168.417 131.777 166.566 134.622 164.525 137.343C163.595 138.358 162.632 139.216 161.446 139.794C158.917 140.983 157.054 139.905 156.235 136.808ZM191.12 59.7572C190.955 58.9745 190.262 58.794 189.579 59.4292C187.652 61.1451 186.641 63.3216 185.407 65.2182C182.972 69.1679 180.693 73.0844 178.571 76.9678C176.515 81.1642 174.27 85.2373 172.214 89.4338C169.978 94.3226 167.774 99.368 165.727 104.38C163.59 109.739 161.297 115.13 159.852 120.669C159.163 123.595 158.63 126.488 158.098 129.381C158.007 129.727 157.794 130.263 158.329 130.477C158.832 130.534 158.889 130.031 159.136 129.652C161.514 126.205 163.669 122.478 165.825 118.751C169.527 113.062 172.504 107.035 175.637 100.975C177.57 96.9683 179.469 92.805 181.558 88.765C185.086 81.4769 188.267 74.0985 190.377 66.2926C190.919 64.2155 191.271 62.0149 191.12 59.7572ZM173.258 133.042C172.162 133.274 170.554 132.633 170.043 131.76C169.564 131.044 169.479 129.099 169.973 128.34C170.22 127.961 170.656 127.705 171.036 127.952C171.572 128.166 171.325 128.545 171.234 128.891C170.93 129.773 170.536 131.001 171.641 131.585C172.746 132.169 173.553 131.344 174.392 130.676C174.952 130.231 175.322 129.662 175.726 129.249C176.129 128.837 176.063 128.524 175.404 128.5C174.465 128.698 173.426 128.428 173.071 127.521C172.715 126.615 173.522 125.79 174.172 124.999C175.786 123.349 177.64 123.611 178.853 125.48C179.109 125.917 179.365 126.353 179.835 126.254C181.779 126.169 183.781 125.582 185.816 125.152C186.442 125.019 187.192 124.697 187.975 124.531C188.131 124.498 188.568 124.242 188.667 124.712C188.733 125.025 188.42 125.091 188.14 125.314C185.232 126.256 182.547 127.479 179.754 127.416C178.938 127.425 178.411 128.027 178.074 128.752C177.243 130.237 176.156 131.284 174.88 132.208C174.32 132.654 173.884 132.91 173.258 133.042ZM211.344 120.404C209.688 121.082 208.066 121.916 206.41 122.593C205.504 122.948 204.788 123.427 203.848 123.626C202.283 123.957 201.386 125.128 200.679 126.423C199.947 128.376 199.207 129.514 197.494 130.694C196.778 131.173 195.872 131.528 194.866 131.414C193.827 131.143 192.945 130.839 192.68 129.587C192.548 128.961 192.325 128.681 191.798 129.283C191.552 129.662 191.148 130.075 190.868 130.297C189.782 131.345 188.776 131.231 187.638 130.49C187.259 130.243 187.003 129.807 187.06 129.304C187.265 127.952 187.28 126.477 187.798 125.06C188.011 124.524 188.225 123.988 188.95 124.325C189.676 124.662 189.742 124.975 189.562 125.668C189.101 126.583 189.143 127.555 188.996 128.404C188.906 128.75 188.782 128.94 189.128 129.03C189.318 129.153 189.441 128.964 189.565 128.774C190.808 127.693 191.862 126.489 192.602 125.351C192.972 124.782 193.409 124.526 193.978 124.897C194.67 125.077 194.769 125.547 194.556 126.083C194.128 127.154 194.36 128.25 194.559 129.189C194.691 129.815 195.071 130.062 195.474 129.65C197.623 128.214 198.833 126.977 199.779 124.487C199.836 123.984 199.613 123.704 199.267 123.614C198.508 123.12 198.063 122.56 198.053 121.745C198.044 120.929 198.728 120.294 199.577 120.441C200.426 120.589 201.274 120.736 201.786 121.609C202.142 122.515 202.801 122.539 203.55 122.217C205.989 121.374 208.394 120.374 210.709 119.721C210.865 119.688 211.022 119.655 211.178 119.622C211.491 119.556 212.241 119.233 212.373 119.86C212.506 120.486 211.657 120.338 211.344 120.404ZM231.935 115.393C228.386 117.943 224.647 120.37 220.842 122.483C219.343 123.127 218.034 123.895 216.535 124.539C215.159 124.994 213.841 124.946 212.456 124.585C211.104 124.38 210.559 123.351 210.138 122.132C210.072 121.818 210.162 121.472 210.285 121.283C211.116 119.798 212.103 118.281 213.503 117.167C214.433 116.153 215.719 116.044 216.577 117.008C217.245 117.847 217.131 118.853 216.2 119.867C215.237 120.725 214.084 121.46 212.931 122.195C212.618 122.261 212.149 122.36 212.215 122.673C212.314 123.143 212.694 123.39 213.04 123.48C214.078 123.751 215.174 123.519 216.08 123.164C218.955 122.065 221.574 120.529 224.349 118.961C226.408 117.871 228.591 116.592 230.65 115.502C231.086 115.246 231.399 115.18 231.902 115.237L231.935 115.393ZM238.206 121.753C236.921 121.861 235.759 121.78 234.901 120.817C234.01 119.697 234.437 118.625 235.021 117.521C235.482 116.605 235.909 115.534 236.526 114.585C236.616 114.239 236.74 114.05 236.517 113.77C236.171 113.679 236.047 113.869 235.924 114.059C234.458 114.86 232.992 115.66 231.493 116.305C230.9 116.594 230.43 116.693 229.771 116.669C228.263 116.497 227.784 115.781 228.302 114.363C229.337 111.527 230.942 109.062 232.892 106.687C233.016 106.497 233.296 106.274 233.419 106.085C233.979 105.639 234.482 105.696 235.207 106.033C235.743 106.247 235.719 106.906 235.662 107.409C235.334 108.95 234.816 110.368 234.298 111.786C234.208 112.132 233.805 112.545 234.184 112.791C234.407 113.071 234.843 112.816 235.123 112.593C236.153 112.048 237.149 111.346 238.179 110.801C238.772 110.512 239.398 110.38 239.843 110.94C240.445 111.467 240.042 111.879 239.672 112.448C238.281 114.378 237.113 116.587 236.258 118.731C236.045 119.267 235.798 119.646 236.054 120.082C236.499 120.642 237.125 120.51 237.595 120.41C239.72 119.634 241.556 118.264 243.203 116.771C244.726 115.467 246.282 114.32 247.393 112.613C247.763 112.044 248.39 111.912 248.826 111.656C249.139 111.59 249.296 111.556 249.329 111.713C249.362 111.87 249.395 112.026 249.272 112.216C246.267 115.795 243.297 119.531 238.956 121.431C238.643 121.497 238.33 121.563 238.206 121.753ZM230.256 115.095C231.038 114.929 231.029 114.113 231.433 113.701C232.733 112.117 233.308 110.197 234.072 108.399C234.196 108.21 234.286 107.864 233.94 107.773C233.75 107.65 233.627 107.84 233.503 108.029C232.236 109.769 230.903 111.196 230.171 113.15C229.924 113.529 229.867 114.032 229.81 114.535C229.72 114.881 229.943 115.161 230.256 115.095Z" fill="#1F3A3A"/>
          </svg>
        </div>
      </div>
      <div className={ h_how_order_styles.home_how_order__image }>
        <Image src={ h_how_order_flower } layout='fill' />
      </div>
    </div>
  )
}

export default HomeHowOrder