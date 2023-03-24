import React from 'react'
import InsightsIcon from '@mui/icons-material/Insights';
import UndoIcon from '@mui/icons-material/Undo';
import Avatar from '@mui/material/Avatar';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import RecommendSharpIcon from '@mui/icons-material/RecommendSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import KeyboardDoubleArrowUpSharpIcon from '@mui/icons-material/KeyboardDoubleArrowUpSharp';
import StoreIcon from '@mui/icons-material/Store';
import me from '../Stocks/vipul.jpg'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
function StockIndex() {
    return (
        <>
            <div className="stockHome">
                <div className="innerStack">
                    <nav>
                        <div className="left"><UndoIcon /></div>
                        <div className="right"><SettingsSuggestIcon />
                        </div>
                    </nav>

                    <div className="dailydata">
                        {/* <InsightsIcon sx={{ fontSize: 200 }} className='insightIcon' /> */}
                        {/* <div className="up">up</div>
                        <div className="down">down</div> */}
                        {/* <div>
                            <p>Today</p>
                            <p>Today</p>

                        </div> */}

                    </div>

                    <div className="buttons">
                        <button><i class="fas fa-credit-card"></i> BUY</button>
                        <button><i class="fab fa-sellsy"></i> SELL</button>
                        <button><i class="fas fa-info"></i> VIEW</button>

                    </div>
                    {/* <img src="./vipul.jpg" alt="" /> */}
                    <div className="yours">
                        <div className="yourData">
                            <p className='you'>Your Statistics </p>
                            <div className='data'>
                                <div className="left">
                                    {/* <p>Image</p> */}
                                    <img src={me} alt="V" />
                                    {/* <img src="D:\Full Stack Web Dev\React\myapp\public\Images\best netflix.jpg" alt="vipul" /> */}
                                    {/* <Avatar alt="Vipul Chauhan" src="../Stocks/vipul.jpg" sx={{ width: 56, height: 56 }} /> */}

                                </div>
                                <div className="right">
                                    <div>
                                        <p>Cash Balance <i class="fas fa-solid fa-dollar-sign"></i> <span className='cb'>72348</span></p>

                                        <p>Last Deposit <i class="fas fa-solid fa-dollar-sign"></i> <span>3422</span></p>
                                        <p>Shared Value <i class="fas fa-solid fa-dollar-sign"></i> <span>639</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="recents">
                            {/* <p>Recent</p> */}
                            <div className="recentData">
                                <div className="left">
                                    <div>
                                        <p><i class="far fa-building"></i> Reliance Infrastructure Ltd</p>
                                        <p className='g'> <i class="fas fa-solid fa-arrow-up"></i>+1.00 (0.79%)today</p>

                                    </div>
                                    <div>
                                        <p><i class="far fa-building"></i> Adani Enterprises Ltd</p>
                                        <p className='r'><i class="fas fa-solid fa-arrow-down"></i>  −128.10 (9.74%) today</p>

                                    </div>

                                </div>
                                <div className="right">

                                    <div>
                                        <p><i class="far fa-building"></i> GAIL (India) Limited</p>
                                        <p className='g'><i class="fas fa-solid fa-arrow-up"></i> +0.85 (0.82%)today</p>

                                    </div>
                                    <div>
                                        <p><i class="far fa-building"></i> Tata Steel Ltd</p>
                                        <p className='r'><i class="fas fa-solid fa-arrow-down"></i> −3.25 (2.96%)today</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer">
                            <HomeSharpIcon style={{ fill: '#0f53ba' }} sx={{ fontSize: 30 }} />
                            <RecommendSharpIcon style={{ fill: '#0f53ba' }} sx={{ fontSize: 30 }} />
                            <InsightsIcon style={{ fill: '#0f53ba' }} sx={{ fontSize: 30 }} />
                            <CurrencyRupeeIcon style={{ fill: '#0f53ba' }} sx={{ fontSize: 30 }} />
                            <PersonOutlineSharpIcon style={{ fill: '#0f53ba' }} sx={{ fontSize: 30 }} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default StockIndex
