import SnapShot from "./SnapShot";
import renderer from "react-test-renderer";

test("renders correctly",()=>{
    const tree=renderer.create(<SnapShot/>).toJSON();
    expect(tree).toMatchSnapshot()
})