import { Result, Button } from "antd";
import Link from "next/link";

export const NotFound = (): JSX.Element => {
  return (
    <Result
      status="404"
      title="404 - Page Not Found"
      subTitle="Sorry, the page you are looking for might not exist."
      extra={
        <Link href="/introduction/login">
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  );
};
