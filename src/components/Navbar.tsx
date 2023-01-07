import { Layout } from "antd";
import Menu from "antd/es/menu";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteNames } from "../routes";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";

const Navbar: FC = () => {
    const router = useNavigate();
    const { isAuth, user } = useTypedSelector((state) => state.auth);
    const {logout} = useActions()

    return (
        <Layout.Header>
            {!isAuth ? (
                <Menu theme="dark" mode="horizontal" selectable={false}>
                    <Menu.Item key={1} onClick={() => console.log("Логин")}>
                        Логин
                    </Menu.Item>
                </Menu>
            ) : (
                <>
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                    <div style={{ color: "white" }}>{user.username}</div>
                        <Menu.Item key={2} onClick={logout}>
                            Выйти
                        </Menu.Item>
                    </Menu>
                </>
            )}
        </Layout.Header>
    );
};

export default Navbar;
