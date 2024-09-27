<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <title>View POST Data</title>
</head>
<body>
    <h2>Received POST Data</h2>

    <%
        // POST로 넘어온 모든 파라미터 이름을 Enumeration으로 가져옵니다.
        java.util.Enumeration<String> parameterNames = request.getParameterNames();
out.println(parameterNames);
        // 파라미터가 있는지 확인합니다.
        if (!parameterNames.hasMoreElements()) {
    %>
            <p>No POST data received.</p>
    <%
        } else {
            // 파라미터가 있을 경우, 하나씩 출력합니다.
            while (parameterNames.hasMoreElements()) {
                String paramName = parameterNames.nextElement();
                String paramValue = request.getParameter(paramName);
    %>
                <p><strong><%= paramName %>:</strong> <%= paramValue %></p>
    <%
            }
        }
    %>
</body>
</html>
