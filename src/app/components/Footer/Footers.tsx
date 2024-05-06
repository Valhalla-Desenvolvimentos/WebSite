"use-client"

import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { motion } from "framer-motion"
import MeuSVG from "../../../../public/logo.svg"

import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa6"
import Logo from "../Logo/Logo"

const Footer = () => {
  const LinkGroup = ({ children, header }) => {
    return (
      <>
        <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
          <div className="mb-10 w-full">
            <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
              {header}
            </h4>
            <ul className="space-y-3">{children}</ul>
          </div>
        </div>
      </>
    )
  }

  const NavLink = ({ link, label }) => {
    return (
      <li>
        <a
          href={link}
          className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
        >
          {label}
        </a>
      </li>
    )
  }

  const currentYear = new Date().getFullYear()

  const fillVariants = {
    hidden: {
      fill: "none" // Preenchimento inicial transparente
    },
    visible: {
      fill: "rgba(0, 150, 255, 1)", // Preenchimento azul completo
      transition: {
        duration: 2, // Duração da animação (2 segundos)
        ease: "easeInOut"
      }
    }
  }
  const circleVariants = {
    hidden: {
      fill: "rgba(0, 150, 255, 0)",
      strokeDasharray: 314,
      strokeDashoffset: 314
    },
    visible: {
      fill: "rgba(0, 150, 255, 1)",
      strokeDasharray: 314,
      strokeDashoffset: 0,
      transition: {
        duration: 2, // Duração da animação (2 segundos)
        ease: "easeInOut"
      }
    }
  }

  return (
    <>
      <footer className="container z-10 bg-gradient-to-t from-primary to-black rounded-3xl text-white pb-10 pt-2 lg:pb-6 lg:pt-10 shadow-lg">
        <div className="container">
          <div className="flex justify-between items-center">
            <a href="/#" className="flex justify-center items-center">
              <Image
                src="/secundario.svg"
                alt="logo"
                width={30}
                height={30}
                className="min-w-[180px]"
              />

              <motion.svg
                width="300"
                height="300"
                viewBox="0 0 615 561"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M385.115 241.77L360.75 208.9L337.11 257.02L359.92 243.071L373.17 254.179L385.115 242.361V241.77Z M328.244 334.274L329.139 311.396L330.751 307.493C330.751 307.493 332.717 305.546 335.764 304.836C338.811 304.126 350.095 301.995 350.627 301.293C351.159 300.591 362.265 293.903 362.265 293.903L373.372 284.798L368.89 303.95C368.89 303.95 364.949 311.93 359.041 314.947C353.133 317.963 340.68 326.653 340.68 326.653L328.236 334.282L328.244 334.274Z M306.853 294.965C306.853 294.965 327.454 260.387 333.362 247.795C339.27 235.202 346.975 224.741 350.739 213.218C354.503 201.694 356.293 193.004 355.93 190.522C355.567 188.041 360.226 193.18 360.226 193.18L366.851 180.763L370.97 169.056C370.97 169.056 365.779 153.806 362.733 149.553C359.686 145.3 358.969 144.055 358.969 144.055L350.731 162.856L343.026 182.718C343.026 182.718 339.625 186.971 340.156 193.355C340.697 199.739 342.663 201.87 342.663 201.87L335.143 211.797L324.576 225.986L321.53 229.529L312.398 233.192L308.819 236.974L306.853 237.325 M306.812 352.189L320.248 326.653C320.248 326.653 322.037 313.175 322.037 309.097C322.037 305.02 318.459 298.101 318.459 298.101L326.164 288.525L338.883 278.063L354.285 272.389L366.827 267.777L372.203 269.548L374.169 269.373L373.275 264.76L359.484 251.458L347.128 259.613L335.127 266.708L332.62 267.242L328.139 276.467L321.151 287.288L310.407 305.02L306.828 308.746 M359.323 280.633C359.323 280.633 356.639 286.929 352.069 289.586C347.499 292.244 339.439 295.883 335.232 296.505C331.025 297.127 330.219 297.127 330.219 297.127C330.219 297.127 327.623 297.127 332.548 292.69C337.473 288.254 342.043 286.043 346.879 283.649C351.715 281.255 357.808 279.835 357.808 279.835H359.331V280.633H359.323Z M346.427 410.563L345.831 336.277C345.831 336.277 345.468 331.17 356.276 323.206C367.077 315.242 368.044 312.984 368.044 312.984L380.045 289.211L387.726 272.094L388.565 267.697L384.365 272.693L387.485 254.267L391.208 241.666L393.006 248.322L399.607 256.645L397.568 293.369L381.125 309.441L353.512 335.918L352.069 337.817L351.585 400.572L346.427 410.555V410.563Z M306.844 467.596C306.844 467.596 311.14 458.371 314.364 450.335C317.588 442.299 322.844 427.52 326.543 417.115C330.243 406.709 333.346 398.912 333.95 394.651C334.555 390.39 335.143 384.955 335.022 382.234C334.901 379.513 331.919 373.719 331.919 373.719L326.068 368.987L325.229 359.882L323.674 350.657L314.961 358.813L307.554 366.849L306.836 366.968 M334.337 508.773L316.96 503.45L315.702 480.396L340.777 456.28V448.125L375.701 417.801C375.701 417.801 375.523 429.859 374.443 437.128C373.371 444.398 371.759 449.896 370.679 455.395C369.599 460.893 357.961 480.396 357.961 480.396L347.749 494.936L334.313 508.765L334.337 508.773Z M445.799 361.997L438.279 353.482L424.665 343.667C424.665 343.667 407.352 371.565 407.111 371.924C406.869 372.283 398.277 387.054 395.287 392.377C392.296 397.699 391.821 397.811 389.435 403.014C387.049 408.217 384.422 413.651 383.229 415.311C382.036 416.971 380.722 416.372 382.511 418.974C384.301 421.575 389.314 425.829 390.031 426.068C390.749 426.308 393.497 427.72 393.497 427.72C393.497 427.72 400.421 412.71 402.694 408.807C404.967 404.905 406.877 401.123 409.021 397.58C411.165 394.036 415.823 386.352 419.289 382.92C422.755 379.489 430.275 373.935 432.661 372.044C435.047 370.152 438.754 366.841 441.736 364.71C444.719 362.579 445.799 361.989 445.799 361.989V361.997Z M497.125 406.948L499.1 401.976C499.1 401.976 475.621 396.119 471.857 395.233C468.093 394.348 454.294 390.972 447.838 389.911C441.382 388.849 429.018 385.833 427.043 385.649C425.069 385.466 421.49 391.858 418.621 396.295C415.751 400.732 408.223 411.377 407.869 412.446C407.514 413.516 410.198 420.785 411.093 422.74C411.987 424.696 423.997 425.047 423.997 425.047L430.09 427.712L430.807 443.329L429.373 479.359L427.761 483.971L406.071 501.184V510.233C406.071 510.233 407.143 510.584 408.941 510.233C410.738 509.882 420.773 502.245 420.773 502.245L432.782 492.127C432.782 492.127 434.039 491.592 438.521 475.975C443.002 460.358 445.573 429.835 445.573 429.835V422.732C445.573 422.732 455.906 415.989 458.244 413.148C460.573 410.308 467.924 403.564 467.924 403.564L470.253 402.679L479.393 404.45C479.393 404.45 484.229 405.871 486.381 406.046L497.133 406.932L497.125 406.948Z M495.384 412.837L492.281 439.554L474.372 457.996L444.759 484.474L451.207 466.511L451.441 432.699L452.843 429.388L472.695 407.395L495.384 412.837Z M508.433 410.116V399.83L505.209 397.228V393.446C505.386 393.446 511.359 381.859 514.704 372.403C518.049 362.946 518.049 361.287 521.393 348.048C524.738 334.809 525.689 327.946 526.407 320.86C527.124 313.766 527.124 307.852 527.366 301.468C527.608 295.084 527.366 291.062 527.366 291.062L537.393 295.795C537.393 295.795 538.585 298.867 538.352 307.613C538.118 316.359 536.917 327.715 536.917 327.715C536.917 327.715 535.482 341.193 533.814 349.229C532.145 357.265 523.304 381.859 523.304 381.859C523.304 381.859 514.704 401.841 511.842 405.974C508.981 410.108 508.441 410.116 508.441 410.116H508.433Z M560.549 329.957L551.949 321.331L543.832 363.776C543.832 363.776 540.552 376.664 538.368 382.457C536.183 388.251 527.229 407.523 525.198 411.185C523.167 414.848 517.791 426.084 516.001 428.327C514.212 430.569 514.212 434.95 514.212 435.301C514.212 435.652 492.24 459.656 492.24 459.656L470.027 479.159L436.949 508.773L450.199 510.353L464.167 498.67C464.167 498.67 492.829 469.591 495.335 466.04C497.842 462.497 514.325 440.855 514.325 440.855L521.861 433.41C521.861 433.41 533.016 417.45 538.352 406.102C543.687 394.755 551.215 373.472 551.215 373.472C551.215 373.472 554.085 362.476 555.157 356.092C556.229 349.708 560.533 329.965 560.533 329.965L560.549 329.957Z M557.921 278.151L517.323 254.977C517.323 254.977 512.31 255.448 510.158 237.716L508.006 219.985H514.929L573.921 253.796L579.409 260.18L577.499 264.673L568.899 272.477L557.913 278.151H557.921Z M557.688 240.23L549.088 236.447C549.088 236.447 547.419 226.042 542.64 212.332C537.86 198.622 531.896 180.172 529.744 176.869C527.592 173.565 533.089 168.833 533.089 168.833L539.537 179.239C539.537 179.239 546.944 198.151 548.37 203.123C549.797 208.094 552.908 216.841 554.101 223.225C555.294 229.609 557.68 240.246 557.68 240.246L557.688 240.23Z M492.249 390.134L482.931 387.293C482.931 387.293 491.765 368.141 495.352 353.953C498.93 339.765 499.414 336.573 501.8 326.111C504.186 315.649 506.096 304.772 505.378 292.714C504.661 280.657 505.62 274.273 503.71 265.527C501.8 256.781 495.352 229.353 495.352 229.353C495.352 229.353 489.146 213.042 486.994 208.9C484.842 204.759 480.304 197.904 480.304 197.904L486.752 190.1L494.393 202.397L502.033 220.368C502.033 220.368 506.096 233.136 508.006 240.23C509.916 247.324 513.261 257.02 513.261 257.02L514.696 294.733L513.027 321.331L507.055 350.593L492.249 390.142V390.134Z M484.132 297.127L466.223 279.835L463.829 284.798L473.985 297.127L443.768 327.954L484.132 297.127Z M448.547 301.468L432.073 314.476L429.679 305.49L434.7 305.251L448.547 301.468Z M456.043 279.835L453.649 277.353L440.036 292.483L456.043 281.135V279.835Z M419.386 281.135L417.952 274.512L407.683 284.798V291.063L419.386 281.135Z M433.475 268.663V265.822L457.655 240.054V228.707L464.103 238.395V241.946L434.644 268.663H433.475Z M404.604 307.972L400.784 303.894L390.274 321.331C390.274 321.331 387.646 324.874 385.26 334.274C382.875 343.675 381.633 347.808 381.633 347.808L395.045 322.983L404.596 307.972H404.604Z M377.265 221.317L364.127 203.697L376.064 177.1L406.877 152.985L418.58 142.818L422.038 132.883L420.845 108.297L411.649 75.3073L401.026 48.7099L387.412 22.5834L371.647 0L393.087 21.5221L408.908 40.9055L424.19 56.1553L442.099 78.0284L450.337 93.9884L455.713 116.572L460.726 138.557L459.412 141.629L465.739 144.35L460.371 152.625L449.386 171.658L434.338 187.506L412.729 214.455L400.542 227.813L390.04 236.328L377.265 221.317Z M306.812 220.368L326.156 197.433V133.593L306.812 94.1082 M389.951 145.89V114.912L320.933 69.043L319.74 74.2459L385.413 118.168L389.951 145.89Z M244.065 151.804V124.376L254.809 118.168L257.678 122.477L250.868 129.1L251.94 139.738L244.065 151.804Z M290.813 59.826V51.5507L292.481 46.8186C292.481 46.8186 295.826 44.4565 281.02 46.8186C266.214 49.1807 251.045 52.0216 251.045 52.0216C251.045 52.0216 224.415 57.9348 220.361 61.2465C216.306 64.5582 215.105 65.9786 215.105 65.9786H220.594L224.415 69.0509L262.144 60.5362L265.964 63.8479L290.797 59.826H290.813Z M486.219 98.2418C486.219 98.2418 468.842 77.8449 463.651 74.3018C458.461 70.7587 442.155 58.7647 440.366 57.4001C438.577 56.0356 418.153 41.8471 418.153 41.8471L410.093 36.708L432.483 62.244L440.721 67.4789L455.583 77.1427L465.731 83.8778L475.999 91.8578L486.211 98.2418H486.219Z M492.127 122.365L485.148 130.345L463.297 110.483L455.592 104.275L449.321 85.2982L467.947 99.6622L476.91 107.818L486.22 116.157L492.127 122.365Z M400.905 484.003L394.457 476.318L376.305 470.174L366.279 488.496L367.109 502.923L391.474 503.514L400.905 484.003Z M408.191 478.537L399.712 467.309L380.843 463.494L395.649 437.751L419.177 443.664L417.863 463.494L412.729 465.178L417.379 470.381L408.787 478.537H408.191Z M430.275 325.855L422.513 315.896L412.011 325.855L412.729 328.664L421.143 321.331L428.365 328.664L430.275 325.855Z M530.195 142.834L528.744 139.068L504.984 112.694L472.163 145.898V150.607L467.642 163.821L485.897 183.811L530.195 143.84V142.834Z M481.263 186.796L467.891 172.137L465.739 168.825L463.95 171.658L462.935 174.555L477.265 190.754L481.263 186.796Z M473.622 194.297L464.127 183.484L459.533 181.298L460.307 187.323L468.73 198.678L473.622 194.297Z M465.739 204.527L458.34 196.603L448.725 210.56L452.73 217.056L465.022 205.118L465.739 204.527Z M441.922 229.353L436.07 220.368L411.713 240.94V254.418L441.922 229.353Z M517.92 140.927L493.442 165.162L492.128 144.35L517.92 140.927Z M306.933 560.38L357.082 554.706C407.232 549.032 440.189 522.076 440.189 522.076L429.679 516.402C429.679 516.402 389.677 541.938 342.752 544.779C295.826 547.62 306.933 546.909 306.933 546.909 M260.032 394.124L255.551 380.973L254.543 353.314V338.352L249.594 328.465L247.305 327.196L250.513 340.706L250.239 380.79L260.491 397.659L260.032 394.124Z M266.899 424.273L249.885 405.831L226.865 383.128L241.913 408.64L266.899 424.273Z M306.796 535.147H310.528H338.826L379.392 522.299L372.662 518.014L334.941 521.581L306.796 521.94 M548.193 260.148L524.19 247.827L523.207 244.188L551.151 257.578L548.193 260.148Z M530.703 224.509L517.92 217.056L508.965 197.377L500.728 183.955L511.117 173.254L519.177 188.328L523.207 200.21L527.777 211.917L530.703 224.509Z M591.419 318.083L602.703 310.629L603.243 295.204L602.824 292.427L591.064 284.447L589.267 283.793L573.743 291.837L573.332 308.682L585.511 318.083L586.164 309.033L590.701 308.914L591.419 318.083Z M614.019 313.375V286.721L589.976 272.318L564.853 289.099V313.375L588.566 328.728L614.019 313.375Z M228.904 241.77L253.261 208.9L276.909 257.02L254.099 243.071L240.841 254.179L228.904 242.361V241.77Z M285.775 334.274L284.881 311.396L283.269 307.493C283.269 307.493 281.302 305.546 278.255 304.836C275.209 304.126 263.925 301.995 263.393 301.293C262.861 300.591 251.754 293.903 251.754 293.903L240.647 284.798L245.129 303.95C245.129 303.95 249.07 311.93 254.978 314.947C260.886 317.963 273.339 326.653 273.339 326.653L285.783 334.282L285.775 334.274Z M307.159 294.965C307.159 294.965 286.557 260.387 280.649 247.795C274.741 235.202 267.036 224.741 263.272 213.218C259.508 201.694 257.719 193.004 258.081 190.522C258.444 188.041 253.785 193.18 253.785 193.18L247.16 180.763L243.042 169.056C243.042 169.056 248.232 153.806 251.279 149.553C254.326 145.3 255.043 144.055 255.043 144.055L263.28 162.856L270.986 182.718C270.986 182.718 274.387 186.971 273.855 193.355C273.323 199.739 271.348 201.87 271.348 201.87L278.868 211.797L289.435 225.986L292.482 229.529L301.614 233.192L305.192 236.974L307.159 237.325 M307.207 352.189L293.771 326.653C293.771 326.653 291.982 313.175 291.982 309.097C291.982 305.02 295.56 298.101 295.56 298.101L287.855 288.525L275.136 278.063L259.734 272.389L247.192 267.777L241.816 269.548L239.85 269.373L240.744 264.76L254.535 251.458L266.891 259.613L278.892 266.708L281.399 267.242L285.88 276.467L292.868 287.288L303.612 305.02L307.191 308.746 M254.696 280.633C254.696 280.633 257.38 286.929 261.95 289.586C266.52 292.244 274.58 295.883 278.787 296.505C282.995 297.127 283.801 297.127 283.801 297.127C283.801 297.127 286.396 297.127 281.471 292.69C276.547 288.254 271.977 286.043 267.141 283.649C262.305 281.255 256.211 279.835 256.211 279.835H254.688V280.633H254.696Z M267.592 410.563L268.188 336.277C268.188 336.277 268.551 331.17 257.743 323.206C246.942 315.242 245.975 312.984 245.975 312.984L233.974 289.211L226.293 272.094L225.454 267.697L229.654 272.693L226.534 254.267L222.811 241.666L221.013 248.322L214.412 256.645L216.451 293.369L232.894 309.441L260.507 335.918L261.95 337.817L262.434 400.572L267.592 410.555V410.563Z M307.175 467.596C307.175 467.596 302.879 458.371 299.655 450.335C296.431 442.299 291.176 427.52 287.476 417.115C283.776 406.709 280.673 398.912 280.069 394.651C279.464 390.39 278.876 384.955 278.997 382.234C279.118 379.513 282.1 373.719 282.1 373.719L287.952 368.987L288.79 359.882L290.345 350.657L299.058 358.813L306.465 366.849L307.183 366.968 M279.682 508.773L297.059 503.45L298.317 480.396L273.242 456.28V448.125L238.318 417.801C238.318 417.801 238.495 429.859 239.575 437.128C240.655 444.398 242.259 449.896 243.339 455.395C244.419 460.893 256.058 480.396 256.058 480.396L266.27 494.936L279.706 508.765L279.682 508.773Z M168.212 361.997L175.732 353.482L189.346 343.667C189.346 343.667 206.659 371.565 206.9 371.924C207.142 372.283 215.734 387.054 218.724 392.377C221.715 397.699 222.19 397.811 224.576 403.014C226.962 408.217 229.589 413.651 230.782 415.311C231.975 416.971 233.289 416.372 231.5 418.974C229.71 421.575 224.697 425.829 223.98 426.068C223.262 426.308 220.514 427.72 220.514 427.72C220.514 427.72 213.59 412.71 211.317 408.807C209.044 404.905 207.134 401.123 204.99 397.58C202.846 394.036 198.188 386.352 194.722 382.92C191.256 379.489 183.736 373.935 181.35 372.044C178.964 370.152 175.257 366.841 172.275 364.71C169.292 362.579 168.212 361.989 168.212 361.997Z M116.894 406.948L114.919 401.976C114.919 401.976 138.398 396.119 142.162 395.233C145.926 394.348 159.725 390.972 166.181 389.911C172.637 388.849 185.001 385.833 186.976 385.649C188.951 385.466 192.529 391.858 195.399 396.295C198.268 400.732 205.796 411.377 206.151 412.446C206.505 413.516 203.821 420.785 202.927 422.74C202.032 424.696 190.023 425.047 190.023 425.047L183.929 427.712L183.212 443.329L184.647 479.359L186.259 483.971L207.948 501.184V510.233C207.948 510.233 206.876 510.584 205.079 510.233C203.281 509.882 193.247 502.245 193.247 502.245L181.237 492.127C181.237 492.127 179.98 491.592 175.498 475.975C171.017 460.358 168.446 429.835 168.446 429.835V422.732C168.446 422.732 158.113 415.989 155.776 413.148C153.438 410.308 146.096 403.564 146.096 403.564L143.766 402.679L134.626 404.45C134.626 404.45 129.79 405.871 127.638 406.046L116.886 406.932L116.894 406.948Z M118.635 412.837L121.738 439.554L139.648 457.996L169.26 484.474L162.812 466.511L162.57 432.699L161.168 429.388L141.316 407.395L118.635 412.837Z M105.586 410.116V399.83L108.81 397.228V393.446C108.632 393.446 102.66 381.859 99.3151 372.403C95.9702 362.946 95.9702 361.287 92.6253 348.048C89.2804 334.809 88.3293 327.946 87.612 320.86C86.8946 313.766 86.8946 307.852 86.6528 301.468C86.411 295.084 86.6528 291.062 86.6528 291.062L76.6262 295.795C76.6262 295.795 75.4333 298.867 75.6671 307.613C75.9008 316.359 77.1018 327.715 77.1018 327.715C77.1018 327.715 78.5364 341.193 80.2048 349.229C81.8733 357.265 90.7151 381.859 90.7151 381.859C90.7151 381.859 99.3151 401.841 102.176 405.974C105.038 410.108 105.578 410.116 105.578 410.116H105.586Z M53.4619 329.957L62.0619 321.331L70.1784 363.776C70.1784 363.776 73.4588 376.664 75.643 382.457C77.8273 388.251 86.782 407.523 88.8131 411.185C90.8442 414.848 96.2202 426.084 98.0095 428.327C99.7989 430.569 99.7989 434.95 99.7989 435.301C99.7989 435.652 121.77 459.656 121.77 459.656L143.984 479.159L177.062 508.773L163.811 510.353L149.843 498.67C149.843 498.67 121.182 469.591 118.675 466.04C116.169 462.497 99.686 440.855 99.686 440.855L92.1499 433.41C92.1499 433.41 80.9949 417.45 75.6591 406.102C70.3234 394.755 62.7954 373.472 62.7954 373.472C62.7954 373.472 59.926 362.476 58.8541 356.092C57.7821 349.708 53.478 329.965 53.478 329.965L53.4619 329.957Z M56.0895 278.151L96.6878 254.977C96.6878 254.977 101.701 255.448 103.853 237.716L106.005 219.985H99.0816L40.0904 253.796L34.6016 260.18L36.5118 264.673L45.1118 272.477L56.0976 278.151H56.0895Z M56.3315 240.23L64.9316 236.447C64.9316 236.447 66.6 226.042 71.3796 212.332C76.1591 198.622 82.1235 180.172 84.2756 176.869C86.4276 173.565 80.9307 168.833 80.9307 168.833L74.4827 179.239C74.4827 179.239 67.0755 198.151 65.6489 203.123C64.2223 208.094 61.1111 216.841 59.9182 223.225C58.7254 229.609 56.3396 240.246 56.3396 240.246L56.3315 240.23Z M121.763 390.134L131.08 387.293C131.08 387.293 122.246 368.141 118.659 353.953C115.073 339.765 114.597 336.573 112.211 326.111C109.826 315.649 107.915 304.772 108.633 292.714C109.35 280.657 108.391 274.273 110.301 265.527C112.211 256.781 118.659 229.353 118.659 229.353C118.659 229.353 124.866 213.042 127.018 208.9C129.17 204.759 133.707 197.904 133.707 197.904L127.259 190.1L119.619 202.397L111.978 220.368C111.978 220.368 107.915 233.136 106.005 240.23C104.095 247.324 100.75 257.02 100.75 257.02L99.3154 294.733L100.984 321.331L106.956 350.593L121.763 390.142V390.134Z M129.887 297.127L147.796 279.835L150.182 284.798L140.034 297.127L170.243 327.954L129.887 297.127Z M165.472 301.468L181.946 314.476L184.332 305.49L179.319 305.251L165.472 301.468Z M157.976 279.835L160.362 277.353L173.975 292.483L157.976 281.135V279.835Z M194.633 281.135L196.067 274.512L206.336 284.798V291.063L194.633 281.135Z M180.544 268.663V265.822L156.364 240.054V228.707L149.916 238.395V241.946L179.375 268.663H180.544Z M209.407 307.972L213.227 303.894L223.737 321.331C223.737 321.331 226.365 324.874 228.751 334.274C231.136 343.675 232.378 347.808 232.378 347.808L218.966 322.983L209.415 307.972H209.407Z M236.755 221.317L249.892 203.697L237.948 177.1L207.142 152.985L195.439 142.818L191.981 132.883L193.174 108.297L202.363 75.3073L212.994 48.7099L226.607 22.5834L242.364 0L220.933 21.5221L205.111 40.9055L189.829 56.1553L171.92 78.0284L163.675 93.9884L158.307 116.572L153.293 138.557L154.599 141.629L148.272 144.35L153.648 152.625L164.634 171.658L179.682 187.506L201.291 214.455L213.469 227.813L223.98 236.328L236.755 221.317Z M307.207 220.368L287.863 197.433V133.593L307.207 94.1082 M224.068 145.89V114.912L293.086 69.043L294.279 74.2459L228.606 118.168L224.068 145.89Z M369.954 151.804V124.376L359.21 118.168L356.341 122.477L363.152 129.1L362.071 139.738L369.954 151.804Z M323.206 59.826V51.5507L321.538 46.8186C321.538 46.8186 318.193 44.4565 332.999 46.8186C347.805 49.1807 362.974 52.0216 362.974 52.0216C362.974 52.0216 389.605 57.9348 393.659 61.2465C397.713 64.5582 398.914 65.9786 398.914 65.9786H393.425L389.605 69.0509L351.876 60.5362L348.055 63.8479L323.222 59.826H323.206Z M127.799 98.2418C127.799 98.2418 145.177 77.8449 150.367 74.3018C155.558 70.7587 171.863 58.7647 173.653 57.4001C175.442 56.0356 195.866 41.8471 195.866 41.8471L203.926 36.708L181.535 62.244L173.298 67.4789L158.435 77.1427L148.288 83.8778L138.019 91.8578L127.807 98.2418H127.799Z M121.883 122.365L128.871 130.345L150.722 110.483L158.427 104.275L164.69 85.2982L146.063 99.6622L137.109 107.818L127.799 116.157L121.883 122.365Z M213.114 484.003L219.562 476.318L237.713 470.174L247.74 488.496L246.902 502.923L222.544 503.514L213.114 484.003Z M205.828 478.537L214.307 467.309L233.176 463.494L218.369 437.751L194.842 443.664L196.156 463.494L201.29 465.178L196.632 470.381L205.232 478.537H205.828Z M183.736 325.855L191.498 315.896L202.008 325.855L201.291 328.664L192.876 321.331L185.658 328.664L183.736 325.855Z M83.7365 142.834L85.1876 139.068L108.948 112.694L141.768 145.898V150.607L146.289 163.821L128.035 183.811L83.7365 143.84V142.834Z M138.767 186.796L152.14 172.137L154.292 168.825L156.081 171.658L157.097 174.555L142.767 190.754L138.767 186.796Z M146.407 194.297L155.902 183.484L160.496 181.298L159.723 187.323L151.3 198.678L146.407 194.297Z M153.291 204.527L160.692 196.603L170.307 210.56L166.302 217.056L154.01 205.118L153.291 204.527Z M176.964 229.353L182.816 220.368L207.172 240.94V254.418L176.964 229.353Z M102.368 140.927L126.846 165.162L128.16 144.35L102.368 140.927Z M306.933 560.38L357.082 554.706C407.232 549.032 440.189 522.076 440.189 522.076L429.679 516.402C429.679 516.402 389.677 541.938 342.752 544.779C295.826 547.62 306.933 546.909 306.933 546.909 M260.032 394.124L255.551 380.973L254.543 353.314V338.352L249.594 328.465L247.305 327.196L250.513 340.706L250.239 380.79L260.491 397.659L260.032 394.124Z M266.899 424.273L249.885 405.831L226.865 383.128L241.913 408.64L266.899 424.273Z M306.796 535.147H310.528H338.826L379.392 522.299L372.662 518.014L334.941 521.581L306.796 521.94 M548.193 260.148L524.19 247.827L523.207 244.188L551.151 257.578L548.193 260.148Z M530.703 224.509L517.92 217.056L508.965 197.377L500.728 183.955L511.117 173.254L519.177 188.328L523.207 200.21L527.777 211.917L530.703 224.509Z M591.419 318.083L602.703 310.629L603.243 295.204L602.824 292.427L591.064 284.447L589.267 283.793L573.743 291.837L573.332 308.682L585.511 318.083L586.164 309.033L590.701 308.914L591.419 318.083Z M614.019 313.375V286.721L589.976 272.318L564.853 289.099V313.375L588.566 328.728L614.019 313.375Z M228.904 241.77L253.261 208.9L276.909 257.02L254.099 243.071L240.841 254.179L228.904 242.361V241.77Z M285.775 334.274L284.881 311.396L283.269 307.493C283.269 307.493 281.302 305.546 278.255 304.836C275.209 304.126 263.925 301.995 263.393 301.293C262.861 300.591 251.754 293.903 251.754 293.903L240.647 284.798L245.129 303.95C245.129 303.95 249.07 311.93 254.978 314.947C260.886 317.963 273.339 326.653 273.339 326.653L285.783 334.282L285.775 334.274Z M307.159 294.965C307.159 294.965 286.557 260.387 280.649 247.795C274.741 235.202 267.036 224.741 263.272 213.218C259.508 201.694 257.719 193.004 258.081 190.522C258.444 188.041 253.785 193.18 253.785 193.18L247.16 180.763L243.042 169.056C243.042 169.056 248.232 153.806 251.279 149.553C254.326 145.3 255.043 144.055 255.043 144.055L263.28 162.856L270.986 182.718C270.986 182.718 274.387 186.971 273.855 193.355C273.323 199.739 271.348 201.87 271.348 201.87L278.868 211.797L289.435 225.986L292.482 229.529L301.614 233.192L305.192 236.974L307.159 237.325 M307.207 352.189L293.771 326.653C293.771 326.653 291.982 313.175 291.982 309.097C291.982 305.02 295.56 298.101 295.56 298.101L287.855 288.525L275.136 278.063L259.734 272.389L247.192 267.777L241.816 269.548L239.85 269.373L240.744 264.76L254.535 251.458L266.891 259.613L278.892 266.708L281.399 267.242L285.88 276.467L292.868 287.288L303.612 305.02L307.191 308.746 M254.696 280.633C254.696 280.633 257.38 286.929 261.95 289.586C266.52 292.244 274.58 295.883 278.787 296.505C282.995 297.127 283.801 297.127 283.801 297.127C283.801 297.127 286.396 297.127 281.471 292.69C276.547 288.254 271.977 286.043 267.141 283.649C262.305 281.255 256.211 279.835 256.211 279.835H254.688V280.633H254.696Z M267.592 410.563L268.188 336.277C268.188 336.277 268.551 331.17 257.743 323.206C246.942 315.242 245.975 312.984 245.975 312.984L233.974 289.211L226.293 272.094L225.454 267.697L229.654 272.693L226.534 254.267L222.811 241.666L221.013 248.322L214.412 256.645L216.451 293.369L232.894 309.441L260.507 335.918L261.95 337.817L262.434 400.572L267.592 410.555V410.563Z M307.175 467.596C307.175 467.596 302.879 458.371 299.655 450.335C296.431 442.299 291.176 427.52 287.476 417.115C283.776 406.709 280.673 398.912 280.069 394.651C279.464 390.39 278.876 384.955 278.997 382.234C279.118 379.513 282.1 373.719 282.1 373.719L287.952 368.987L288.79 359.882L290.345 350.657L299.058 358.813L306.465 366.849L307.183 366.968 M279.682 508.773L297.059 503.45L298.317 480.396L273.242 456.28V448.125L238.318 417.801C238.318 417.801 238.495 429.859 239.575 437.128C240.655 444.398 242.259 449.896 243.339 455.395C244.419 460.893 256.058 480.396 256.058 480.396L266.27 494.936L279.706 508.765L279.682 508.773Z M168.212 361.997L175.732 353.482L189.346 343.667C189.346 343.667 206.659 371.565 206.9 371.924C207.142 372.283 215.734 387.054 218.724 392.377C221.715 397.699 222.19 397.811 224.576 403.014C226.962 408.217 229.589 413.651 230.782 415.311C231.975 416.971 233.289 416.372 231.5 418.974C229.71 421.575 224.697 425.829 223.98 426.068C223.262 426.308 220.514 427.72 220.514 427.72C220.514 427.72 213.59 412.71 211.317 408.807C209.044 404.905 207.134 401.123 204.99 397.58C202.846 394.036 198.188 386.352 194.722 382.92C191.256 379.489 183.736 373.935 181.35 372.044C178.964 370.152 175.257 366.841 172.275 364.71C169.292 362.579 168.212 361.989 168.212 361.989V361.997Z M116.894 406.948L114.919 401.976C114.919 401.976 138.398 396.119 142.162 395.233C145.926 394.348 159.725 390.972 166.181 389.911C172.637 388.849 185.001 385.833 186.976 385.649C188.951 385.466 192.529 391.858 195.399 396.295C198.268 400.732 205.796 411.377 206.151 412.446C206.505 413.516 203.821 420.785 202.927 422.74C202.032 424.696 190.023 425.047 190.023 425.047L183.929 427.712L183.212 443.329L184.647 479.359L186.259 483.971L207.948 501.184V510.233C207.948 510.233 206.876 510.584 205.079 510.233C203.281 509.882 193.247 502.245 193.247 502.245L181.237 492.127C181.237 492.127 179.98 491.592 175.498 475.975C171.017 460.358 168.446 429.835 168.446 429.835V422.732C168.446 422.732 158.113 415.989 155.776 413.148C153.438 410.308 146.096 403.564 146.096 403.564L143.766 402.679L134.626 404.45C134.626 404.45 129.79 405.871 127.638 406.046L116.886 406.932L116.894 406.948Z
"
                  fill="#0C2853"
                  stroke="white"
                  strokeWidth="3"
                  strokeDasharray="1000" // Ajuste conforme necessário
                  initial={{ strokeDashoffset: 1000 }} // Inicialmente, o caminho não é visível
                  animate={{ strokeDashoffset: 0 }} // Animação para revelar o caminho
                  transition={{ duration: 6, ease: "easeInOut" }} // Configurações da transição
                />
              </motion.svg>
              <span className="text-[52px] bg-gradient-to-t from-primary to-white bg-clip-text text-transparent font-norse">
                Valhalla Dev
              </span>
            </a>
            {/* <div className="flex flex-col items-center">
              <h4 className="mb-4 text-3xl font-semibold">
                Nos siga nas redes sociais
              </h4>
              <div className="flex">
                <div className="bg-gradient-to-t ring-1 ring-primary from-primary to-blue-900 ring-inset hover:ring-re text-white duration-300 ease-in-out h-full p-4 rounded-md  hover:-translate-y-1.5 hover:from-primary hover:to-blue-950 hover:drop-shadow-lg">
                  <Link href="/">
                    <FaWhatsapp size={40} />
                  </Link>
                </div>
                <div className="mr-3 flex items-center justify-center rounded-full  text-dark hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4">
                  <Link href="/">
                    <FaInstagram size={40} className="hover:text-pink-800" />
                  </Link>
                </div>
                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4">
                  <Link href="/">
                    <FaGithub />
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
          <Separator />
          <div className="flex flex-wrap pt-10">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full">
                <p className="mb-7 text-base text-body-color dark:text-dark-6">
                  Forjando códigos épicos para você.
                </p>
              </div>
            </div>

            <LinkGroup header="Resources">
              <NavLink link="/#" label="SaaS Development" />
              <NavLink link="/#" label="Our Products" />
              <NavLink link="/#" label="User Flow" />
              <NavLink link="/#" label="User Strategy" />
            </LinkGroup>
            <LinkGroup header="Company">
              <NavLink link="/#" label="About TailGrids" />
              <NavLink link="/#" label="Contact & Support" />
              <NavLink link="/#" label="Success History" />
              <NavLink link="/#" label="Setting & Privacy" />
            </LinkGroup>
            <LinkGroup header="Contato">
              <NavLink link="/#" label="Premium Support" />
              <NavLink link="/#" label="Our Services" />
              <NavLink link="/#" label="Know Our Team" />
              <NavLink link="/#" label="Download App" />
            </LinkGroup>
          </div>
        </div>
        <Separator />
        <div className="pt-4">
          <div className="text-center">
            <p>&copy; {currentYear} - Valhalla Dev</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
