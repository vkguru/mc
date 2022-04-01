import Head from "next/head";
import Link from 'next/link';

export default function NavBar() {
  return (
    <>
      <Head>
        <title>Dashboard | MetaCare</title>
      </Head>
      <nav>
        <div className='nav-top'>
          <div className="_inner container">
            <div className='search-group'>
              <input type="search" placeholder='Ask us a question' className='searchbar-top' />
              <img src="/img/icon-search.png" alt="search" />
            </div>

            <div className="nav-notify">
              <div className="nav-notify_icon">
                <img src="/img/ic_Notification.png" alt="" />
                <span className="badge">3</span>
              </div>

              <div className="nav-profile">
                <img src="/img/profile-img.png" alt="profile" className="profile-img" />
                <img src="/img/down-arrow.png" className="down-arrow" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className='nav-center'>
          <ul className="container">
            <li> {/*Would have made this dynamic but had to hard code it to since it just a page */}
              <Link href="#">
                <a className="active">
                  Efficiency
                </a>
              </Link>
            </li>

            <li>
              <Link href="#">
                <a>
                  Volume
                </a>
              </Link>
            </li>

            <li>
              <Link href="#">
                <a>
                  Customer Satisfaction
                </a>
              </Link>
            </li>

            <li>
              <Link href="#">
                <a>
                  Backlog
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className='nav-bottom container'>
          <h2>Efficiency Analytics</h2>

          <div className="_form">
            <div className="form-group">
              <input type="search" placeholder="Search" />
              <img src="/img/icon_search.png" alt="" />
            </div>

            <div className="select">
              Filter Options
              <img src="/img/filter.png" alt="" />
            </div>

            <hr />

            <button className="export">Export</button>
          </div>

        </div>
      </nav>

      {/* jsx style */}
      <style jsx>
        {`
          nav {
            position: fixed;
            top: 0;
            background: #fff;
            width: calc(100% - 262px);
          }

          .nav-top {
            padding: 10px 0;
            border-bottom: 1px solid var(--meta-border);
          }

          .nav-top ._inner {
            display: flex;
            justify-content: space-between;
          }

          .search-group {
            position: relative;
            width: 440px;
          }

          .search-group img {
            position: absolute;
            right: 30px;
            top: 18px;
          }

          .searchbar-top {
            width: 100%;
            height: 100%;
            padding: 15px;
            background-color:#FAFAFC;
            border: 0;
            border-radius: 10px;
          }

          .searchbar-top::placeholder {
            color: #A3A3C2;
          }

          .nav-notify {
            display: flex;
            align-items: baseline;
            border: 1px solid var(--meta-border);
            border-radius: 8px;
            width: 155px;
            padding: 15px;
          }

          .nav-notify_icon {
            display: flex;
            align-items: flex-end;
            width: 50%;
            border-right: 1px solid var(--meta-border);
          }

          .nav-notify_icon img {
            margin-right: 5px;
            cursor: pointer;
          }

          .badge {
            background-color: #F25A68;
            color: #fff;
            font-size: 12px;
            padding: 1px 5px;
            border-radius: 4px;
          }

          .nav-profile {
            position: relative;
            padding-left: 20px;
          }

          .nav-profile .profile-img {
            width: 20px;
            height: 20px;
          }

          .nav-profile .down-arrow {
            position: absolute;
            top: 10px;
            padding-left: 10px;
          }

          .nav-center {
            border-bottom: 1px solid var(--meta-border);
          }

          .nav-center ul {
            display: flex;
            align-items: flex-end;
            padding-top: 30px;
          }

          .nav-center ul li {
            padding-right: 20px;
          }

          .nav-center ul li a {
            color: var(--meta-grey);
          }

          .nav-center ul li a::after {
            content: '';
            display: block;
            background: var(--meta-purple);
            height: 0;
            margin-top: 10px;
          }

          .nav-center ul li a.active {
            color: var(--meta-black);
          }

          .nav-center ul li a.active::after {
            height: 2px;
          }

          .nav-bottom {
            display: flex;
            justify-content: space-between;
            padding-top: 30px;
            padding-bottom: 30px;
          }

          .nav-bottom h2 {
            font-family: "Gelion Semi Bold";
            color: var(--meta-black);
          }

          ._form {
            display: flex;
            justify-content: space-between;
            max-width: 550px;
            width: 100%;
          }

          .form-group {
            position: relative;
          }

          .form-group input {
            border: 1px solid #E1E1EB;
            border-radius: 8px;
            padding: 15px;
            width: 250px;
            text-indent: 30px;
          }

          .form-group input::placeholder {
            color: #A3A3C2;
          }

          .form-group img {
            position: absolute;
            top: 15px;
            left: 15px;
          }

          .select {
            padding: 12px;
            border: 1px solid #E1E1EB;
            border-radius: 8px;
            color: var(--meta-black);
            font-weight: 600;
            cursor: pointer;
          }

          .select img {
            padding-left: 10px;
          }

          ._form hr {
            height: 70%;
            width: 1px;
            background: var(--meta-border);
            margin-top: 8px;
          }

          .export {
            padding: 10px 30px;
            background: #25BB87;
            border: 0;
            border-radius: 8px;
            color: #fff;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
          }

        `}
      </style>
    </>
  )
}