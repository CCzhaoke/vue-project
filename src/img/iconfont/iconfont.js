;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-i" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M75.776 904.192l0-584.704 83.968 0 0 584.704-83.968 0zM75.776 211.968l0-107.52 83.968 0 0 107.52-83.968 0z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-guanbi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512.3062 64.5263c-247.1844 0-447.5208 200.3569-447.5208 447.5402 0 247.1639 200.3374 447.5392 447.5208 447.5392 247.1823 0 447.5587-200.3763 447.5587-447.5392C959.8659 264.8842 759.4885 64.5263 512.3062 64.5263zM512.3062 918.9202c-224.3359 0-406.8342-182.5167-406.8342-406.8536 0-224.3359 182.4983-406.8526 406.8342-406.8526 224.3553 0 406.871 182.5167 406.871 406.8526C919.1772 736.4035 736.6615 918.9202 512.3062 918.9202z"  ></path>'+
      ''+
      '<path d="M648.3937 375.9585c-17.3629-17.6015-45.4953-17.6015-62.8992 0l-73.3204 74.3352-73.3358-74.3352c-17.3629-17.6015-45.4953-17.6015-62.8593 0-17.3629 17.623-17.3629 46.1312 0 63.7338l73.3297 74.3363-69.1569 70.1153c-0.2028 0.2048-0.3912 0.4188-0.5888 0.6277l-1.4766 1.4981 0.0604 0.0625c-15.319 17.7019-14.6575 44.6341 2.006 61.5649 16.6615 16.853 43.2712 17.5227 60.7365 2.0296l0.0543 0.0553 1.1581-1.1735c0.3174-0.3031 0.638-0.599 0.9482-0.9124l69.1497-70.1133 69.163 70.1133c17.364 17.5616 45.4554 17.5616 62.8593 0 17.323-17.6425 17.323-46.1701 0-63.7532l-69.1569-70.101 73.3286-74.3506C665.7577 422.0897 665.7577 393.5816 648.3937 375.9585z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-gengduo" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M121.7444 391.7568c-65.493 0-118.5894 53.0729-118.5894 118.5894 0 65.493 53.0964 118.5659 118.5894 118.5659s118.5894-53.0729 118.5894-118.5659C240.3338 444.8307 187.2374 391.7568 121.7444 391.7568zM499.9741 391.7568c-65.493 0-118.5894 53.0729-118.5894 118.5894 0 65.493 53.0964 118.5659 118.5894 118.5659s118.5894-53.0729 118.5894-118.5659C618.5636 444.8307 565.4671 391.7568 499.9741 391.7568zM901.845 391.7568c-65.493 0-118.5905 53.0729-118.5905 118.5894 0 65.493 53.0975 118.5659 118.5905 118.5659s118.5894-53.0729 118.5894-118.5659C1020.4334 444.8307 967.338 391.7568 901.845 391.7568z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-gerenzhongxin" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512.342016 34.019328c-148.642816 0-269.563904 120.922112-269.563904 269.564928 0 107.645952 63.568896 200.485888 155.005952 243.656704-169.043968 49.646592-292.929536 205.93152-292.929536 390.81984 0 11.77088 9.535488 21.29408 21.293056 21.29408 11.759616 0 21.295104-9.5232 21.295104-21.29408 0-201.21088 163.708928-364.908544 364.899328-364.908544 148.641792 0 269.568-120.925184 269.568-269.568C781.910016 154.94144 660.984832 34.019328 512.342016 34.019328zM512.342016 530.562048c-125.16352 0-226.975744-101.823488-226.975744-226.978816 0-125.15328 101.812224-226.975744 226.975744-226.975744 125.165568 0 226.97984 101.822464 226.97984 226.975744C739.32288 428.739584 637.508608 530.562048 512.342016 530.562048z"  ></path>'+
      ''+
      '<path d="M759.512064 614.052864c-9.358336-7.131136-22.709248-5.364736-29.840384 3.992576-7.15264 9.356288-5.364736 22.7072 3.991552 29.860864 91.24864 69.728256 143.56992 175.490048 143.56992 290.153472 0 11.77088 9.542656 21.29408 21.29408 21.29408 11.768832 0 21.293056-9.5232 21.293056-21.29408C919.821312 810.006528 861.3888 691.909632 759.512064 614.052864z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-fanhui" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M629.376 160 330.624 467.968 330.624 467.968 288 512 330.624 555.968 330.688 555.968 629.376 863.936 672 819.968 373.312 512 672 204.032Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-lianxiwomen" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M716.164425 604.582605c-47.167253 0-81.58718 40.793078-122.380258 40.793078S369.420189 465.629903 369.420189 421.011706c0-44.618197 40.793078-66.288752 40.793078-112.181989 0-33.144888-122.380258-234.562247-173.371606-234.562247-50.992371 0-173.372629 90.51041-173.372629 173.372629 0 242.211461 446.178899 703.68674 724.08328 703.68674 76.488045 0 173.372629-80.311117 173.372629-173.372629C960.924941 746.084363 762.056638 604.582605 716.164425 604.582605zM756.958526 910.532739c-200.680579-3.38612-652.696416-421.748487-652.696416-652.695393 0-79.007425 93.15975-146.162918 124.71135-142.776797 40.096207 4.303003 140.446729 151.959947 140.446729 183.570899 0 43.76169-50.992371 103.636359-20.396539 163.17436 19.440771 37.844933 185.423083 224.363977 224.362954 224.363977 38.941917 0 97.742115-40.793078 142.776797-40.793078 43.801599 0 203.967438 110.248963 203.967438 140.645251C920.131863 874.758977 829.960167 910.532739 756.958526 910.532739z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-gengduo1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M380.25956 843.249333 292.597011 760.919233 556.951795 512.598634 291.464211 263.176958 379.25979 180.747597 731.676212 511.63161 730.809471 512.464581 731.575928 513.232061 643.980917 595.727936 643.880633 595.627652Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-shuangyuanquan" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M510.691191 64.567551c-246.548232 0-447.125457 200.578248-447.125457 447.125457 0 246.543116 200.578248 447.125457 447.125457 447.125457 246.543116 0 447.125457-200.582341 447.125457-447.125457C957.816648 265.144776 757.234307 64.567551 510.691191 64.567551zM510.691191 863.489306c-193.982016 0-351.796298-157.814282-351.796298-351.796298s157.814282-351.796298 351.796298-351.796298S862.487489 317.710992 862.487489 511.693008 704.673208 863.489306 510.691191 863.489306z"  ></path>'+
      ''+
      '<path d="M510.691191 511.693008m-214.491119 0a209.606 209.606 0 1 0 428.982238 0 209.606 209.606 0 1 0-428.982238 0Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-wodeziliao" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 615.95648c-168.7552 0-306.01216-138.11712-306.01216-308.0192C205.98784 138.11712 343.28576 0 512 0s306.01216 138.11712 306.01216 308.0192S680.7552 615.95648 512 615.95648L512 615.95648zM512 71.92576c-129.31072 0-234.496 105.92256-234.496 236.05248 0 130.17088 105.18528 236.05248 234.496 236.05248s234.496-105.8816 234.496-236.05248C746.57792 177.84832 641.31072 71.92576 512 71.92576L512 71.92576zM917.34016 1024c-19.70176 0-35.75808-16.09728-35.75808-36.00384 0-205.12768-165.76512-372.03968-369.58208-372.03968-203.85792 0-369.62304 166.912-369.62304 372.03968C142.41792 1007.8208 126.40256 1024 106.65984 1024s-35.75808-16.09728-35.75808-36.00384c0-244.81792 197.91872-443.96544 441.09824-443.96544 243.22048 0 441.05728 199.14752 441.05728 443.96544C953.1392 1007.90272 937.08288 1024 917.34016 1024L917.34016 1024z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-yijianfankui1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M777.802762 814.383912c0 18.883069-15.313777 34.229592-34.233686 34.229592L224.069265 848.613504c-18.922978 0-34.232662-15.346523-34.232662-34.229592l3.069919-581.365834c0-18.922978 15.309684-34.232662 34.232662-34.232662l284.593733-0.071631-0.016373-93.971232-342.347089 0c-37.806047 0-68.461231 30.655184-68.461231 68.461231l0 693.830255c0 37.806047 30.655184 68.444858 68.461231 68.444858l650.387837 0c37.806047 0 68.461231-30.638811 68.461231-68.444858L888.218524 489.005286 777.802762 489.005286 777.802762 814.383912 777.802762 814.383912z"  ></path>'+
      ''+
      '<path d="M384.17166 523.256368 384.17166 651.115408 512 651.115408Z"  ></path>'+
      ''+
      '<path d="M420.583964 490.51057 831.547827 75.389014 959.52557 203.302289 548.839023 616.078427Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-guanjia" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M546.743637 203.807403l-106.821973-0.079531-41.636181-111.598592 190.095019 0L546.743637 203.807403zM546.743637 229.92896l-106.821973 0L315.06432 446.145195l178.26816 485.725525 178.268501-485.725525L546.743637 229.92896z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-qianyue" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 1.434675c-281.978163 0-510.565325 228.588185-510.565325 510.565325 0 281.976116 228.588185 510.565325 510.565325 510.565325 281.976116 0 510.565325-228.589209 510.565325-510.565325C1022.565325 230.021837 793.976116 1.434675 512 1.434675zM811.244408 482.408031c-6.67298 37.58092-20.103874 72.849168-36.953633 106.892519-24.211425 48.930409-56.540737 91.681072-97.908914 127.452787-24.118304 20.85498-50.39476 38.197974-81.026408 47.892777-10.532891 3.334955-21.48022 5.627161-32.404014 7.314593-4.942569 0.763386-10.463306-0.502443-15.432481-1.879813-26.508747-7.341199-51.907207-17.705244-76.980255-28.916587-54.760185-24.485671-108.064204-51.872415-160.663166-80.664158-3.53757-1.938142-7.086395-3.906983-10.381441-6.215562-10.428513-7.30129-9.643638-23.308869 1.535983-29.40675 5.834892-3.183506 12.012591-5.735631 18.022469-8.594749 28.182876-13.404288 54.56064-29.779234 79.538521-48.448432 1.210571-0.907673 2.453888-1.775436 3.728928-2.595105 2.39249-1.535983 4.881171-1.830695 7.42818-0.367367 9.781784 5.626137 19.561521 11.260461 29.673833 17.084097-27.506471 23.577998-57.792241 42.225707-89.647763 59.408041 1.059122 0.660032 1.592264 1.042749 2.167363 1.344624 49.875944 26.15059 100.06809 51.653427 151.983483 73.594135 10.407024 4.39817 20.857027 8.696056 31.336706 12.923334 19.816325 7.990998 39.198767 6.27082 58.43897-2.371 34.743292-15.610536 63.410192-39.128159 88.612177-67.273173 34.104749-38.081317 60.974723-80.579223 78.601172-128.711454 7.546883-20.60734 13.577227-41.632189 16.471137-63.437821 0.992607-7.497765 1.432629-15.0733 1.981121-22.624277 0.475837-6.590092-0.854461-8.366551-7.259334-10.162454-25.829272-7.256264-51.661613-14.503319-77.499072-21.736047-44.48312-12.456706-88.972381-24.90318-133.457548-37.3517-7.319709-2.049682-8.094352-1.650593-8.629541 5.810333-1.577938 22.063505-5.562692 43.618427-13.141298 64.445778-0.931209 2.560312-1.753947 5.185093-2.967588 7.607258-2.411933 4.807493-1.908466 9.036817 0.99056 13.623275 9.4093 14.880919 17.053398 30.68486 23.401989 47.101761 6.887874 17.811668 12.371772 36.050054 16.313547 54.743812 0.226151 1.073448 0.290619 2.180666 0.431835 3.27151-0.276293 0.223081-0.553609 0.448208-0.832971 0.671289-0.527003-0.832971-0.945535-1.76725-1.597381-2.486634-27.448142-30.274514-56.175417-59.247382-87.646176-85.385693-26.387997-21.917172-53.764508-42.418089-84.885296-57.328683-5.446036-2.608407-11.123338-4.734838-16.723893-7.013741-0.984421-0.402159-2.110057-0.452301-3.170203-0.666172-0.234337 0.260943-0.471744 0.524956-0.705058 0.785899 0.838088 0.939395 1.535983 2.065032 2.530636 2.788509 14.205537 10.332323 28.733415 20.25123 42.627866 30.985712 25.308409 19.545148 48.925293 41.102117 71.145363 64.036455 37.751812 38.96443 74.815963 78.595033 112.144126 117.970832 1.243317 1.309832 2.382257 2.765997 3.317559 4.307096 2.411933 3.971451 1.783623 8.224312-1.549286 11.594059-2.914376 2.950192-7.30129 3.490497-11.120268 1.153266-1.527796-0.934279-2.927679-2.164293-4.167926-3.467985-6.681166-7.03216-13.426801-14.012132-19.880793-21.245883-4.734838-5.301749-10.253528-9.29469-16.638959-12.356422-37.21867-17.84953-74.29203-35.991726-110.255103-56.30333-32.382525-18.286482-63.996546-37.791721-93.901647-59.937091-8.653077-6.40999-16.750499-13.566994-25.102724-20.38119 0.119727-0.332575 0.239454-0.662079 0.35918-0.994654 1.298576-0.199545 2.595105-0.561795 3.894703-0.578168 6.957459-0.082888 13.915941-0.042979 20.8734-0.149403 0.947582-0.013303 1.886977-0.615007 2.831488-0.945535-0.585331-0.779759-1.000793-1.868557-1.780553-2.291183-12.5662-6.819313-25.805736-12.065803-39.729863-15.196097-7.109931-1.596358-12.331863-4.90266-16.822131-10.596336-10.508331-13.33061-20.103874-27.105335-24.860201-43.641963-4.298909-14.938224-4.402263-29.870308 0.708128-44.687782 0.428765-1.235131 0.934279-2.448772 1.461281-3.647063 1.077541-2.445702 2.944052-3.241834 5.431709-2.344395 1.514493 0.543376 3.015683 1.175779 4.428869 1.940189 12.252045 6.619768 24.482601 13.279445 36.719296 19.926842 0.601704 0.327458 1.216711 0.62524 1.826602 0.937348l0.89437-0.407276c-0.529049-1.544169-0.75827-3.289929-1.639337-4.596691-7.296173-10.840906-15.515369-20.918425-24.974811-29.973662-4.501524-4.310166-4.104481-5.406127 1.929955-7.336082 11.786441-3.773953 23.806195-4.037966 35.96819-2.661619 13.899568 1.569752 27.351951 5.055133 40.647769 9.276271 8.446369 2.681062 14.870686 8.019651 19.86442 15.144932 12.170181 17.365506 24.312732 34.751478 33.961486 53.714366 0.257873 0.51063 0.575098 0.992607 1.333368 2.297322 0.812505-17.34197-3.236718-33.138748-6.709819-49.306986 0.681522 0.26913 1.061169 0.348947 1.363044 0.545422 16.361643 10.759041 33.333176 20.60734 48.524157 33.098839 10.880815 8.948813 20.155039 19.212574 27.099195 31.517831 0.245593 0.433882 0.530073 0.844228 1.248434 1.991354 1.562589-4.985548 3.074012-9.361205 4.307096-13.81668 5.53404-20.042475 7.055696-40.508599 6.40385-61.217247-0.11461-3.697205 0.11461-7.497765 0.862647-11.110035 2.267647-10.9504 11.394515-14.662955 20.351514-12.629645 12.278651 2.789533 24.373107 6.417153 36.505425 9.829879 74.573439 20.961404 149.134599 41.962717 223.700875 62.950727 0.774643 0.217964 1.549286 0.444115 2.317789 0.688685 9.912767 3.173273 13.46057 7.642051 14.118556 17.950837C815.817564 443.309548 814.70216 462.927351 811.244408 482.408031z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-xiangmu" viewBox="0 0 1029 1024">'+
      ''+
      '<path d="M948.924416 738.983936 512.67584 929.682432 79.95392 736.520192l-3.357696 6.285312 2.106368-6.69184c-3.401728-1.071104-39.611392-15.366144-65.350656-29.983744L0 698.543104l0 15.356928c0 34.97984 11.650048 59.60704 34.214912 71.478272l428.525568 191.678464c18.132992 8.507392 33.61792 14.173184 50.243584 14.173184 16.503808 0 32.878592-5.62176 52.484096-14.1056l428.8-191.797248c31.604736-14.685184 34.060288-58.382336 34.060288-71.426048l0-14.432256-41.32864 20.599808C969.780224 728.667136 951.991296 737.547264 948.924416 738.983936z"  ></path>'+
      ''+
      '<path d="M31.133696 384.479232l432.142336 192.146432c18.272256 8.51968 33.867776 14.195712 50.610176 14.195712 16.625664 0 33.123328-5.629952 52.87936-14.129152L999.161856 384.43008c17.3824-8.015872 28.659712-28.060672 29.433856-52.312064 0.837632-26.027008-10.248192-48.475136-29.038592-58.643456L567.656448 47.900672c-18.62144-10.913792-34.159616-15.778816-50.388992-15.778816-15.822848 0-32.535552 4.77184-54.351872 15.566848L30.626816 273.473536l-0.66048 0.380928c-19.014656 12.101632-30.18752 34.948096-29.160448 59.62752C1.739776 355.944448 12.880896 374.915072 31.133696 384.479232zM63.386624 326.731776 516.749312 86.566912l449.481728 240.161792-449.486848 201.25696L63.386624 326.731776z"  ></path>'+
      ''+
      '<path d="M949.110784 536.679424 514.16576 729.51296 79.93344 536.9856l-2.499584 4.702208 1.91488-4.909056c-2.921472-1.140736-39.503872-17.78688-65.993728-32.838656l-13.355008-7.58784 0 15.36c0 35.335168 11.967488 61.093888 34.214912 72.781824l428.525568 191.689728c18.132992 8.507392 33.61792 14.173184 50.243584 14.173184 16.503808 0 32.878592-5.62176 52.484096-14.1056l428.793856-191.806464c25.115648-11.65312 34.066432-45.2096 34.066432-72.732672l0-14.440448-34.374656 17.137664C974.732288 523.999232 953.073664 534.806528 949.110784 536.679424z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-shouyeshouye" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M949.082218 519.343245 508.704442 107.590414 68.326667 518.133697c-8.615215 8.03193-9.096169 21.538549-1.043772 30.144554 8.043187 8.599865 21.566178 9.085936 30.175253 1.035586l411.214573-383.337665 411.232992 384.505257c4.125971 3.854794 9.363252 5.760191 14.5903 5.760191 5.690606 0 11.384281-2.260483 15.58393-6.757914C958.138478 540.883841 957.695387 527.388479 949.082218 519.343245L949.082218 519.343245zM949.082218 519.343245M814.699602 527.800871c-11.787464 0-21.349237 9.555633-21.349237 21.327748l0 327.037405L622.552373 876.166023 622.552373 648.662543 394.824789 648.662543l0 227.503481L224.032938 876.166023 224.032938 549.128619c0-11.772115-9.55154-21.327748-21.348214-21.327748-11.802814 0-21.35333 9.555633-21.35333 21.327748l0 369.691877 256.19494 0L437.526333 691.318038l142.329613 0 0 227.502457 256.1888 0L836.044746 549.128619C836.045769 537.356504 826.481949 527.800871 814.699602 527.800871L814.699602 527.800871zM814.699602 527.800871M665.254941 222.095307l128.095423 0 0 113.74867c0 11.789511 9.562796 21.332864 21.349237 21.332864 11.783371 0 21.346167-9.543354 21.346167-21.332864L836.045769 179.439812 665.254941 179.439812c-11.789511 0-21.35333 9.538237-21.35333 21.327748C643.900587 212.554 653.464407 222.095307 665.254941 222.095307L665.254941 222.095307zM665.254941 222.095307"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-24" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M469.312 298.688l85.312 0 0 426.688-85.312 0 0-426.688Z"  ></path>'+
      ''+
      '<path d="M640 554.688l85.312 0 0 170.688-85.312 0 0-170.688Z"  ></path>'+
      ''+
      '<path d="M298.688 426.688l85.312 0 0 298.688-85.312 0 0-298.688Z"  ></path>'+
      ''+
      '<path d="M213.312 896l597.312 0C857.6 896 896 857.6 896 810.688L896 213.312C896 166.4 857.6 128 810.688 128L213.312 128C166.4 128 128 166.4 128 213.312l0 597.312C128 857.6 166.4 896 213.312 896zM192 255.68C192 220.544 221.184 192 255.68 192l512.576 0C803.456 192 832 221.184 832 255.68l0 512.576C832 803.456 802.816 832 768.32 832L255.68 832C220.544 832 192 802.816 192 768.32L192 255.68z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-circle" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M928 512c0 229.76-186.24 416-416 416s-416-186.24-416-416c0-229.76 186.24-416 416-416s416 186.24 416 416z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-pinggu" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M709.046818 318.617641c-131.88268 0-263.770476 0-395.653155 0-31.457456 0-31.457456 48.740074 0 48.740074 131.88268 0 263.770476 0 395.653155 0C740.503251 367.357715 740.503251 318.617641 709.046818 318.617641zM709.046818 491.89715c-131.88268 0-263.770476 0-395.653155 0-31.457456 0-31.457456 48.740074 0 48.740074 131.88268 0 263.770476 0 395.653155 0C740.503251 540.637224 740.503251 491.89715 709.046818 491.89715zM709.046818 665.182798c-131.88268 0-263.770476 0-395.653155 0-31.457456 0-31.457456 48.740074 0 48.740074 131.88268 0 263.770476 0 395.653155 0C740.503251 713.923896 740.503251 665.182798 709.046818 665.182798zM937.114141 315.742151C899.160737 159.569252 752.345973 72.224951 599.401606 72.224951c-119.906927 0-251.839749-17.061584-361.351931 41.125653-75.110675 39.912012-128.86188 112.045889-154.530492 191.94052-17.220197 53.599755-13.693884 110.940718-13.693884 166.423357 0 105.948007-10.432607 212.768895 41.163515 309.699528C171.930791 895.904577 293.437146 949.484889 418.298921 949.484889c92.842525 0 194.83443 11.336186 285.830911-10.736529 143.628188-34.842553 240.35109-170.502255 243.693208-314.605258 0.027629-0.51984 0.045025-1.045819 0.045025-1.584078C947.869089 523.076266 960.804702 413.1916 937.114141 315.742151zM764.232698 860.965833c-58.048067 36.285414-121.948423 39.786145-187.914834 39.786145-56.83545 0-113.683179 0-170.517605 0-82.194 0-155.699108-29.826306-212.983789-89.075735-97.215112-100.55109-74.207096-252.876358-74.207096-380.562459 0-70.390163 10.963703-133.399219 51.388391-193.184861 50.200332-74.251098 140.040477-116.969015 228.522694-116.969015 146.93449 0 314.090535-27.045983 426.358481 89.081874 102.560864 106.087177 74.213235 277.704836 74.213235 412.519288C897.27069 721.171973 847.949378 808.623721 764.232698 860.965833z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-zaixianzixun" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M300.714667 456.448m-46.933333 0a1.1 1.1 0 1 0 93.866667 0 1.1 1.1 0 1 0-93.866667 0Z"  ></path>'+
      ''+
      '<path d="M509.354667 456.448m-46.933333 0a1.1 1.1 0 1 0 93.866667 0 1.1 1.1 0 1 0-93.866667 0Z"  ></path>'+
      ''+
      '<path d="M718.037333 456.448m-46.933333 0a1.1 1.1 0 1 0 93.866667 0 1.1 1.1 0 1 0-93.866667 0Z"  ></path>'+
      ''+
      '<path d="M713.045333 895.573333c-16.725333 0-32.384-6.698667-44.032-18.858667l0 0c0 0-48.256-50.048-103.850667-107.733333-12.245333-12.714667-11.861333-32.981333 0.853333-45.269333 12.714667-12.202667 32.938667-11.904 45.269333 0.853333l103.765333 107.690667 19.925333-93.482667c3.669333-14.122667 16.426667-23.978667 31.018667-23.978667l85.205333 0c34.346667 0 62.293333-29.525333 62.293333-65.877333L913.493333 257.408c0-21.461333-5.461333-37.76-16.170667-48.469333-17.322667-17.194667-45.226667-17.408-45.866667-17.408l0 0L167.637333 191.530667c-34.346667 0-62.293333 29.525333-62.293333 65.834667l0 391.466667c0 36.352 27.946667 65.877333 62.293333 65.877333l264.405333 0c17.664 0 32 14.336 32 32s-14.336 32-32 32L167.637333 778.709333c-69.632 0-126.293333-58.282667-126.293333-129.877333L41.344 257.408c0-71.594667 56.661333-129.834667 126.293333-129.834667l683.52 0c9.514667-0.042667 56.490667 1.493333 91.264 36.053333 23.253333 23.125333 35.029333 54.698667 35.029333 93.824l0 391.466667c0 71.594667-56.661333 129.877333-126.293333 129.877333l-60.416 0-17.536 67.968c-1.834667 10.069333-7.552 21.205333-16.128 30.037333C745.429333 888.874667 729.770667 895.573333 713.045333 895.573333z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
