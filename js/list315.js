/*!
 * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
var map = null;
var curPoint = null;
$(document).ready(function () {
    queryPartner();
    tabNavToSelect();
    var height = window.screen.height;
    $(".header-image").css("height", height);
});

function tabNavToSelect() {
    $nav = $('.nav.nav-schedule');

    var _this = this;

    $nav.each(function () {
        var $this = $(this),
            $active = $this.find('li.active > a'),
            $field = $('<span class="nav-current">' + $active.html() + '</span>');

        if ($this.find('> li').length <= 1) {
            return;
        }

        $this.wrapAll('<div class="nav-wrapper"></div>');

        $this.before($field);

        $field.on('click', function () {
            if (!$this.is('.open')) {
                $this.stop(true, true).slideDown(250).addClass('open');

            } else {
                $this.stop(true, true).slideUp(150).removeClass('open');

            }
        });

        $this.on('click', 'a', function () {
            $field.html($(this).html());
        });

        $('body').on('click', function (event) {
            $target = $(event.target);

            if (!$target.closest($field).length && $this.is('.open')) {
                $this.stop(true, true).slideUp(150).removeClass('open');
            }
        });
    });
}

function showCall(day) {
    $("#day" + day).addClass("show");
    $("#day" + day).removeClass("hidden");
    if (day == 0) {
        $("#day1").removeClass("show");
        $("#day2").removeClass("show");
        $("#day3").removeClass("show");
        $("#day1").addClass("hidden");
        $("#day2").addClass("hidden");
        $("#day3").addClass("hidden");
    } else if (day == 1) {
        $("#day0").removeClass("show");
        $("#day2").removeClass("show");
        $("#day3").removeClass("show");
        $("#day0").addClass("hidden");
        $("#day2").addClass("hidden");
        $("#day3").addClass("hidden");
    } else if (day == 2) {
        $("#day0").removeClass("show");
        $("#day1").removeClass("show");
        $("#day3").removeClass("show");
        $("#day0").addClass("hidden");
        $("#day1").addClass("hidden");
        $("#day3").addClass("hidden");
    } else if (day == 3) {
        $("#day0").removeClass("show");
        $("#day1").removeClass("show");
        $("#day2").removeClass("show");
        $("#day0").addClass("hidden");
        $("#day1").addClass("hidden");
        $("#day2").addClass("hidden");
    }
}

function queryPartner() {
    // getCurrentPosition();
    $(window).scroll(function (event) {
        var clientY = $("#header").offset().top - $(window).scrollTop();
        var scrollTop = $(window).scrollTop();
        var position = $("#menu").css('position');
        console.log(position);
        if (clientY <= 500 && position != 'fixed') {
            //$("#menu").removeClass("menu-bottom-position");
            $("#menu").addClass("menu-position");
            $(".cbd-list").css("color", "#333");
            $(".cbd-list").css("border-color", "#333");
            $(".cbd-list").css("background", "#fff");
        }
        if (parseInt(scrollTop) < 400) {
            console.log(scrollTop);
            $("#menu").removeClass("menu-position");
            //$("#menu").addClass("menu-bottom-position");
            $(".cbd-list").css("color", "#fff");
            $(".cbd-list").css("border-color", "#fff");
            $(".cbd-list").css("background", "none");
        }
    });

    $(".nav_rep .box").click(function () {
        $(".nav_rep .con").css({
            display: "block"
        });
        $(".nav_rep .box").css({
            display: "none"
        });
        $(".nav_rep .box_rep").css({
            display: "block"
        });

        $(".nav_rep .con").animate({
            height: "320px"
        }, 500);
    })

    $(".nav_rep .box_rep").click(function () {
        $(".nav_rep .box_rep").css({
            display: "none"
        });
        $(".nav_rep .box").css({
            display: "block"
        });
        $(".nav_rep .con").animate({
            height: "0px"
        }, 500);
    })
}


// function showMap() {
//     var point2 = new BMap.Point(108.91882349465178, 34.15899016687336);
//     var map1 = new BMap.Map("schoolmap");
//     map1.centerAndZoom(point2, 16);
//     //map1.enableScrollWheelZoom(false);
//     var myIcon = new BMap.Icon("images/ding.png", new BMap.Size(20, 20));
//     var mk1 = new BMap.Marker(point2, {icon: myIcon});
//     // map1.addOverlay(mk1);
//     map1.panTo(point2);
//     map1.centerAndZoom(point2, 16);
//     var top_left_control1 = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
//     var top_left_navigation1 = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
//     map1.addControl(top_left_control1);
//     map1.addControl(top_left_navigation1);
//     // map1.enableScrollWheelZoom(false);     //开启鼠标滚轮缩放 false关闭
//     // map1.addControl(new BMap.OverviewMapControl());  //显示缩略图

//     //缩略图
//     var mapType1 = new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]});
//     var mapType2 = new BMap.MapTypeControl({anchor: BMAP_ANCHOR_TOP_LEFT});
//     var overView = new BMap.OverviewMapControl();
//     var overViewOpen = new BMap.OverviewMapControl({isOpen: true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT});

//     map1.addControl(mapType1);          //2D图，卫星图
//     // map1.addControl(mapType2);       //左上角，默认地图控件
//     map1.setCurrentCity("西安");         //由于有3D图，需要设置城市哦
//     map1.addControl(overView);          //添加默认缩略地图控件
//     map1.addControl(overViewOpen);      //右下角，打开

//     function show() {
//         $(".location-hotel").show();
//     }

//     function hide() {
//         $(".location-hotel").hide();
//     }

//     mk1.addEventListener("mouseover", show);
//     mk1.addEventListener("mouseout", hide);
//     //多个文字弹窗
//     var JI_html = "<p class='map_info'>Jiyuan International Hotel</p><p class='map_info'>" +
//         "Location: Jiyuan International Hotel</p><p class='map_info'> Contact: +86-13759911314</p>";
//     // var XI_html="<p class='map_info'>SHANGHAI XI TIANYOU HOTEL</p> <p class='map_info'>Location: No.827, Zhongshan West Road, Changning, Shanghai, China </p><p class='map_info'> Contact:  +86 21 6219 1100</p>";
//     var data_info = [
//         [108.91882349465178, 34.15899016687336, JI_html]];
//     var opts = {
//         width: 280,
//         overflow: "hidden",
//         title: "<h4>LOCATION</h4>",
//         enableMessage: true
//     };
//     for (var i = 0; i < data_info.length; i++) {
//         var marker = new BMap.Marker(new BMap.Point(data_info[i][0], data_info[i][1]), {icon: myIcon});  // 创建标注
//         var content = data_info[i][2];
//         map1.addOverlay(marker);               // 将标注添加到地图中
//         addClickHandler(content, marker);
//     }

//     function addClickHandler(content, marker) {
//         marker.addEventListener("click", function (e) {
//                 openInfo(content, e)
//             }
//         );
//     }

//     function openInfo(content, e) {
//         var p = e.target;
//         var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
//         var infoWindow = new BMap.InfoWindow(content, opts);  // 创建信息窗口对象
//         map1.openInfoWindow(infoWindow, point); //开启信息窗口
//     }
// }


// function showMap1() {
//     var point2 = new BMap.Point(108.91710688088224, 34.1576051990611);
//     var map1 = new BMap.Map("schoolmap1");
//     map1.centerAndZoom(point2, 16);
//     //map1.enableScrollWheelZoom(false);
//     var myIcon = new BMap.Icon("images/ding.png", new BMap.Size(100, 55));
//     var mk1 = new BMap.Marker(point2, {icon: myIcon});
//     // map1.addOverlay(mk1);
//     map1.panTo(point2);
//     map1.centerAndZoom(point2, 16);
//     var top_left_control1 = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
//     var top_left_navigation1 = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
//     map1.addControl(top_left_control1);
//     map1.addControl(top_left_navigation1);
//     // map1.enableScrollWheelZoom(false);     //开启鼠标滚轮缩放 false关闭
//     // map1.addControl(new BMap.OverviewMapControl());  //显示缩略图
//     // 
//     //缩略图
//     var mapType1 = new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]});
//     var mapType2 = new BMap.MapTypeControl({anchor: BMAP_ANCHOR_TOP_LEFT});
//     var overView = new BMap.OverviewMapControl();
//     var overViewOpen = new BMap.OverviewMapControl({isOpen: true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT});

//     map1.addControl(mapType1);          //2D图，卫星图
//     map1.addControl(mapType2);          //左上角，默认地图控件
//     map1.setCurrentCity("西安");        //由于有3D图，需要设置城市哦
//     map1.addControl(overView);          //添加默认缩略地图控件
//     map1.addControl(overViewOpen);      //右下角，打开
//     function show() {
//         $(".location-hotel").show();
//     }

//     function hide() {
//         $(".location-hotel").hide();
//     }

//     mk1.addEventListener("mouseover", show);
//     mk1.addEventListener("mouseout", hide);
//     //多个文字弹窗
//     var JI_html = "<p class='map_info'>JI HOTEL Shanghai Hongqiao Zhongshan West Road </p> <p class='map_info'>Location：No.908 Zhongshan West Road, Changning, Shanghai,China</p><p class='map_info'> Contact： +86 21 5289 1395</p>";
//     // JI_html+="<p class='map_info'>Shanghai Xi Tianyou Hotel is located in Hongqiao’s Development Zone inside Donghua University campus, a 15-minute drive from Hongqiao Airport. Various dining and shopping options are available nearby. Rooms at Shanghai Xi Tianyou Hotel come with modern décor and large windows. Each room is fitted with a TV and wired internet. Shanghai Xi Tianyou Hotel is 4 km from the Shanghai Exhibition centre and 12 km from Shanghai Railway Station. </p>";
//     // JI_html+="<p class='map_info'>This property is also rated for the best value in Shanghai! Guests are getting more for their money when compared to other properties in this city.</p>";
//     var XI_html = "<p class='map_info'>SHANGHAI XI TIANYOU HOTEL</p> <p class='map_info'>Location: No.827, Zhongshan West Road, Changning, Shanghai, China </p><p class='map_info'> Contact:  +86 21 6219 1100</p>";
//     // XI_html+="<p class='map_info'>JI Hotel Shanghai Hongqiao Zhongshan West Road is situated in Shanghai, 10 km from Hongqiao Airport and Hongqiao Railway Station. The non-smoking property features an on-site restaurant. Free WiFi throughout the property.</p>";
//     // XI_html+="<p class='map_info'>Each room comes with a flat-screen TV with cable and satellite channels, ironing facilities and bottles of water. The attached bathroom has shower facilities and free toiletries. A hairdryer is available.</p>";
//     // XI_html+="<p class='map_info'>There is a 24-hour front desk and shops at the property. Fax, printing and copying facilities are available at the business centre.</p>";
//     // XI_html+="<p class='map_info'>JI Hongqiao Zhongshan West Road is 4 km from Shanghai Library and 5 km from Xintiandi. Lujiazui is about 12 km away. </p>";
//     // XI_html+="<p class='map_info'>Changning is a great choice for travelers interested in nightlife, culturally diverse food and food. </p>";
//     var data_info = [
//         [108.91710688088224, 34.1576051990611, XI_html]
//     ];
//     var opts = {
//         width: 280,
//         overflow: "hidden",
//         title: "<h4>LOCATION</h4>",
//         enableMessage: true
//     };
//     for (var i = 0; i < data_info.length; i++) {
//         var marker = new BMap.Marker(new BMap.Point(data_info[i][0], data_info[i][1]), {icon: myIcon});  // 创建标注
//         var content = data_info[i][2];
//         map1.addOverlay(marker);               // 将标注添加到地图中
//         addClickHandler(content, marker);
//     }

//     function addClickHandler(content, marker) {
//         marker.addEventListener("click", function (e) {
//                 openInfo(content, e)
//             }
//         );
//     }

//     function openInfo(content, e) {
//         var p = e.target;
//         var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
//         var infoWindow = new BMap.InfoWindow(content, opts);  // 创建信息窗口对象
//         map1.openInfoWindow(infoWindow, point); //开启信息窗口
//     }


// }

function showDialog(people) {
    if (people == '1') {
        $(".modal-title").html('Yi Pan');
        $(".modal-body").html('<p style="font-size:20px;font-weight:bold;">Biography</p> ' +
            '' +
            '<p class="about">' +
            'Dr. Yi Pan is currently a Chair Professor and the Dean of the College of Computer Science and Control Engineering, Shenzhen Institute of Advanced Technologies, Chinese Academy of Sciences and Regents’ Professor Emeritus at Georgia State University. He served as Chair of Computer Science Department at Georgia State University from 2005 to 2020. He has also served as an Interim Associate Dean and Chair of Biology Department during 2013-2017. Dr. Pan joined Georgia State University in 2000, was promoted to full professor in 2004, named a Distinguished University Professor in 2013 and designated a Regents\' Professor (the highest recognition given to a faculty member by the University System of Georgia) in 2015. Dr. Pan received his B.Eng. and M.Eng. degrees in computer engineering from Tsinghua University, China, in 1982 and 1984, respectively, and his Ph.D. degree in computer science from the University of Pittsburgh, USA, in 1991. His profile has been featured as a distinguished alumnus in both Tsinghua Alumni Newsletter and University of Pittsburgh CS Alumni Newsletter. Dr. Pan\'s current research interests mainly include bioinformatics and health informatics using big data analytics, cloud computing, and machine learning technologies. Dr. Pan has published more than 450 papers including over 250 journal papers with more than 100 papers published in IEEE/ACM Transactions/Journals. In addition, he has edited/authored 43 books. His work has been cited more than 18000 times based on Google Scholar and his current h-index is 87. Dr. Pan has served as an editor-in-chief or editorial board member for 20 journals including 7 IEEE Transactions. Currently, he is serving as an Associate Editor-in-Chief of IEEE/ACM Transactions on Computational Biology and Bioinformatics. He is the recipient of many awards including one IEEE Transactions Best Paper Award, five IEEE and other international conference or journal Best Paper Awards, 4 IBM Faculty Awards, 2 JSPS Senior Invitation Fellowships, IEEE BIBE Outstanding Achievement Award, IEEE Outstanding Leadership Award, NSF Research Opportunity Award, and AFOSR Summer Faculty Research Fellowship. He has organized numerous international conferences and delivered keynote speeches at over 60 international conferences around the world.' +
            '</p>' +
            '<p style="font-size:24px;font-weight:bold;text-align: justify;">Title: Automatic and semi-automatic programming of cloud computing programs</p>' +
            '<p style="font-size:20px;font-weight:bold;">Abstract: </p>' +
            '<p class="about"> ' +
            'Cloud computing has gradually evolved into an infrastructural tool for many scientific and business applications with intensive data or computing requirements. One of the challenges in cloud computing now is how to run software efficiently on cloud platforms since lots of classic sequential codes are not ready to be executed in parallel in cloud environments, resulting in long execution time and low efficiency. It is also costly and labor intensive to redesign and convert current sequential codes into cloud codes running on cloud programming models such as MapReduce or Spark. Thus, automatic translation from sequential codes to cloud codes is one of the directions that could resolve the problem of slow code migration from traditional computing platforms to cloud infrastructures. In this talk, I will present several automatic translators (M2M, J2M and J2S) for cloud programming models MapReduce and Spark. I will provide details of the design of our translators and their performance results based on many experiments. Performance comparisons between hand coded cloud programs and automatically translated codes will also be carried out. Semi-automatic translation with human tuning will also be introduced. Our experimental results indicate that the translators we have designed not only can precisely translate the sequential codes such as MATLAB codes or Java codes into cloud codes, but also can achieve almost a linear speedup in performance if the data sizes in the applications are huge enough. Since cloud computing is used for big data anyway, this demonstrates that automatic translation to reduce labor costs is a possible effective way to go for cloud programming. In addition, the limitations and shortcomings of our automatic translation and semi-automatic translation will be identified and future directions in this area will be provided.' +
            '</p>');

    } else if (people == '2') {
        $(".modal-title").html('Zhiwen Yu');
        $(".modal-body").html('<p style="font-size:20px;font-weight:bold;">Biography</p> ' +
            '<p class="about">Dr. Zhiwen Yu is currently a professor and dean of School of Computer Science, Northwestern Polytech-nical University, China. He has worked as an Alexander Von Humboldt Fellow at Mannheim University, Germany from Nov. 2009 to Oct. 2010, a research fellow at Kyoto University, Japan from Feb. 2007 to Jan. 2009, and a post-doctoral researcher at Nagoya University, Japan in 2006-2007. His research interests cover pervasive computing, Internet of Things, and mobile social networks. He is the Editor-in-Chief of CCF Transactions on Pervasive Computing and Interaction. He has served as an associate/guest editor for a number of international journals, such as IEEE Transactions on Human-Machine Systems, IEEE Commu-nications Magazine, and ACM Transactions on Intelligent Systems and Technology. He received the CCF Young Scientist Award in 2011, the Humboldt Fellowship in 2008, and the CCF Excellent Doctoral Dis-sertation Award in 2006. He got the National Science Fund for Distinguished Young Scholars in 2017.</p>' +
            // '<p class="about">Dr. Su is a member of the Association for Computing Machinery (ACM) and SIGMOD, and a senior member of the IEEE and Computer Society. He served/is serving on program/organizational committees of many database, services computing, and BPM conferences/workshops: as program committee (co-)chair (PODS 2009, WS-FM 2009, MDM 2007, etc.), as a program committee member (PODS/EDBT 2015, ICSOC/BPM 2014, ICDT 2013, etc.), and as an organizer (general co-chair for ICSOC 2013, workshop chair for BPM 2010, general chair for SIGMOD 2001, etc.). He gave keynote speeches at various workshops/conferences (WS-FM 2013, DAB 2013, ICSOC 2012, etc.). He was a member of the ACM SIGMODExecutive Committee (2003-2007) and PODSExecutive Committee (2008-2011). At the University of California, he served on the UC system-wide senate committees on International Education(UCIE, 2006-2008), Research Policy(UCORP, 2010-2012), and many committees of the UCSB Academic Senate.</p>' +
            '<p  style="font-size:24px;font-weight:bold;text-align: justify;">Title: Crowd Sensing 2.0: From Human-Centered to Heterogeneous Crowd Sensing</p>'
            // '<p  style="font-size:20px;font-weight:bold;">Abstract: </p>' +
            // '<p class="about">Combining big data with machine learning is a powerful tool for business intelligence. However, in enterprises across many sectors (business, government, healthcare, etc.), a great amount of information concerning their business and workflow does *not* exist in digital form. For example, the common term of "institutional memory" refers to senior people in an enterprise who are extremely knowledgeable about the history, rationals, and other possibly complicated details concerning the business operations. Quality of business analytics can be significantly enhanced by incorporating human knowledge into big data and machine learning. An initial idea is to support *explorations* of business data through, e.g., ad hoc queries. </p>' +
            // '<p class="about">In this talk, we focus on analysis of business workflow executions (enactments). The traditional ETL-data warehouse-OLAP approach tackles essentially a similar problem. However the types of data to be queried about and explored are limited to the data extracted by hard-coded ETL tools and stored into the data warehouse. Any changes (such as new data, new tasks, etc.) would demand at least modifications of ETL tools so that analysis remains accurate. In contrast to the traditional approach, we develop a new framework for business analytics based on workflow logs with support for ad hoc queries directly on logs. Using a simplified logical model for workflow logs, query languages can be developed to formulate query conditions on task executions as well as data manipulated by tasks.</p>' +
            // '<p class="about">We will also discuss further technical challenges towards enhancing big data and machine learning with human knowledge.</p>'
        );
    } else if (people == '3') {
        $(".modal-title").html('Jianming Yong');
        $(".modal-body").html('<p style="font-size:20px;font-weight:bold;">Biography</p> <p class="about">Dr Jianming Yong is a full Professor in the discipline of information systems, School of Management & Enterprise, University of Southern Queensland, Australia. His research interests include cloud computing and cyber security. He has edited 14 journal issues/research books/conference proceedings; published over 110 refereed research papers including many journal papers in top ICT outlets, such as IEEE Transactions on Services Computing, Information Sciences, Knowledge-Based Systems, IEEE Transaction on Automa-tion Science and Engineering, etc. which have a significant impact on ICT research and development over cyber security and cloud computing. He has participated in American NSF, and European Union research projects. He is also a member of IEEE and its computer society for over 20 years.</p>' +
        // '<p class="about">Dr. Yang has published papers in the international journals and conferences such as IEEE transactions, Information Systems, Data & Knowledge Engineering, CACM, VLDB, ICDCS, CAiSE, CoopIS, CIKM, etc. She has served as program committee member in various international conferences such as: ICDE, CAiSE,ER, CoopIS, ICSOC, BPM, ICWS, SCC, WISE, WAIM, etc. She is also a regular reviewer for journals such as IEEE Transactions on Knowledge & Data Engineering, Data & Knowledge Engineering, VLDB Journal, IEEE Internet Computing, etc.</p>' +
        // '<p class="about">Her main research interests are: web service technology; business process management; interoperability, trust and security issues in digital libraries and e-commerce; social network.</p>' +
        '<p style="font-size:24px;font-weight:bold;text-align: justify;">Title: How do Big Data, Cloud Computing, Artificial Intelligence and 5G Information Technology as-sist in the mitigation of COVID-19</p>' +
        '<p style="font-size:20px;font-weight:bold;">Abstract: </p>' +
        // '<p class="about">Social media is widely used for discussion and information dissemination on all kinds of topics, which has been witnessed by the past US president election.  As a result, both business and academics have researched methods to identify the topics being discussed on social media such as Twitter. However, deriving topics from this short text based and highly dynamic environment is a huge challenge. </p>' +
        // '<p class="about">In this talk, we look into an approach that considers both content and interactions with a temporal aspect in topic derivation. Interactions among tweets, i.e., mentions, retweets, replies, are important factors contributing to the quality of topic derivation on Twitter. If applied correctly, the incorporation of tweet interactions can significantly improve the quality of topic derivation in comparison with approaches that are mainly based on the content similarity analysis. However, how interactions can be measured and integrated with content similarity for topic derivation remains a challenge. Firstly the strength of tweet-to-tweet relationship is computed by simply adding measures for content similarity, mentions, and reply-retweets. This simple linear addition does not accurately reflect the various impacts these factors have on tweet relationships. In order to address this issue, we propose a joint probability model that can effectively integrate the effects of the content similarity, mentions, and reply-retweets to measure the tweet relationship for the purpose of topic derivation. The proposed method is based on matrix factorization techniques, which enables a flexible implementation on a distributed system in an incremental manner. Experimental results show that the proposed model results in a significant improvement in the quality of topic derivation over existing methods.</p>' +
        '<p class="about">Since the COVID-19 outbreak the global the global social, economic, religious as well as cultural framework and schedules were adversely affected. The fear and panic associated with the new disease that the world barely knew anything about amplified the situation. The close examination of the genetic make-up of the virus showed that the virus is zoonotic, meaning the virus changed hosts form animals to humans. The uncertainty associated with the above features and characteristic of the virus as well as the high mortality rates witnessed in many parts of the globe significantly contributed to a widespread global panic that essentially brought the world to a standstill. Different authorities and agencies associated in securing the public implemented different ways and methods to try and mitigate the transmission of the infection as the scientist and medical practitioners work on the remedies to curb the spread of COVID-19. Due to the different demographics different part of the globe attempted to effectively implement the locally available resources to efficiently fight and hence mitigate the adverse effects of COVID-19 pandemic.  The general framework given by World Health Organization (WHO) due were implemented or enhanced in different parts of the globe by the locally available resources and expertise to effectively mitigate the impact of COVID-19 There is currently no effective vaccine for Covid-19, but new technology can be available within weeks to reduce the disease\'s spreading, and current approaches like contact tracing and testing are not secure and the cost of testing is high for the end users, and the proposed solution based on self-diagnosis without any security risk for users\' data with low cost of cloud-based data analytics using handsets is an innovative approach. </p>'
    )
        ;
    } else if (people == '4') {
        $(".modal-title").html('Yan Zhang');
        $(".modal-body").html('<p style="font-size:20px;font-weight:bold;">Biography</p> <p class="about">Prof. Yan Zhang is a Full Professor at the Department of Informatics, University of Oslo, Norway. He received a PhD degree in School of Electrical & Electronics Engineering, Nanyang Technological University, Singapore.</p>' +
            '<p class="about">He serves as an Associate Technical Editor of IEEE Communications Magazine, an Editor of IEEE Transactions on Green Communications and Networking, an Editor of IEEE Communications Surveys & Tutorials, an Editor of IEEE Internet of Things Journal, and an Associate Editor of IEEE Access.  He serves as chair positions in a number of conferences, including IEEE GLOBECOM 2017, IEEE VTC-Spring 2017, IEEE PIMRC 2016, IEEE CloudCom 2016, IEEE ICCC 2016, IEEE CCNC 2016, IEEE SmartGridComm 2015, and IEEE CloudCom 2015. He serves as TPC member for numerous international conferences including IEEE INFOCOM, IEEE ICC, IEEE GLOBECOM, and IEEE WCNC. His current research interests include: next-generation wireless networks leading to 5G, reliable and secure cyber-physical systems (e.g., smart grid, transport, and healthcare). He has sevenESI “Highly Cited Papers”. He is IEEE VTS (Vehicular Technology Society) Distinguished Lecturer. He is also a senior member of IEEE, IEEE ComSoc, IEEE PES, and IEEE VT society. He is a Fellow of IET.</p>' +
            '<p style="font-size:24px;font-weight:bold;">Title: Internet of Vehicles: when Cloud and Learning meet Intelligent Transport Systems</p>' +
            '<p style="font-size:20px;font-weight:bold;">Abstract: </p>' +
            '<p class="about">The concept of “connected vehicles” is driving the evolution of traditional transport systems into the era of Internet of Vehicles (IoV). In this emerging paradigm, we may envision that the concepts of cloud computing and machine learning play a crucial role. This talk mainly includes three parts. In the first part, we introduce the key concepts and architectures in the IoV scenario. Then, we focus on several unprecedented challenges and potential solutions when we explore cloud computing and machine learning for intelligent transport systems.These challenges are related to new cloud computing and edge computing scenarios, optimal resource managementfor vehicular networks, and accurate forecasting of traffic and speed for new applications. </p>');
    } else if (people == '5') {
        $(".modal-title").html('Xiandong Meng');
        $(".modal-body").html('<p class="about">Xiandong Meng is the senior software architect responsible for the IBM Cloud Manager with OpenStack product development. He has many years of product development & customer engagement experience in the datacenter and cloud management area. He joined IBM after he received the Master’s degree from department of Computer Science & Technology, Tsinghua University in 2004.</p>');
    } else if (people == '6') {
        $(".modal-title").html('Larry Liu');
        $(".modal-body").html('<p class="about">Larry Liu is responsible for product development and delivery of Sponge big data offerings. Before co-founded Sponge, he served as product manager in Couchbase leading innovations in the areas of NoSQL database systems and mobile products. Previously, he was product manager in Hortonworks responsible for hadoop core innovation and hadoop for Microsoft and Teradata integration. Previously in his career, Larry has held technical and management positions at Yahoo and CollabNet, in addition to couple of start ups including MedEngage and iArchitects. Larry holds a MS in Computer Science from California State University.</p>');
    } else if (people == '7') {
        $(".modal-title").html('Liping Xu');
        $(".modal-body").html('<p class="about">Liping Xu is a senior engineer of data mining in MIC, mainly engaged in database modeling, data analysis and data mining. She has rich work experience about the applications of big data in e-commerce field. She received the Master’s degree from Nanjing University of Technology in 2011, specialized in Computer Application Direction.</p>');
    }

    $('.auditPartner').modal('show');
}


// function showDialog(people){
//     if(people=='1'){
//         $(".modal-title").html('Geoffrey Charles Fox');
//         $(".modal-body").html(
//             '<p class="about" style="font-size:24px;font-weight:bold;">Title: Characteristics of Future Big Data Platforms</p>'+
//             '<p><h4>Abstract</h4></p> <p class="about">We discuss requirements of data analysis computing platforms satisfying different cost, performance and usability issues in different application classes. We use the Ogres, which provide a means of understanding and characterizing the most common application workloads across commercial, government and scientific domains. We stress similarities and differences between simulations and data analytics.</p>' +
//             '<p class="about">Turning to hardware and software, we introduce HPC-ABDS, the High-Performance Computing (HPC) enhanced Apache Big Data Stack (ABDS), which uses the major open source Big Data software environment but develops the principles allowing the use of HPC software and hardware to achieve good performance. We present several big data performance studies.</p>' +
//             '<p class="about">We expect both conventional clouds and HPC clusters to be important and suggest DevOps as an approach to automate the deployment of software-defined applications on different hardware platforms.</p>');
//             // '<p class="about">He currently works in applying computer science from infrastructure to analytics in Biology, Pathology, Sensor Clouds, Earthquake and Ice-sheet Science, Image processing, Deep Learning, Manufacturing, Network Science and Particle Physics. The infrastructure work is built around Software Defined Systems on Clouds and Clusters. The analytics focuses on scalable parallelism.</p>' +
//             // '<p class="about">He is involved in several projects to enhance the capabilities of Minority Serving Institutions. He has experience in online education and its use in MOOCs for areas like Data and Computational Science.</p>' +
//             // '<p class="about">He is a Fellow of APS (Physics) and ACM (Computing).</p>');
//     }else if(people=='2'){
//         $(".modal-title").html('Jianwen Su');
//         $(".modal-body").html(
//             '<p class="about" style="font-size:24px;font-weight:bold;">Title: Exploring Workflow Enactments through Querying Execution Logs</p>'+
//             '<p><h4>Abstract</h4></p> <p class="about">Combining big data with machine learning is a powerful tool for business intelligence. However, in enterprises across many sectors (business, government, healthcare, etc.), a great amount of information concerning their business and workflow does *not* exist in digital form. For example, the common term of "institutional memory" refers to senior people in an enterprise who are extremely knowledgeable about the history, rationals, and other possibly complicated details concerning the business operations. Quality of business analytics can be significantly enhanced by incorporating human knowledge into big data and machine learning. An initial idea is to support *explorations* of business data through, e.g., ad hoc queries.</p>' +
//             '<p class="about">In this talk, we focus on analysis of business workflow executions (enactments). The traditional ETL-data warehouse-OLAP approach tackles essentially a similar problem. However the types of data to be queried about and explored are limited to the data extracted by hard-coded ETL tools and stored into the data warehouse. Any changes (such as new data, new tasks, etc.) would demand at least modifications of ETL tools so that analysis remains accurate. In contrast to the traditional approach, we develop a new framework for business analytics based on workflow logs with support for ad hoc queries directly on logs. Using a simplified logical model for workflow logs, query languages can be developed to formulate query conditions on task executions as well as data manipulated by tasks.</p>'+
//             '<p class="about">We will also discuss further technical challenges towards enhancing big data and machine learning with human knowledge.</p>');
//     }else if(people=='3'){
//         $(".modal-title").html('Jian Yang');
//         $(".modal-body").html(
//             '<p class="about" style="font-size:24px;font-weight:bold;">Title: What Has Been Mostly Talked About Lately?</p>'+
//             '<p><h4>Abstract</h4></p> <p class="about">Social media is widely used for discussion and information dissemination on all kinds of topics, which has been witnessed by the past US president election.  As a result, both business and academics have researched methods to identify the topics being discussed on social media such as Twitter. However, deriving topics from this short text based and highly dynamic environment is a huge challenge.</p>' +
//             '<p class="about">In this talk, we look into an approach that considers both content and interactions with a temporal aspect in topic derivation. Interactions among tweets, i.e., mentions, retweets, replies, are important factors contributing to the quality of topic derivation on Twitter. If applied correctly, the incorporation of tweet interactions can significantly improve the quality of topic derivation in comparison with approaches that are mainly based on the content similarity analysis. However, how interactions can be measured and integrated with content similarity for topic derivation remains a challenge. Firstly the strength of tweet-to-tweet relationship is computed by simply adding measures for content similarity, mentions, and reply-retweets. This simple linear addition does not accurately reflect the various impacts these factors have on tweet relationships. In order to address this issue, we propose a joint probability model that can effectively integrate the effects of the content similarity, mentions, and reply-retweets to measure the tweet relationship for the purpose of topic derivation. The proposed method is based on matrix factorization techniques, which enables a flexible implementation on a distributed system in an incremental manner. Experimental results show that the proposed model results in a significant improvement in the quality of topic derivation over existing methods.</p>' +
//             '<p class="about">Those methods can be employed for a number of applications, including emergency management, advertisements, understanding customer concerns, and corporate/government communication.</p>');
//     }else if(people=='4'){
//         $(".modal-title").html('Yan Zhang');
//         $(".modal-body").html('<p>Abstract</p> <p class="about">Dr. Jian Yang is a full professor at Department of Computing, MacquarieUniversity. She received her PhD in Multidatabase Systems area from The Australian National University in 1995. Before she joined MacquarieUniversity, she worked as an associate professor at Tilburg University, Netherlands(2000-2003), a senior research scientist at the Division of Mathematical and Information Science, CSIRO, Australia(1998-2000), and as a lecturer (assistant professor) at Dept of Computer Science, The Australian Defense Force Academy, Universityof New South Wales(1993-1998).</p>' +
//             '<p class="about">He serves as an Associate Technical Editor of IEEE Communications Magazine, an Editor of IEEE Transactions on Green Communications and Networking, an Editor of IEEE Communications Surveys & Tutorials, an Editor of IEEE Internet of Things Journal, and an Associate Editor of IEEE Access.  He serves as chair positions in a number of conferences, including IEEE GLOBECOM 2017, IEEE VTC-Spring 2017, IEEE PIMRC 2016, IEEE CloudCom 2016, IEEE ICCC 2016, IEEE CCNC 2016, IEEE SmartGridComm 2015, and IEEE CloudCom 2015. He serves as TPC member for numerous international conferences including IEEE INFOCOM, IEEE ICC, IEEE GLOBECOM, and IEEE WCNC. His current research interests include: next-generation wireless networks leading to 5G, reliable and secure cyber-physical systems (e.g., smart grid, transport, and healthcare). He has sevenESI “Highly Cited Papers”. He is IEEE VTS (Vehicular Technology Society) Distinguished Lecturer. He is also a senior member of IEEE, IEEE ComSoc, IEEE PES, and IEEE VT society. He is a Fellow of IET.</p>' +
//             '<p class="h4">Talk: Internet of Vehicles: when Cloud and Learning meet Intelligent Transport Systems</p>'+
//             '<p class="about">The concept of “connected vehicles” is driving the evolution of traditional transport systems into the era of Internet of Vehicles (IoV). In this emerging paradigm, we may envision that the concepts of cloud computing and machine learning play a crucial role. This talk mainly includes three parts. In the first part, we introduce the key concepts and architectures in the IoV scenario. Then, we focus on several unprecedented challenges and potential solutions when we explore cloud computing and machine learning for intelligent transport systems.These challenges are related to new cloud computing and edge computing scenarios, optimal resource managementfor vehicular networks, and accurate forecasting of traffic and speed for new applications. </p>');
//     }else if(people=='5'){
//         $(".modal-title").html('Xiandong Meng');
//         $(".modal-body").html('<p class="about">Xiandong Meng is the senior software architect responsible for the IBM Cloud Manager with OpenStack product development. He has many years of product development & customer engagement experience in the datacenter and cloud management area. He joined IBM after he received the Master’s degree from department of Computer Science & Technology, Tsinghua University in 2004.</p>');
//     }else if(people=='6'){
//         $(".modal-title").html('Larry Liu');
//         $(".modal-body").html('<p class="about">Larry Liu is responsible for product development and delivery of Sponge big data offerings. Before co-founded Sponge, he served as product manager in Couchbase leading innovations in the areas of NoSQL database systems and mobile products. Previously, he was product manager in Hortonworks responsible for hadoop core innovation and hadoop for Microsoft and Teradata integration. Previously in his career, Larry has held technical and management positions at Yahoo and CollabNet, in addition to couple of start ups including MedEngage and iArchitects. Larry holds a MS in Computer Science from California State University.</p>');
//     }else if(people=='7'){
//         $(".modal-title").html('Liping Xu');
//         $(".modal-body").html('<p class="about">Liping Xu is a senior engineer of data mining in MIC, mainly engaged in database modeling, data analysis and data mining. She has rich work experience about the applications of big data in e-commerce field. She received the Master’s degree from Nanjing University of Technology in 2011, specialized in Computer Application Direction.</p>');
//     }

//     $('.auditPartner').modal('show');
// }

// function getCurrentPosition() {
//     var geolocation = new BMap.Geolocation();
//     geolocation.getCurrentPosition(function (r) {
//         if (this.getStatus() == BMAP_STATUS_SUCCESS) {
//             curPoint = r.point;
//             showMap();
//             showMap1();
//         } else {
//             //alert('failed'+this.getStatus());
//         }
//     }, {enableHighAccuracy: true});
// }

function hotel(num) {
    if (num == '1') {
        $(".modal-title").html('SHANGHAI XI TIANYOU HOTEL');
        $(".modal-body").html('<p class="about">Shanghai Xi Tianyou Hotel is located in Hongqiao’s Development Zone inside Donghua University campus, a 15-minute drive from Hongqiao Airport. Various dining and shopping options are available nearby. Rooms at Shanghai Xi Tianyou Hotel come with modern décor and large windows. Each room is fitted with a TV and wired internet. Shanghai Xi Tianyou Hotel is 4 km from the Shanghai Exhibition centre and 12 km from Shanghai Railway Station. </p>' +
            '<p class="about">This property is also rated for the best value in Shanghai! Guests are getting more for their money when compared to other properties in this city.</p>');
    } else if (num == '2') {
        $(".modal-title").html('JI HOTEL Shanghai Hongqiao Zhongshan West Road');
        $(".modal-body").html('<p class="about">JI Hotel Shanghai Hongqiao Zhongshan West Road is situated in Shanghai, 10 km from Hongqiao Airport and Hongqiao Railway Station. The non-smoking property features an on-site restaurant. Free WiFi throughout the property.</p>' +
            '<p class="about">Each room comes with a flat-screen TV with cable and satellite channels, ironing facilities and bottles of water. The attached bathroom has shower facilities and free toiletries. A hairdryer is available.</p>' +
            '<p class="about">There is a 24-hour front desk and shops at the property. Fax, printing and copying facilities are available at the business centre.</p>' +
            '<p class="about">JI Hongqiao Zhongshan West Road is 4 km from Shanghai Library and 5 km from Xintiandi. Lujiazui is about 12 km away.</p>' +
            '<p class="about">Changning is a great choice for travelers interested in nightlife, culturally diverse food and food.</p>');
    } else if (num == '3') {
        $(".modal-title").html('JI HOTEL Shanghai Hongqiao Zhongshan West Road');
        $(".modal-body").html('<p class="about">Located within the shopping district of Xu Jia Hui, Regal Shanghai East Asia Hotel features 24-hour room service and an indoor heated pool. It is within a 10-minute walk of Shanghai Stadium subway station.</p>' +
            '<p class="about">Regal Shanghai is a 5-minute walk from the tourism center, which provides buses to popular areas like Zhujiajiao and Zhou Zhuang. A 10-minute drive from Xintiandi and Hengshan Road, the hotel is a 45-minute drive from Pudong International Airport.</p>' +
            '<p class="about">Equipped with classic wood furnishings, elegant rooms at Regal Shanghai Hotel include satellite TV, safe and hairdryer. Tea/coffee making facilities and free bottled water are included.</p>' +
            '<p class="about">A well-equipped fitness room provides guests a place to have an energetic workout. A 24-hour spa offers massages and body treatments. Guests can also relax at the sauna or steam bath. The hotel also provides free parking.</p>' +
            '<p class="about">Traditional Cantonese dishes are served at The Peak Chinese Restaurant. Stadium Cafe serves a daily buffet or options from the menu of Asian and Western meals.' +
            '<p class="about">Xuhui is a great choice for travelers interested in culturally diverse food, food and restaurants. ');
    }
    $('.auditPartner').modal('show');
}

$(document).on("click", ".icon-fork", function () {
    $(".cbd-list").hide();
})
$(".bottom").click(function () {
    $(this).find("h3").addClass('looked');
    $(this).siblings().find("h3").removeClass('looked');
    var text = $(this).find("h3").text();
    if (text == 'Organizers') {
        $(".l_Organizers").show();
        $(".l_tpc").hide();
    } else {
        $(".l_Organizers").hide();
        $(".l_tpc").show();
    }
})
$(".bottoms").click(function () {
    $(this).find("h3").addClass('looked');
    $(this).siblings().find("h3").removeClass('looked');
    var text = $(this).find("h3").text();
    if (text == 'Keynotes') {
        $(".l_Keynotes").show();
        $(".l_Technical").hide();
    } else {
        $(".l_Keynotes").hide();
        $(".l_Technical").show();
    }
})

function down(num) {
    if (num == 1) {
        window.open = "E.pdf";
    } else if (num == 2) {
        window.open = "C.pdf";
    }
}