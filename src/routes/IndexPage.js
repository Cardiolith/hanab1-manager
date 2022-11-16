import React, { Fragment, useState } from 'react';
import { connect } from 'dva';
import { Layout, Menu } from 'antd';
import { NavLink, routerRedux } from 'dva/router';
import {  MenuFoldOutlined, MenuUnfoldOutlined, GithubOutlined } from '@ant-design/icons';
import './IndexPage.less';
import Header from '../layout/header';
import Navigation from '../components/breadcrumb';

const { SubMenu } = Menu;

const generateMenus = (data) => {
  return data.map(item => {
    if (item.children) {
      return <SubMenu key={item.key}
        title={<Fragment>{item.icon}<span>{item.name}</span></Fragment>}>
      </SubMenu>
    }
    return (
      <Menu.Item key={item.key}>
        <NavLink to={item.key || "#"}>
          {item.icon}<span>{item.name}</span>
        </NavLink>
      </Menu.Item>
    )
  })
}

function IndexPage({ app, children }) {

  const [siderCollapsed, setSiderCollapsed] = useState(true);

  console.log()
  return (
    <Layout className='container'>
      <Layout.Sider
        collapsed={siderCollapsed}
        trigger={null}
        collapsible></Layout.Sider>

      <Layout.Sider
        className='fixed-sider'
        theme='light'
        collapsed={siderCollapsed}
        trigger={null}
        collapsible>
        <div className='menuContainer'>
          <Menu
            selectedKeys={[app.locationPathname]}>
            {
              generateMenus(app.menu)
            }
          </Menu>
        </div>
        <div className='switchCollapsed'>
          {siderCollapsed ? <MenuUnfoldOutlined onClick={() => setSiderCollapsed(!siderCollapsed)} /> : <MenuFoldOutlined onClick={() => setSiderCollapsed(!siderCollapsed)} />}
        </div>
      </Layout.Sider>
      <div className='ant-layout mainContainer'>
        <Header fake />
        <Header />
        <Layout.Content className='content'>
          <Navigation />
          <div className='contentInner'>
            {children}
          </div>
        </Layout.Content>
        <Layout.Footer className='footer'>
          <div className='footer-links'>
            <a href='' target="_blank">Hanab1</a>
            <a href='' target="_blank"><GithubOutlined /></a>
          </div>
          <div className='footer-icons'>
          </div>
        </Layout.Footer>
      </div>
    </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect((({ app }) => ({
  app
})))(IndexPage);
