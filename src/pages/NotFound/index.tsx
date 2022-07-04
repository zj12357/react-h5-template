import { Button, Result } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import './index.scoped.scss';

interface Props {}

const NotFound: FC<Props> = () => (
    <Result
        status="404"
        title="404"
        subTitle="页面没有找到"
        extra={
            <Link to="/">
                <Button type="primary" icon={<LeftOutlined />}>
                    返回首页
                </Button>
            </Link>
        }
    />
);

export default NotFound;
