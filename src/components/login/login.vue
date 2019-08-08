<template>
    <div class="loginbox">
        <h2>用戶登錄</h2>
        <!--
            el-form---表單標籤
            :model---添加屬性
            status-icon---狀態圖片（必填項紅色星號）
            :rules---添加驗證規則
            ref---操作DOM
            label-width---文本寬度（單個表單元素前面的標題）
            el-form-item---表單中的表單元素
            label--單個表單標題
            prop--添加驗證規則
            autocomplete---自動補全
            label-position="top"---表單標題在表單頂部
         -->
        <el-form label-position="top" :rules="rules" :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用戶名" prop="username">
            <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <!-- 這個點擊事件是為了點登錄時的輸入驗證，參數ruleForm是form標籤的ref屬性值 -->
            <el-button class="mybtn" type="primary" @click="login('ruleForm')">登錄</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      // 用戶對象
      ruleForm: {
        username: '',
        password: ''
      },
      // 驗證規則
      rules: {
        username: [
          // required: true---輸入不能為空
          // message---驗證錯誤時提示的信息
          // trigger: 'blur'---操作驗證的時間是失去焦點時
          { required: true, message: '請輸入用戶名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '請輸入密碼', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login (formName) {
      // validate用來驗證form中的所有元素是否符合表單的驗證規則
      // 參數valid是驗證結果的布爾值
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$http.post('/login', this.ruleForm)
            .then(res => {
              console.log(res.data)
              let { data, meta } = res.data
              if (meta.status === 200) {
                console.log(data)
                // 登錄成功提示信息
                this.$message({
                  message: meta.msg,
                  type: 'success'
                })
                // 跳轉到首頁
                this.$router.push('/home')
              } else {
                this.$message.error(meta.msg)
              }
            })
        } else {
          this.$message.error('驗證失敗')
        }
      })
    }
  }
}
</script>

<style scoped>
    .loginbox {
        width: 560px;
        margin: 60px auto;
        padding: 20px;
        border-radius: 10px;
        background-color: #fff;
    }
    .loginbox .mybtn {
        width: 100%;
    }
</style>
