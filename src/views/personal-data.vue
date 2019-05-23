<template>
<!-- 个人信息设置页面 -->
  <div class="container">
    <div class="form-redact">
      <details-header :tit="tit"></details-header>
      <mu-form ref="form" :model="validateForm" class="mu-demo-form">
        <mu-form-item label="用户名" label-position="left" prop="username" :rules="usernameRules">
          <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
        </mu-form-item>
        <mu-form-item
          label="密码"
          label-position="left"
          help-text="数字字母符号组成"
          prop="password"
          :rules="passwordRules"
        >
          <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="isAgree" :rules="argeeRules">
          <mu-checkbox label="同意用户协议" v-model="validateForm.isAgree"></mu-checkbox>
        </mu-form-item>
        <mu-form-item label="Email" prop="mailbox" label-position="left">
          <mu-text-field v-model="validateForm.mailbox" prop="mailbox"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="城市" help-text="请用中文填写" prop="city" label-position="left">
          <mu-text-field v-model="validateForm.city" prop="city"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="公司" help-text="自由职业可不填" prop="company" label-position="left">
          <mu-text-field v-model="validateForm.company" prop="company"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="Github" help-text="Github用户名" prop="Github" label-position="left">
          <mu-text-field v-model="validateForm.Github" prop="Github"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="微博" help-text="微博用户名" prop="microblog" label-position="left">
          <mu-text-field v-model="validateForm.microblog" prop="microblog"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="个人主页" help-text="链接" prop="personalHomepage" label-position="left">
          <mu-text-field v-model="validateForm.personalHomepage" prop="personalHomepage"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="签名" prop="signature" label-position="left">
          <mu-text-field v-model="validateForm.signature" prop="signature"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="个人介绍" prop="selfIntrodution" label-position="left">
          <mu-text-field v-model="validateForm.selfIntrodution" prop="selfIntrodution"></mu-text-field>
        </mu-form-item>
        <mu-form-item>
          <mu-button color="primary" @click="submit">提交</mu-button>
          <mu-button @click="clear">重置</mu-button>
        </mu-form-item>
      </mu-form>
    </div>
  </div>
</template>
<script>
import DetailsHeader from "@/components/details-header";

export default {
  name: "PersonalData",
  components: {
    DetailsHeader
  },
  data() {
    return {
      tit: "编辑",
      usernameRules: [
        { validate: val => !!val, message: "必须填写用户名" },
        { validate: val => val.length >= 3, message: "用户名长度大于3" }
      ],
      passwordRules: [
        { validate: val => !!val, message: "必须填写密码" },
        {
          validate: val => val.length >= 3 && val.length <= 10,
          message: "密码长度大于3小于10"
        }
      ],
      argeeRules: [{ validate: val => !!val, message: "必须同意用户协议" }],
      validateForm: {
        username: "",
        password: "",
        mailbox: "",
        city: "",
        company: "",
        Github: "",
        microblog: "",
        personalHomepage: "",
        signature: "",
        selfIntrodution: "",

        isAgree: false
      }
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate().then(result => {
        console.log("form valid: ", result);
      });
    },
    clear() {
      this.$refs.form.clear();
      this.validateForm = {
        username: "",
        password: "",
        isAgree: false
      };
    }
  }
};
</script>
<style  lang='scss' scoped>
%row {
  display: flex;
  flex-direction: row;
  align-items: center;
}
%col {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(161, 159, 159);
}
.container {
  width: 100%;
  height: 100%;
  background: #f2f2f2;
  @extend %col;
  .form-redact {
    padding: 0 20px;
    background: #fff;
    width: 60%;
  }
}
</style>
