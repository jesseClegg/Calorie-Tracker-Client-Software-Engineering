import React from 'react'
import CalorieCounter from "./Counter";


export default function Nutrition() {
    return (
        <html>
            <head>
                <script type="text/JavaScript" src="https://MomentJS.com/downloads/moment.js"></script>
                <script>
                    var AUTH_TOKEN = "adgSqm3kfUnmquPrZXVRvnG/eKvCCZwlBb0bqD/X5PFXAaEIV//q8u57i1re+QUOyz+ftNyfAkV9CJqBEXF4Vg==";
                </script>
                <link rel="stylesheet" media="screen" href="https://d34yn14tavczy0.cloudfront.net/assets/sass/application-4bba599230fb54490cfc454fa02938d543ba3e26ae2f451ea727b03975be00c0.css" />
                {/*<script>
                    var MFP = (function (parent) { (function (me) {
                    me.MFP_API_HOST = 'https://api.myfitnesspal.com/v2';
                    me.MFP_CLIENT_ID = 'mfp-main-js';
                    me.api_user_id = '168396813266349';
                    me.logged_in = true;

                    me.COUNTRY_CODE = 'US';

                    return me;
                    } ())};

                    return parent;
                    {'}'})(MFP || );
                </script>*/}
                <script src="https://d34yn14tavczy0.cloudfront.net/assets/moment-7c169710367e715cec0e7768bb92b9339f5a767a109041e9e9861a0abc0afa44.js"></script>
                <script src="https://d34yn14tavczy0.cloudfront.net/assets/application-12dd4db75ef485ff18486ee141131d53df203a6761f45b2640b8167dd2efc732.js"></script>
                <script src="https://d34yn14tavczy0.cloudfront.net/assets/food/diary/diary-d116b51d4ad0fe4babd15fadba8cd8e0cd7dea62a8992cae22182af550c73e0e.js"></script>

            </head>
            <body>
            <div>Nutrition page yo
                <div id="main">

                    <div class="diary">

                        <h1>Your Food Diary For:</h1>

                        <div id="date_controls">
                            <form class="date-controls-form" action="/food/diary" accept-charset="UTF-8" method="post">
                                <input name="utf8" type="hidden" value="&#x2713;" />
                                <input type="hidden" name="authenticity_token" value="Nts6QeqO3RS464IZaUCl8r+CboeND5XDXbsay5acfsTow+fegJDQle1nd8u2gQNWmHoUUgl+iYCXgSZHHjAp7Q==" />
                                <span class="date">
                                    <a class="prev" href="/food/diary?date=2022-11-09">
                                        <i class="icon-caret-left"></i>
                                    </a>
                                    TODAY;
                                    <script type='text/JavaScript'>
                                        var date = moment();
                                        var currentDate = date.format('D/MM/YYYY');
                                        moment().format('MMMM Do YYYY');
                                    </script>
                                    <a class="next" href="/food/diary?date=2022-11-11">
                                        <i class="icon-caret-right"></i>
                                    </a>
                                </span>
                                <input type="hidden" value="2022-11-10" name="hidden_date_selector" id="date_selector" />
                                <i class="icon-calendar" id="datepicker-trigger"></i>
                                {/*<script type="text/javascript">
                                    (function(){function change_diary_date(new_date) {
                                        var new_url = '/food/diary';
                                        new_url += (new_url.indexOf('?') === -1) ? '?' : '&';
                                        new_url += 'date=' + new_date;
                                        var location = new_url;
                                    }("#datepicker-trigger").click(function () {
                                        ("#date_selector").datepicker("show");
                                    })("#date_selector").datepicker({
                                        defaultDate: ("#date_selector").attr("value"),
                                        dateFormat: 'yy-mm-dd',
                                        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                                        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                        dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                                        //onSelect: change_diary_date
                                    })});
                                </script>*/}
                            </form>
                        </div>
                    </div>
                    <div class="food_container container">
                        <table class="table0 " id="diary-table">

                            <colgroup>
                                <col class="col-1" />
                                <col class="col-2" />
                                <col class="col-2" />
                                <col class="col-2" />
                                <col class="col-2" />
                                <col class="col-2" />
                                <col class="col-2" />
                                <col class="col-8" />
                            </colgroup>

                            <tbody>



                                <tr class="meal_header">

                                    <td class="first alt">Breakfast</td>
                                    <td class="alt nutrient-column">
                                        Calories
                                        <div class="subtitle">kcal</div>
                                    </td>
                                </tr>



                                <tr class="bottom">
                                    <CalorieCounter />


                                    <td>&nbsp;</td>


                                    <td>
                                        <span class="macro-value">&nbsp;</span>
                                        <span class="macro-percentage">
                                            &nbsp;
                                        </span>
                                    </td>


                                    <td>
                                        <span class="macro-value">&nbsp;</span>
                                        <span class="macro-percentage">
                                            &nbsp;
                                        </span>
                                    </td>


                                    <td>
                                        <span class="macro-value">&nbsp;</span>
                                        <span class="macro-percentage">
                                            &nbsp;
                                        </span>
                                    </td>


                                    <td>&nbsp;</td>


                                    <td>&nbsp;</td>


                                    <td></td>

                                </tr>



                                <tr class="meal_header">

                                    <td class="first alt">Lunch</td>
                                </tr>



                                <tr class="bottom">

                                    {/*<td class="first alt" style="z-index: 9">

                                        <a class="add_food" href="/food/add_to_diary?meal=1">Add Food</a>
                                        <div class="quick_tools">
                                            <a href="#quick_tools_1" class="toggle_diary_options">Quick Tools</a>
                                            <div id="quick_tools_1" class="quick_tools_options hidden">
                                                <ul>
                                                    <li class="with_border">
                                                        <a href="/food/quick_add?meal=1">
                                                            Quick add calories
                                                        </a>
                                                    </li>

                                                    <li class="with_border"><a href="/food/copy_meal?date=2022-11-10&amp;from_date=2022-11-09&amp;from_meal=1&amp;username=boggieswagm">Copy yesterday</a></li>

                                                    <li class="with_border"><a href="#recent_meals_1" class="toggle_diary_options">Copy from date</a></li>



                                                    <li><a href="#recent_meals_copy_to_1" class="toggle_diary_options">Copy to date</a></li>

                                                </ul>
                                            </div>
                                            <div id="recent_meals_1" class="recent_meal_options hidden">
                                                <ul id="recent_meal_options_1">
                                                    <li class="header">
                                                        Copy from which date?
                                                    </li>
                                                    <li><a href="/food/copy_meal?date=2022-11-10&amp;from_date=2022-11-09&amp;from_meal=1&amp;username=boggieswagm">Wednesday, November 9</a></li>
                                                    <li><a href="/food/copy_meal?date=2022-11-10&amp;from_date=2022-11-08&amp;from_meal=1&amp;username=boggieswagm">Tuesday, November 8</a></li>
                                                    <li><a href="/food/copy_meal?date=2022-11-10&amp;from_date=2022-11-07&amp;from_meal=1&amp;username=boggieswagm">Monday, November 7</a></li>
                                                    <li><a href="/food/copy_meal?date=2022-11-10&amp;from_date=2022-11-06&amp;from_meal=1&amp;username=boggieswagm">Sunday, November 6</a></li>
                                                    <li><a href="/food/copy_meal?date=2022-11-10&amp;from_date=2022-11-05&amp;from_meal=1&amp;username=boggieswagm">Saturday, November 5</a></li>
                                                    <li><a href="/food/copy_meal?date=2022-11-10&amp;from_date=2022-11-04&amp;from_meal=1&amp;username=boggieswagm">Friday, November 4</a></li>
                                                    <li><a href="/food/copy_meal?date=2022-11-10&amp;from_date=2022-11-03&amp;from_meal=1&amp;username=boggieswagm">Thursday, November 3</a></li>
                                                </ul>
                                            </div>

                                            <div id="recent_meals_copy_to_1" class="recent_meal_options hidden">
                                                <ul id="recent_meal_options_copy_to_1">
                                                    <li class="header">Copy to which date?</li>
                                                    <li>
                                                        <a href="#meals_copy_to_1" class="toggle_diary_options copy_to_which_date" data-meal="1" data-to-date="2022-11-13">
                                                            Sunday, November 13
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#meals_copy_to_1" class="toggle_diary_options copy_to_which_date" data-meal="1" data-to-date="2022-11-12">
                                                            Saturday, November 12
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#meals_copy_to_1" class="toggle_diary_options copy_to_which_date" data-meal="1" data-to-date="2022-11-11">
                                                            Tomorrow
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#meals_copy_to_1" class="toggle_diary_options copy_to_which_date" data-meal="1" data-to-date="2022-11-10">
                                                            Today
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#meals_copy_to_1" class="toggle_diary_options copy_to_which_date" data-meal="1" data-to-date="2022-11-09">
                                                            Yesterday
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#meals_copy_to_1" class="toggle_diary_options copy_to_which_date" data-meal="1" data-to-date="2022-11-08">
                                                            Tuesday, November 8
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#meals_copy_to_1" class="toggle_diary_options copy_to_which_date" data-meal="1" data-to-date="2022-11-07">
                                                            Monday, November 7
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div id="meals_copy_to_1" class="quick_add_meals_list hidden">
                                                <ul id="meals_copy_options_copy_to_1">
                                                    <li class="header">Copy to which meal?</li>
                                                    <li><a href="/food/copy_meal?from_date=2022-11-10&amp;from_meal=1&amp;to_meal=0&amp;username=boggieswagm">Breakfast</a></li>
                                                    <li><a href="/food/copy_meal?from_date=2022-11-10&amp;from_meal=1&amp;to_meal=1&amp;username=boggieswagm">Lunch</a></li>
                                                    <li><a href="/food/copy_meal?from_date=2022-11-10&amp;from_meal=1&amp;to_meal=2&amp;username=boggieswagm">Dinner</a></li>
                                                    <li><a href="/food/copy_meal?from_date=2022-11-10&amp;from_meal=1&amp;to_meal=3&amp;username=boggieswagm">Snacks</a></li>
                                                </ul>
                                            </div>

                                        </div>

                            </td>*/}



                                    <td>&nbsp;</td>


                                    <td>
                                        <span class="macro-value">&nbsp;</span>
                                        <span class="macro-percentage">
                                            &nbsp;
                                        </span>
                                    </td>


                                    <td>
                                        <span class="macro-value">&nbsp;</span>
                                        <span class="macro-percentage">
                                            &nbsp;
                                        </span>
                                    </td>


                                    <td>
                                        <span class="macro-value">&nbsp;</span>
                                        <span class="macro-percentage">
                                            &nbsp;
                                        </span>
                                    </td>


                                    <td>&nbsp;</td>


                                    <td>&nbsp;</td>


                                    <td></td>

                                </tr>



                                <tr class="meal_header">

                                    <td class="first alt">Dinner</td>
                                </tr>



                                <tr class="bottom">

                                    {/*<td class="first alt" style="z-index: 8">

                                        <a class="add_food" href="/food/add_to_diary?meal=2">Add Food</a>
                                        <div class="quick_tools">
                                            <a href="#quick_tools_2" class="toggle_diary_options">Quick Tools</a>
                                            <div id="quick_tools_2" class="quick_tools_options hidden">
                                                <ul>
                                                    <li class="with_border">
                                                        <a href="/food/quick_add?meal=2">
                                                            Quick add calories
                                                        </a>
                                                    </li>

                                                    <li class="with_border"><a href="/food/copy_meal?date=2022-11-10&amp;from_date=2022-11-09&amp;from_meal=2&amp;username=boggieswagm">Copy yesterday</a></li>

                                                    <li class="with_border"><a href="#recent_meals_2" class="toggle_diary_options">Copy from date</a></li>



                                                    <li><a href="#recent_meals_copy_to_2" class="toggle_diary_options">Copy to date</a></li>

                                                </ul>
                                            </div>
                                            <div id="recent_meals_2" class="recent_meal_options hidden">
                                                <ul id="recent_meal_options_2">
                                                    <li class="header">
                                                        Copy from which date?
                                                    </li>
                                                    <li><a href="/food/copy_meal?date=2022-11-10&amp;from_date=2022-11-09&amp;from_meal=2&amp;username=boggieswagm">Wednesday, November 9</a></li>
                                                    <li><a href="/food/copy_meal?date=2022-11-10&amp;from_date=2022-11-08&amp;from_meal=2&amp;username=boggieswagm">Tuesday, November 8</a></li>
                                                    <li><a href="/food/copy_meal?date=2022-11-10&amp;from_date=2022-11-07&amp;from_meal=2&amp;username=boggieswagm">Monday, November 7</a></li>
                                                    <li><a href="/food/copy_meal?date=2022-11-10&amp;from_date=2022-11-06&amp;from_meal=2&amp;username=boggieswagm">Sunday, November 6</a></li>
                                                    <li><a href="/food/copy_meal?date=2022-11-10&amp;from_date=2022-11-05&amp;from_meal=2&amp;username=boggieswagm">Saturday, November 5</a></li>
                                                    <li><a href="/food/copy_meal?date=2022-11-10&amp;from_date=2022-11-04&amp;from_meal=2&amp;username=boggieswagm">Friday, November 4</a></li>
                                                    <li><a href="/food/copy_meal?date=2022-11-10&amp;from_date=2022-11-03&amp;from_meal=2&amp;username=boggieswagm">Thursday, November 3</a></li>
                                                </ul>
                                            </div>

                                            <div id="recent_meals_copy_to_2" class="recent_meal_options hidden">
                                                <ul id="recent_meal_options_copy_to_2">
                                                    <li class="header">Copy to which date?</li>
                                                    <li>
                                                        <a href="#meals_copy_to_2" class="toggle_diary_options copy_to_which_date" data-meal="2" data-to-date="2022-11-13">
                                                            Sunday, November 13
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#meals_copy_to_2" class="toggle_diary_options copy_to_which_date" data-meal="2" data-to-date="2022-11-12">
                                                            Saturday, November 12
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#meals_copy_to_2" class="toggle_diary_options copy_to_which_date" data-meal="2" data-to-date="2022-11-11">
                                                            Tomorrow
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#meals_copy_to_2" class="toggle_diary_options copy_to_which_date" data-meal="2" data-to-date="2022-11-10">
                                                            Today
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#meals_copy_to_2" class="toggle_diary_options copy_to_which_date" data-meal="2" data-to-date="2022-11-09">
                                                            Yesterday
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#meals_copy_to_2" class="toggle_diary_options copy_to_which_date" data-meal="2" data-to-date="2022-11-08">
                                                            Tuesday, November 8
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#meals_copy_to_2" class="toggle_diary_options copy_to_which_date" data-meal="2" data-to-date="2022-11-07">
                                                            Monday, November 7
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div id="meals_copy_to_2" class="quick_add_meals_list hidden">
                                                <ul id="meals_copy_options_copy_to_2">
                                                    <li class="header">Copy to which meal?</li>
                                                    <li><a href="/food/copy_meal?from_date=2022-11-10&amp;from_meal=2&amp;to_meal=0&amp;username=boggieswagm">Breakfast</a></li>
                                                    <li><a href="/food/copy_meal?from_date=2022-11-10&amp;from_meal=2&amp;to_meal=1&amp;username=boggieswagm">Lunch</a></li>
                                                    <li><a href="/food/copy_meal?from_date=2022-11-10&amp;from_meal=2&amp;to_meal=2&amp;username=boggieswagm">Dinner</a></li>
                                                    <li><a href="/food/copy_meal?from_date=2022-11-10&amp;from_meal=2&amp;to_meal=3&amp;username=boggieswagm">Snacks</a></li>
                                                </ul>
                                            </div>

                                        </div>

                        </td>*/}



                                    <td>&nbsp;</td>


                                    <td>
                                        <span class="macro-value">&nbsp;</span>
                                        <span class="macro-percentage">
                                            &nbsp;
                                        </span>
                                    </td>


                                    <td>
                                        <span class="macro-value">&nbsp;</span>
                                        <span class="macro-percentage">
                                            &nbsp;
                                        </span>
                                    </td>


                                    <td>
                                        <span class="macro-value">&nbsp;</span>
                                        <span class="macro-percentage">
                                            &nbsp;
                                        </span>
                                    </td>


                                    <td>&nbsp;</td>


                                    <td>&nbsp;</td>


                                    <td></td>

                                </tr>



                                <tr class="meal_header">

                                    <td class="first alt">Snacks</td>
                                </tr>



                                <tr class="bottom">

                                    {/*<td class="first alt" style="z-index: 7">

                                        <a class="add_food" href="/food/add_to_diary?meal=3">Add Food</a>
                                        <div class="quick_tools">
                                            <a href="#quick_tools_3" class="toggle_diary_options">Quick Tools</a>
                                            <div id="quick_tools_3" class="quick_tools_options hidden">
                                                <ul>
                                                    <li class="with_border">
                                                        <a href="/food/quick_add?meal=3">
                                                            Quick add calories
                                                        </a>
                                                    </li>

                                                    <li class="with_border"><a href="/food/copy_meal?date=2022-11-10&amp;from_date=2022-11-09&amp;from_meal=3&amp;username=boggieswagm">Copy yesterday</a></li>

                                                    <li class="with_border"><a href="#recent_meals_3" class="toggle_diary_options">Copy from date</a></li>



                                                    <li><a href="#recent_meals_copy_to_3" class="toggle_diary_options">Copy to date</a></li>

                                                </ul>
                                            </div>
                                            <div id="recent_meals_3" class="recent_meal_options hidden">
                                                <ul id="recent_meal_options_3">
                                                    <li class="header">
                                                        Copy from which date?
                                                    </li>
                                                    <li><a href="/food/copy_meal?date=2022-11-10&amp;from_date=2022-11-09&amp;from_meal=3&amp;username=boggieswagm">Wednesday, November 9</a></li>
                                                    <li><a href="/food/copy_meal?date=2022-11-10&amp;from_date=2022-11-08&amp;from_meal=3&amp;username=boggieswagm">Tuesday, November 8</a></li>
                                                    <li><a href="/food/copy_meal?date=2022-11-10&amp;from_date=2022-11-07&amp;from_meal=3&amp;username=boggieswagm">Monday, November 7</a></li>
                                                    <li><a href="/food/copy_meal?date=2022-11-10&amp;from_date=2022-11-06&amp;from_meal=3&amp;username=boggieswagm">Sunday, November 6</a></li>
                                                    <li><a href="/food/copy_meal?date=2022-11-10&amp;from_date=2022-11-05&amp;from_meal=3&amp;username=boggieswagm">Saturday, November 5</a></li>
                                                    <li><a href="/food/copy_meal?date=2022-11-10&amp;from_date=2022-11-04&amp;from_meal=3&amp;username=boggieswagm">Friday, November 4</a></li>
                                                    <li><a href="/food/copy_meal?date=2022-11-10&amp;from_date=2022-11-03&amp;from_meal=3&amp;username=boggieswagm">Thursday, November 3</a></li>
                                                </ul>
                                            </div>

                                            <div id="recent_meals_copy_to_3" class="recent_meal_options hidden">
                                                <ul id="recent_meal_options_copy_to_3">
                                                    <li class="header">Copy to which date?</li>
                                                    <li>
                                                        <a href="#meals_copy_to_3" class="toggle_diary_options copy_to_which_date" data-meal="3" data-to-date="2022-11-13">
                                                            Sunday, November 13
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#meals_copy_to_3" class="toggle_diary_options copy_to_which_date" data-meal="3" data-to-date="2022-11-12">
                                                            Saturday, November 12
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#meals_copy_to_3" class="toggle_diary_options copy_to_which_date" data-meal="3" data-to-date="2022-11-11">
                                                            Tomorrow
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#meals_copy_to_3" class="toggle_diary_options copy_to_which_date" data-meal="3" data-to-date="2022-11-10">
                                                            Today
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#meals_copy_to_3" class="toggle_diary_options copy_to_which_date" data-meal="3" data-to-date="2022-11-09">
                                                            Yesterday
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#meals_copy_to_3" class="toggle_diary_options copy_to_which_date" data-meal="3" data-to-date="2022-11-08">
                                                            Tuesday, November 8
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#meals_copy_to_3" class="toggle_diary_options copy_to_which_date" data-meal="3" data-to-date="2022-11-07">
                                                            Monday, November 7
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div id="meals_copy_to_3" class="quick_add_meals_list hidden">
                                                <ul id="meals_copy_options_copy_to_3">
                                                    <li class="header">Copy to which meal?</li>
                                                    <li><a href="/food/copy_meal?from_date=2022-11-10&amp;from_meal=3&amp;to_meal=0&amp;username=boggieswagm">Breakfast</a></li>
                                                    <li><a href="/food/copy_meal?from_date=2022-11-10&amp;from_meal=3&amp;to_meal=1&amp;username=boggieswagm">Lunch</a></li>
                                                    <li><a href="/food/copy_meal?from_date=2022-11-10&amp;from_meal=3&amp;to_meal=2&amp;username=boggieswagm">Dinner</a></li>
                                                    <li><a href="/food/copy_meal?from_date=2022-11-10&amp;from_meal=3&amp;to_meal=3&amp;username=boggieswagm">Snacks</a></li>
                                                </ul>
                                            </div>

                                        </div>

                    </td>*/}



                                    <td>&nbsp;</td>


                                    <td>
                                        <span class="macro-value">&nbsp;</span>
                                        <span class="macro-percentage">
                                            &nbsp;
                                        </span>
                                    </td>


                                    <td>
                                        <span class="macro-value">&nbsp;</span>
                                        <span class="macro-percentage">
                                            &nbsp;
                                        </span>
                                    </td>


                                    <td>
                                        <span class="macro-value">&nbsp;</span>
                                        <span class="macro-percentage">
                                            &nbsp;
                                        </span>
                                    </td>


                                    <td>&nbsp;</td>


                                    <td>&nbsp;</td>


                                </tr>




                                <tr class="total">

                                    <td class="first">Totals</td>

                                    <td>0</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="block water-notes-v2">
                            <div class="water-info">
                                <h3>Water Consumption</h3>

                                <h4>Today&#39;s Water Total</h4>


                                <p>Aim to drink at least 8 cups of water today. You can quick add common sizes or enter a custom amount.
                                    <a href="/account/configure_units">Change Units</a></p>
                                <h4>Quick Add</h4>

                                <ul class="quick-add-options"></ul>

                                <h4>Add Custom</h4>

                                <p>
                                    <input type="text" class="add-custom-amount" maxlength="5" />
                                    <span class="water-unit">
                                        cups
                                    </span>
                                    <input type="button" class="button btn btn-primary add-custom-btn" value="Add" />
                                </p>

                            </div>

                            <div class="water-glass-container">
                                <div class="current-value">
                                    <div class="water-static">
                                        <span class="water-value-static"></span>
                                        <span class="water-unit"></span> <span class="edit-daily-value-icon"></span>
                                    </div>
                                    <div class="edit-water">
                                        <input type="text" class="water-value-input" maxlength="5" />
                                        <input type="button" class="button btn btn-primary save-daily-value-btn" value="Save" />
                                    </div>
                                </div>
                                <div class="water-glass"></div>
                            </div>



                            <div class="note-container">
                                <div class="notes-v2">

                                    <div class="header">
                                        <h4 class="secondary-title">
                                            Today&#39;s Food Notes
                                        </h4>

                                        {/* <span class="edit-save">
                                            <span class="edit">Edit Note</span>
                                            <span class="save" style="display:none">Save Note</span>

                                            <a href="#" onclick="$('#note').hide(); $('#editable_note').show(); $('#note_body').focus(); return false;">

                                            </a>
                                            </span>*/}
                                    </div>

                                    <div class="body">
                                        <div class="note-static">
                                            <p class="note"></p>
                                        </div>

                                        <textarea name="note-input" id="note-input">
                                        </textarea>
                                    </div>
                                </div>


                            </div>

                            <script src="https://d34yn14tavczy0.cloudfront.net/assets/food/diary/diary-d116b51d4ad0fe4babd15fadba8cd8e0cd7dea62a8992cae22182af550c73e0e.js"></script>

                        </div>
                    </div>
                </div>
            </div>
            </body>
        </html>
    )
}