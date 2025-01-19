import React from "react";
import bannerStyles from "./Banner.styles";
import Marquee from "react-fast-marquee";
import { ReactComponent as BackgroundImage } from "../../assets/images/banner-bg.svg";
import { renderToStaticMarkup } from "react-dom/server";
import Colors from "../../utils/colorConstants";
require("@lottiefiles/lottie-player");

const BG = encodeURIComponent(renderToStaticMarkup(<BackgroundImage />));

const Banner = () => {
  const classes = bannerStyles();

  return (
    <div
      className={classes.banner}
      style={{
        backgroundImage: `url("data:image/svg+xml,${BG}")`,
      }}
    >
      <div className={`${classes.bannerContent} container`}>
        <div className={classes.bannerContentLeft}>
          <div className={classes.bannerTitle}>{`Hi there, my name is`}</div>

          <svg
            viewBox="0 0 824 117"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke={Colors.oxfordBlue}
              strokeWidth="3"
              d="M6.72 93V25.8H38.496C45.92 25.8 52.448 27.176 58.08 29.928C63.712 32.68 68.096 36.552 71.232 41.544C74.432 46.536 76.032 52.488 76.032 59.4C76.032 66.248 74.432 72.2 71.232 77.256C68.096 82.248 63.712 86.12 58.08 88.872C52.448 91.624 45.92 93 38.496 93H6.72ZM25.728 77.832H37.728C41.568 77.832 44.896 77.128 47.712 75.72C50.592 74.248 52.832 72.136 54.432 69.384C56.032 66.568 56.832 63.24 56.832 59.4C56.832 55.496 56.032 52.168 54.432 49.416C52.832 46.664 50.592 44.584 47.712 43.176C44.896 41.704 41.568 40.968 37.728 40.968H25.728V77.832Z"
              fill="black"
            />
            <path
              stroke={Colors.oxfordBlue}
              strokeWidth="3"
              d="M85.856 93V40.968H104.096V93H85.856ZM94.976 35.208C91.648 35.208 88.96 34.28 86.912 32.424C84.864 30.568 83.84 28.264 83.84 25.512C83.84 22.76 84.864 20.456 86.912 18.6C88.96 16.744 91.648 15.816 94.976 15.816C98.304 15.816 100.992 16.712 103.04 18.504C105.088 20.232 106.112 22.472 106.112 25.224C106.112 28.104 105.088 30.504 103.04 32.424C101.056 34.28 98.368 35.208 94.976 35.208Z"
              fill="black"
            />
            <path
              stroke={Colors.oxfordBlue}
              strokeWidth="3"
              d="M150.744 40.104C154.776 40.104 158.424 40.936 161.688 42.6C164.952 44.2 167.512 46.696 169.368 50.088C171.288 53.48 172.248 57.864 172.248 63.24V93H154.008V66.216C154.008 62.504 153.24 59.816 151.704 58.152C150.232 56.424 148.152 55.56 145.464 55.56C143.544 55.56 141.784 56.008 140.184 56.904C138.584 57.736 137.336 59.048 136.44 60.84C135.544 62.632 135.096 64.968 135.096 67.848V93H116.856V40.968H134.232V55.752L130.872 51.432C132.856 47.656 135.576 44.84 139.032 42.984C142.488 41.064 146.392 40.104 150.744 40.104Z"
              fill="black"
            />
            <path
              stroke={Colors.oxfordBlue}
              strokeWidth="3"
              d="M211.12 93.864C204.976 93.864 199.6 92.712 194.992 90.408C190.448 88.04 186.896 84.84 184.336 80.808C181.84 76.712 180.592 72.072 180.592 66.888C180.592 61.704 181.808 57.096 184.24 53.064C186.736 48.968 190.16 45.8 194.512 43.56C198.864 41.256 203.76 40.104 209.2 40.104C214.32 40.104 218.992 41.16 223.216 43.272C227.44 45.32 230.8 48.36 233.296 52.392C235.792 56.424 237.04 61.32 237.04 67.08C237.04 67.72 237.008 68.456 236.944 69.288C236.88 70.12 236.816 70.888 236.752 71.592H195.568V61.992H227.056L220.144 64.68C220.208 62.312 219.76 60.264 218.8 58.536C217.904 56.808 216.624 55.464 214.96 54.504C213.36 53.544 211.472 53.064 209.296 53.064C207.12 53.064 205.2 53.544 203.536 54.504C201.936 55.464 200.688 56.84 199.792 58.632C198.896 60.36 198.448 62.408 198.448 64.776V67.56C198.448 70.12 198.96 72.328 199.984 74.184C201.072 76.04 202.608 77.48 204.592 78.504C206.576 79.464 208.944 79.944 211.696 79.944C214.256 79.944 216.432 79.592 218.224 78.888C220.08 78.12 221.904 76.968 223.696 75.432L233.296 85.416C230.8 88.168 227.728 90.28 224.08 91.752C220.432 93.16 216.112 93.864 211.12 93.864Z"
              fill="black"
            />
            <path
              stroke={Colors.oxfordBlue}
              strokeWidth="3"
              d="M264.768 93.864C260.352 93.864 256.032 93.352 251.808 92.328C247.648 91.304 244.288 90.024 241.728 88.488L247.2 76.008C249.632 77.48 252.48 78.664 255.744 79.56C259.008 80.392 262.208 80.808 265.344 80.808C268.416 80.808 270.528 80.488 271.68 79.848C272.896 79.208 273.504 78.344 273.504 77.256C273.504 76.232 272.928 75.496 271.776 75.048C270.688 74.536 269.216 74.152 267.36 73.896C265.568 73.64 263.584 73.352 261.408 73.032C259.232 72.712 257.024 72.296 254.784 71.784C252.608 71.208 250.592 70.376 248.736 69.288C246.944 68.136 245.504 66.6 244.416 64.68C243.328 62.76 242.784 60.328 242.784 57.384C242.784 54.056 243.744 51.112 245.664 48.552C247.648 45.928 250.528 43.88 254.304 42.408C258.08 40.872 262.688 40.104 268.128 40.104C271.776 40.104 275.456 40.488 279.168 41.256C282.944 41.96 286.112 43.048 288.672 44.52L283.2 56.904C280.64 55.432 278.08 54.44 275.52 53.928C272.96 53.352 270.528 53.064 268.224 53.064C265.152 53.064 262.976 53.416 261.696 54.12C260.48 54.824 259.872 55.688 259.872 56.712C259.872 57.736 260.416 58.536 261.504 59.112C262.592 59.624 264.032 60.04 265.824 60.36C267.68 60.616 269.696 60.904 271.872 61.224C274.048 61.48 276.224 61.896 278.4 62.472C280.64 63.048 282.656 63.912 284.448 65.064C286.304 66.152 287.776 67.656 288.864 69.576C289.952 71.432 290.496 73.832 290.496 76.776C290.496 79.976 289.504 82.856 287.52 85.416C285.6 87.976 282.72 90.024 278.88 91.56C275.104 93.096 270.4 93.864 264.768 93.864Z"
              fill="black"
            />
            <path
              stroke={Colors.oxfordBlue}
              strokeWidth="3"
              d="M332.744 40.104C336.776 40.104 340.424 40.936 343.688 42.6C346.952 44.2 349.512 46.696 351.368 50.088C353.288 53.48 354.248 57.864 354.248 63.24V93H336.008V66.216C336.008 62.504 335.24 59.816 333.704 58.152C332.232 56.424 330.152 55.56 327.464 55.56C325.544 55.56 323.784 56.008 322.184 56.904C320.584 57.736 319.336 59.048 318.44 60.84C317.544 62.632 317.096 64.968 317.096 67.848V93H298.856V21.768H317.096V55.752L312.872 51.432C314.856 47.656 317.576 44.84 321.032 42.984C324.488 41.064 328.392 40.104 332.744 40.104Z"
              fill="black"
            />
            <path
              stroke={Colors.oxfordBlue}
              strokeWidth="3"
              d="M394.72 93V25.8H426.496C433.92 25.8 440.448 27.176 446.08 29.928C451.712 32.68 456.096 36.552 459.232 41.544C462.432 46.536 464.032 52.488 464.032 59.4C464.032 66.248 462.432 72.2 459.232 77.256C456.096 82.248 451.712 86.12 446.08 88.872C440.448 91.624 433.92 93 426.496 93H394.72ZM413.728 77.832H425.728C429.568 77.832 432.896 77.128 435.712 75.72C438.592 74.248 440.832 72.136 442.432 69.384C444.032 66.568 444.832 63.24 444.832 59.4C444.832 55.496 444.032 52.168 442.432 49.416C440.832 46.664 438.592 44.584 435.712 43.176C432.896 41.704 429.568 40.968 425.728 40.968H413.728V77.832Z"
              fill="black"
            />
            <path
              stroke={Colors.oxfordBlue}
              strokeWidth="3"
              d="M507.744 40.104C511.776 40.104 515.424 40.936 518.688 42.6C521.952 44.2 524.512 46.696 526.368 50.088C528.288 53.48 529.248 57.864 529.248 63.24V93H511.008V66.216C511.008 62.504 510.24 59.816 508.704 58.152C507.232 56.424 505.152 55.56 502.464 55.56C500.544 55.56 498.784 56.008 497.184 56.904C495.584 57.736 494.336 59.048 493.44 60.84C492.544 62.632 492.096 64.968 492.096 67.848V93H473.856V21.768H492.096V55.752L487.872 51.432C489.856 47.656 492.576 44.84 496.032 42.984C499.488 41.064 503.392 40.104 507.744 40.104Z"
              fill="black"
            />
            <path
              stroke={Colors.oxfordBlue}
              strokeWidth="3"
              d="M572.632 93V83.304L571.384 80.904V63.048C571.384 60.168 570.488 57.96 568.696 56.424C566.968 54.824 564.184 54.024 560.344 54.024C557.848 54.024 555.32 54.44 552.76 55.272C550.2 56.04 548.024 57.128 546.232 58.536L540.088 46.152C543.032 44.232 546.552 42.76 550.648 41.736C554.808 40.648 558.936 40.104 563.032 40.104C571.48 40.104 578.008 42.056 582.616 45.96C587.288 49.8 589.624 55.848 589.624 64.104V93H572.632ZM557.272 93.864C553.112 93.864 549.592 93.16 546.712 91.752C543.832 90.344 541.624 88.424 540.088 85.992C538.616 83.56 537.88 80.84 537.88 77.832C537.88 74.632 538.68 71.88 540.28 69.576C541.944 67.208 544.472 65.416 547.864 64.2C551.256 62.92 555.64 62.28 561.016 62.28H573.304V71.784H563.512C560.568 71.784 558.488 72.264 557.272 73.224C556.12 74.184 555.544 75.464 555.544 77.064C555.544 78.664 556.152 79.944 557.368 80.904C558.584 81.864 560.248 82.344 562.36 82.344C564.344 82.344 566.136 81.864 567.736 80.904C569.4 79.88 570.616 78.344 571.384 76.296L573.88 83.016C572.92 86.6 571.032 89.32 568.216 91.176C565.464 92.968 561.816 93.864 557.272 93.864Z"
              fill="black"
            />
            <path
              stroke={Colors.oxfordBlue}
              strokeWidth="3"
              d="M635.744 40.104C639.776 40.104 643.424 40.936 646.688 42.6C649.952 44.2 652.512 46.696 654.368 50.088C656.288 53.48 657.248 57.864 657.248 63.24V93H639.008V66.216C639.008 62.504 638.24 59.816 636.704 58.152C635.232 56.424 633.152 55.56 630.464 55.56C628.544 55.56 626.784 56.008 625.184 56.904C623.584 57.736 622.336 59.048 621.44 60.84C620.544 62.632 620.096 64.968 620.096 67.848V93H601.856V40.968H619.232V55.752L615.872 51.432C617.856 47.656 620.576 44.84 624.032 42.984C627.488 41.064 631.392 40.104 635.744 40.104Z"
              fill="black"
            />
            <path
              stroke={Colors.oxfordBlue}
              strokeWidth="3"
              d="M694.968 93.864C689.272 93.864 684.216 92.712 679.8 90.408C675.384 88.104 671.896 84.936 669.336 80.904C666.84 76.808 665.592 72.136 665.592 66.888C665.592 61.64 666.84 57 669.336 52.968C671.896 48.936 675.384 45.8 679.8 43.56C684.216 41.256 689.272 40.104 694.968 40.104C700.664 40.104 705.72 41.256 710.136 43.56C714.616 45.8 718.104 48.936 720.6 52.968C723.096 57 724.344 61.64 724.344 66.888C724.344 72.136 723.096 76.808 720.6 80.904C718.104 84.936 714.616 88.104 710.136 90.408C705.72 92.712 700.664 93.864 694.968 93.864ZM694.968 79.368C697.08 79.368 698.936 78.888 700.536 77.928C702.2 76.968 703.512 75.56 704.472 73.704C705.432 71.784 705.912 69.512 705.912 66.888C705.912 64.264 705.432 62.056 704.472 60.264C703.512 58.408 702.2 57 700.536 56.04C698.936 55.08 697.08 54.6 694.968 54.6C692.92 54.6 691.064 55.08 689.4 56.04C687.8 57 686.488 58.408 685.464 60.264C684.504 62.056 684.024 64.264 684.024 66.888C684.024 69.512 684.504 71.784 685.464 73.704C686.488 75.56 687.8 76.968 689.4 77.928C691.064 78.888 692.92 79.368 694.968 79.368Z"
              fill="black"
            />
            <path
              stroke={Colors.oxfordBlue}
              strokeWidth="3"
              d="M748.024 83.4L748.504 61.608L769.72 40.968H791.32L767.8 65.256L758.488 72.744L748.024 83.4ZM732.856 93V21.768H751.096V93H732.856ZM771.064 93L755.128 73.032L766.456 59.016L793.144 93H771.064Z"
              fill="black"
            />
            <path
              stroke={Colors.oxfordBlue}
              strokeWidth="3"
              d="M798.856 93V40.968H817.096V93H798.856ZM807.976 35.208C804.648 35.208 801.96 34.28 799.912 32.424C797.864 30.568 796.84 28.264 796.84 25.512C796.84 22.76 797.864 20.456 799.912 18.6C801.96 16.744 804.648 15.816 807.976 15.816C811.304 15.816 813.992 16.712 816.04 18.504C818.088 20.232 819.112 22.472 819.112 25.224C819.112 28.104 818.088 30.504 816.04 32.424C814.056 34.28 811.368 35.208 807.976 35.208Z"
              fill="black"
            />
            i
          </svg>

          <div className={classes.bannerTitle}>{`& I'm a`}</div>
          <div className={classes.titleSvg}>
            <svg
              viewBox="0 0 1021 117"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke={Colors.oxfordBlue}
                strokeWidth="3"
                d="M506.968 93V25.8H537.496C544.792 25.8 551.224 27.208 556.792 30.024C562.36 32.776 566.712 36.648 569.848 41.64C572.984 46.632 574.552 52.552 574.552 59.4C574.552 66.184 572.984 72.104 569.848 77.16C566.712 82.152 562.36 86.056 556.792 88.872C551.224 91.624 544.792 93 537.496 93H506.968ZM522.52 80.232H536.728C541.208 80.232 545.08 79.4 548.344 77.736C551.672 76.008 554.232 73.576 556.024 70.44C557.88 67.304 558.808 63.624 558.808 59.4C558.808 55.112 557.88 51.432 556.024 48.36C554.232 45.224 551.672 42.824 548.344 41.16C545.08 39.432 541.208 38.568 536.728 38.568H522.52V80.232Z"
                fill="black"
              />

              <path
                stroke={Colors.oxfordBlue}
                strokeWidth="3"
                d="M985.912 93V41.352H1000.22V55.944L998.2 51.72C999.736 48.072 1002.2 45.32 1005.59 43.464C1008.98 41.544 1013.11 40.584 1017.98 40.584V54.408C1017.34 54.344 1016.76 54.312 1016.25 54.312C1015.74 54.248 1015.19 54.216 1014.62 54.216C1010.52 54.216 1007.19 55.4 1004.63 57.768C1002.14 60.072 1000.89 63.688 1000.89 68.616V93H985.912Z"
                fill="black"
              />

              <path
                stroke={Colors.oxfordBlue}
                strokeWidth="3"
                d="M888.44 93.768C884.088 93.768 880.28 92.808 877.016 90.888C873.752 88.968 871.192 86.056 869.336 82.152C867.544 78.184 866.648 73.192 866.648 67.176C866.648 61.096 867.512 56.104 869.24 52.2C870.968 48.296 873.464 45.384 876.728 43.464C879.992 41.544 883.896 40.584 888.44 40.584C893.304 40.584 897.656 41.704 901.496 43.944C905.4 46.12 908.472 49.192 910.712 53.16C913.016 57.128 914.168 61.8 914.168 67.176C914.168 72.616 913.016 77.32 910.712 81.288C908.472 85.256 905.4 88.328 901.496 90.504C897.656 92.68 893.304 93.768 888.44 93.768ZM857.912 111.624V41.352H872.216V51.912L871.928 67.272L872.888 82.536V111.624H857.912ZM885.848 81.48C888.344 81.48 890.552 80.904 892.472 79.752C894.456 78.6 896.024 76.968 897.176 74.856C898.392 72.68 899 70.12 899 67.176C899 64.168 898.392 61.608 897.176 59.496C896.024 57.384 894.456 55.752 892.472 54.6C890.552 53.448 888.344 52.872 885.848 52.872C883.352 52.872 881.112 53.448 879.128 54.6C877.144 55.752 875.576 57.384 874.424 59.496C873.272 61.608 872.696 64.168 872.696 67.176C872.696 70.12 873.272 72.68 874.424 74.856C875.576 76.968 877.144 78.6 879.128 79.752C881.112 80.904 883.352 81.48 885.848 81.48Z"
                fill="black"
              />

              <path
                stroke={Colors.oxfordBlue}
                strokeWidth="3"
                d="M819.488 93.768C813.984 93.768 809.088 92.616 804.8 90.312C800.576 88.008 797.216 84.872 794.72 80.904C792.288 76.872 791.072 72.296 791.072 67.176C791.072 61.992 792.288 57.416 794.72 53.448C797.216 49.416 800.576 46.28 804.8 44.04C809.088 41.736 813.984 40.584 819.488 40.584C824.928 40.584 829.792 41.736 834.08 44.04C838.368 46.28 841.728 49.384 844.16 53.352C846.592 57.32 847.808 61.928 847.808 67.176C847.808 72.296 846.592 76.872 844.16 80.904C841.728 84.872 838.368 88.008 834.08 90.312C829.792 92.616 824.928 93.768 819.488 93.768ZM819.488 81.48C821.984 81.48 824.224 80.904 826.208 79.752C828.192 78.6 829.76 76.968 830.912 74.856C832.064 72.68 832.64 70.12 832.64 67.176C832.64 64.168 832.064 61.608 830.912 59.496C829.76 57.384 828.192 55.752 826.208 54.6C824.224 53.448 821.984 52.872 819.488 52.872C816.992 52.872 814.752 53.448 812.768 54.6C810.784 55.752 809.184 57.384 807.968 59.496C806.816 61.608 806.24 64.168 806.24 67.176C806.24 70.12 806.816 72.68 807.968 74.856C809.184 76.968 810.784 78.6 812.768 79.752C814.752 80.904 816.992 81.48 819.488 81.48Z"
                fill="black"
              />

              <path
                stroke={Colors.oxfordBlue}
                strokeWidth="3"
                d="M765.912 93V21.768H780.888V93H765.912Z"
                fill="black"
              />

              <path
                stroke={Colors.oxfordBlue}
                strokeWidth="3"
                d="M660.928 93L639.232 41.352H654.688L672.736 85.8H665.056L683.776 41.352H698.176L676.384 93H660.928Z"
                fill="black"
              />

              <path
                stroke={Colors.oxfordBlue}
                strokeWidth="3"
                d="M611.544 93.768C605.656 93.768 600.472 92.616 595.992 90.312C591.576 88.008 588.152 84.872 585.72 80.904C583.288 76.872 582.072 72.296 582.072 67.176C582.072 61.992 583.256 57.416 585.624 53.448C588.056 49.416 591.352 46.28 595.512 44.04C599.672 41.736 604.376 40.584 609.624 40.584C614.68 40.584 619.224 41.672 623.256 43.848C627.352 45.96 630.584 49.032 632.952 53.064C635.32 57.032 636.504 61.8 636.504 67.368C636.504 67.944 636.472 68.616 636.408 69.384C636.344 70.088 636.28 70.76 636.216 71.4H594.264V62.664H628.344L622.584 65.256C622.584 62.568 622.04 60.232 620.952 58.248C619.864 56.264 618.36 54.728 616.44 53.64C614.52 52.488 612.28 51.912 609.72 51.912C607.16 51.912 604.888 52.488 602.904 53.64C600.984 54.728 599.48 56.296 598.392 58.344C597.304 60.328 596.76 62.696 596.76 65.448V67.752C596.76 70.568 597.368 73.064 598.584 75.24C599.864 77.352 601.624 78.984 603.864 80.136C606.168 81.224 608.856 81.768 611.928 81.768C614.68 81.768 617.08 81.352 619.128 80.52C621.24 79.688 623.16 78.44 624.888 76.776L632.856 85.416C630.488 88.104 627.512 90.184 623.928 91.656C620.344 93.064 616.216 93.768 611.544 93.768Z"
                fill="black"
              />

              <path
                stroke={Colors.oxfordBlue}
                strokeWidth="3"
                d="M730.544 93.768C724.656 93.768 719.472 92.616 714.992 90.312C710.576 88.008 707.152 84.872 704.72 80.904C702.288 76.872 701.072 72.296 701.072 67.176C701.072 61.992 702.256 57.416 704.624 53.448C707.056 49.416 710.352 46.28 714.512 44.04C718.672 41.736 723.376 40.584 728.624 40.584C733.68 40.584 738.224 41.672 742.256 43.848C746.352 45.96 749.584 49.032 751.952 53.064C754.32 57.032 755.504 61.8 755.504 67.368C755.504 67.944 755.472 68.616 755.408 69.384C755.344 70.088 755.28 70.76 755.216 71.4H713.264V62.664H747.344L741.584 65.256C741.584 62.568 741.04 60.232 739.952 58.248C738.864 56.264 737.36 54.728 735.44 53.64C733.52 52.488 731.28 51.912 728.72 51.912C726.16 51.912 723.888 52.488 721.904 53.64C719.984 54.728 718.48 56.296 717.392 58.344C716.304 60.328 715.76 62.696 715.76 65.448V67.752C715.76 70.568 716.368 73.064 717.584 75.24C718.864 77.352 720.624 78.984 722.864 80.136C725.168 81.224 727.856 81.768 730.928 81.768C733.68 81.768 736.08 81.352 738.128 80.52C740.24 79.688 742.16 78.44 743.888 76.776L751.856 85.416C749.488 88.104 746.512 90.184 742.928 91.656C739.344 93.064 735.216 93.768 730.544 93.768Z"
                fill="black"
              />

              <path
                stroke={Colors.oxfordBlue}
                strokeWidth="3"
                d="M950.544 93.768C944.656 93.768 939.472 92.616 934.992 90.312C930.576 88.008 927.152 84.872 924.72 80.904C922.288 76.872 921.072 72.296 921.072 67.176C921.072 61.992 922.256 57.416 924.624 53.448C927.056 49.416 930.352 46.28 934.512 44.04C938.672 41.736 943.376 40.584 948.624 40.584C953.68 40.584 958.224 41.672 962.256 43.848C966.352 45.96 969.584 49.032 971.952 53.064C974.32 57.032 975.504 61.8 975.504 67.368C975.504 67.944 975.472 68.616 975.408 69.384C975.344 70.088 975.28 70.76 975.216 71.4H933.264V62.664H967.344L961.584 65.256C961.584 62.568 961.04 60.232 959.952 58.248C958.864 56.264 957.36 54.728 955.44 53.64C953.52 52.488 951.28 51.912 948.72 51.912C946.16 51.912 943.888 52.488 941.904 53.64C939.984 54.728 938.48 56.296 937.392 58.344C936.304 60.328 935.76 62.696 935.76 65.448V67.752C935.76 70.568 936.368 73.064 937.584 75.24C938.864 77.352 940.624 78.984 942.864 80.136C945.168 81.224 947.856 81.768 950.928 81.768C953.68 81.768 956.08 81.352 958.128 80.52C960.24 79.688 962.16 78.44 963.888 76.776L971.856 85.416C969.488 88.104 966.512 90.184 962.928 91.656C959.344 93.064 955.216 93.768 950.544 93.768Z"
                fill="black"
              />

              <path
                stroke={Colors.oxfordBlue}
                strokeWidth="3"
                d="M22.368 56.04H54.624V68.52H22.368V56.04ZM23.52 93H7.968V25.8H58.752V38.28H23.52V93Z"
                fill="black"
              />

              <path
                stroke={Colors.oxfordBlue}
                strokeWidth="3"
                d="M68.912 93V41.352H83.216V55.944L81.2 51.72C82.736 48.072 85.2 45.32 88.592 43.464C91.984 41.544 96.112 40.584 100.976 40.584V54.408C100.336 54.344 99.76 54.312 99.248 54.312C98.736 54.248 98.192 54.216 97.616 54.216C93.52 54.216 90.192 55.4 87.632 57.768C85.136 60.072 83.888 63.688 83.888 68.616V93H68.912Z"
                fill="black"
              />

              <path
                stroke={Colors.oxfordBlue}
                strokeWidth="3"
                d="M135.488 93.768C129.984 93.768 125.088 92.616 120.8 90.312C116.576 88.008 113.216 84.872 110.72 80.904C108.288 76.872 107.072 72.296 107.072 67.176C107.072 61.992 108.288 57.416 110.72 53.448C113.216 49.416 116.576 46.28 120.8 44.04C125.088 41.736 129.984 40.584 135.488 40.584C140.928 40.584 145.792 41.736 150.08 44.04C154.368 46.28 157.728 49.384 160.16 53.352C162.592 57.32 163.808 61.928 163.808 67.176C163.808 72.296 162.592 76.872 160.16 80.904C157.728 84.872 154.368 88.008 150.08 90.312C145.792 92.616 140.928 93.768 135.488 93.768ZM135.488 81.48C137.984 81.48 140.224 80.904 142.208 79.752C144.192 78.6 145.76 76.968 146.912 74.856C148.064 72.68 148.64 70.12 148.64 67.176C148.64 64.168 148.064 61.608 146.912 59.496C145.76 57.384 144.192 55.752 142.208 54.6C140.224 53.448 137.984 52.872 135.488 52.872C132.992 52.872 130.752 53.448 128.768 54.6C126.784 55.752 125.184 57.384 123.968 59.496C122.816 61.608 122.24 64.168 122.24 67.176C122.24 70.12 122.816 72.68 123.968 74.856C125.184 76.968 126.784 78.6 128.768 79.752C130.752 80.904 132.992 81.48 135.488 81.48Z"
                fill="black"
              />

              <path
                stroke={Colors.oxfordBlue}
                strokeWidth="3"
                d="M308.544 93.768C302.656 93.768 297.472 92.616 292.992 90.312C288.576 88.008 285.152 84.872 282.72 80.904C280.288 76.872 279.072 72.296 279.072 67.176C279.072 61.992 280.256 57.416 282.624 53.448C285.056 49.416 288.352 46.28 292.512 44.04C296.672 41.736 301.376 40.584 306.624 40.584C311.68 40.584 316.224 41.672 320.256 43.848C324.352 45.96 327.584 49.032 329.952 53.064C332.32 57.032 333.504 61.8 333.504 67.368C333.504 67.944 333.472 68.616 333.408 69.384C333.344 70.088 333.28 70.76 333.216 71.4H291.264V62.664H325.344L319.584 65.256C319.584 62.568 319.04 60.232 317.952 58.248C316.864 56.264 315.36 54.728 313.44 53.64C311.52 52.488 309.28 51.912 306.72 51.912C304.16 51.912 301.888 52.488 299.904 53.64C297.984 54.728 296.48 56.296 295.392 58.344C294.304 60.328 293.76 62.696 293.76 65.448V67.752C293.76 70.568 294.368 73.064 295.584 75.24C296.864 77.352 298.624 78.984 300.864 80.136C303.168 81.224 305.856 81.768 308.928 81.768C311.68 81.768 314.08 81.352 316.128 80.52C318.24 79.688 320.16 78.44 321.888 76.776L329.856 85.416C327.488 88.104 324.512 90.184 320.928 91.656C317.344 93.064 313.216 93.768 308.544 93.768Z"
                fill="black"
              />

              <path
                stroke={Colors.oxfordBlue}
                strokeWidth="3"
                d="M205.304 40.584C209.4 40.584 213.048 41.416 216.248 43.08C219.512 44.68 222.072 47.176 223.928 50.568C225.784 53.896 226.712 58.184 226.712 63.432V93H211.736V65.736C211.736 61.576 210.808 58.504 208.952 56.52C207.16 54.536 204.6 53.544 201.272 53.544C198.904 53.544 196.76 54.056 194.84 55.08C192.984 56.04 191.512 57.544 190.424 59.592C189.4 61.64 188.888 64.264 188.888 67.464V93H173.912V41.352H188.216V55.656L185.528 51.336C187.384 47.88 190.04 45.224 193.496 43.368C196.952 41.512 200.888 40.584 205.304 40.584Z"
                fill="black"
              />

              <path
                stroke={Colors.oxfordBlue}
                strokeWidth="3"
                d="M375.304 40.584C379.4 40.584 383.048 41.416 386.248 43.08C389.512 44.68 392.072 47.176 393.928 50.568C395.784 53.896 396.712 58.184 396.712 63.432V93H381.736V65.736C381.736 61.576 380.808 58.504 378.952 56.52C377.16 54.536 374.6 53.544 371.272 53.544C368.904 53.544 366.76 54.056 364.84 55.08C362.984 56.04 361.512 57.544 360.424 59.592C359.4 61.64 358.888 64.264 358.888 67.464V93H343.912V41.352H358.216V55.656L355.528 51.336C357.384 47.88 360.04 45.224 363.496 43.368C366.952 41.512 370.888 40.584 375.304 40.584Z"
                fill="black"
              />

              <path
                stroke={Colors.oxfordBlue}
                strokeWidth="3"
                d="M262.032 93.768C255.952 93.768 251.216 92.232 247.824 89.16C244.432 86.024 242.736 81.384 242.736 75.24V29.928H257.712V75.048C257.712 77.224 258.288 78.92 259.44 80.136C260.592 81.288 262.16 81.864 264.144 81.864C266.512 81.864 268.528 81.224 270.192 79.944L274.224 90.504C272.688 91.592 270.832 92.424 268.656 93C266.544 93.512 264.336 93.768 262.032 93.768ZM234.768 54.024V42.504H270.576V54.024H234.768Z"
                fill="black"
              />

              <path
                stroke={Colors.oxfordBlue}
                strokeWidth="3"
                d="M433.088 93.768C428.224 93.768 423.84 92.68 419.936 90.504C416.032 88.264 412.928 85.16 410.624 81.192C408.384 77.224 407.264 72.552 407.264 67.176C407.264 61.736 408.384 57.032 410.624 53.064C412.928 49.096 416.032 46.024 419.936 43.848C423.84 41.672 428.224 40.584 433.088 40.584C437.44 40.584 441.248 41.544 444.512 43.464C447.776 45.384 450.304 48.296 452.096 52.2C453.888 56.104 454.784 61.096 454.784 67.176C454.784 73.192 453.92 78.184 452.192 82.152C450.464 86.056 447.968 88.968 444.704 90.888C441.504 92.808 437.632 93.768 433.088 93.768ZM435.68 81.48C438.112 81.48 440.32 80.904 442.304 79.752C444.288 78.6 445.856 76.968 447.008 74.856C448.224 72.68 448.832 70.12 448.832 67.176C448.832 64.168 448.224 61.608 447.008 59.496C445.856 57.384 444.288 55.752 442.304 54.6C440.32 53.448 438.112 52.872 435.68 52.872C433.184 52.872 430.944 53.448 428.96 54.6C426.976 55.752 425.376 57.384 424.16 59.496C423.008 61.608 422.432 64.168 422.432 67.176C422.432 70.12 423.008 72.68 424.16 74.856C425.376 76.968 426.976 78.6 428.96 79.752C430.944 80.904 433.184 81.48 435.68 81.48ZM449.216 93V82.44L449.504 67.08L448.544 51.816V21.768H463.52V93H449.216Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div className={classes.bannerContentRight}>
          <dotlottie-player
            src="https://lottie.host/7d027487-ec9b-4ea8-9457-27b53a386dd2/UqfHaqhQjS.lottie"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
      <div className={classes.bannerMarqueue}>
        <Marquee gradientWidth={20} gradientColor={[15, 22, 48]} speed={50}>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Typescript</span>
          <span>ReactJs</span>
          {/* <span>Redux</span> //commented because I do not use this skills
          <span>NodeJs</span>
          <span>GraphQL</span> */}
          <span>Python</span>
          {/* <span>MongoDB</span> */}
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Typescript</span>
          <span>ReactJs</span>
          <span>Python</span>

          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Typescript</span>
          <span>ReactJs</span>
          {/* <span>Redux</span>
          <span>NodeJs</span>
          <span>GraphQL</span> */}
          <span>Python</span>
          {/* <span>MongoDB</span> */}

          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Typescript</span>
          <span>ReactJs</span>
          {/* <span>Redux</span>
          <span>NodeJs</span>
          <span>GraphQL</span> */}
          <span>Python</span>
          {/* <span>MongoDB</span> */}
        </Marquee>
      </div>
    </div>
  );
};

export default Banner;
