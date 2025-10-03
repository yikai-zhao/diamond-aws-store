from graphviz import Digraph

dot = Digraph("DiamondAWSStore", filename="docs/architecture", format="png")
dot.attr(rankdir="LR", size="8,5")

# 用户层
dot.node("User", "User\n(Web/Mobile)", shape="oval", style="filled", color="lightblue")

# 前端
dot.node("Frontend", "Next.js\n(Frontend)", shape="box", style="filled", color="lightyellow")

# 后端
dot.node("Backend", "Node.js API\n(Express/REST)", shape="box", style="filled", color="lightgreen")

# 数据库
dot.node("DB", "AWS RDS\n(MySQL Master)", shape="cylinder", style="filled", color="lightpink")
dot.node("ReadReplica", "RDS Read Replica", shape="cylinder", style="filled", color="lightgrey")

# 部署
dot.node("Docker", "Docker Container", shape="box3d", style="filled", color="orange")
dot.node("EC2", "AWS EC2\n(Deployment Host)", shape="component", style="filled", color="gold")

# CI/CD
dot.node("GitHub", "GitHub Actions\nCI/CD Pipeline", shape="folder", style="filled", color="lightcoral")

# 监控
dot.node("CloudWatch", "AWS CloudWatch\nMonitoring & Logs", shape="note", style="filled", color="lightcyan")

# 连接关系
dot.edges([("User", "Frontend"), ("Frontend", "Backend")])
dot.edge("Backend", "DB", label="Write/Read")
dot.edge("Backend", "ReadReplica", label="Read-only")

dot.edge("Backend", "Docker")
dot.edge("Docker", "EC2")

dot.edge("GitHub", "Docker", label="Build & Push")
dot.edge("GitHub", "EC2", label="Deploy")

dot.edge("EC2", "CloudWatch", label="Metrics & Logs")

dot.render(cleanup=True)
print("✅ 架构图已生成: docs/architecture.png")
